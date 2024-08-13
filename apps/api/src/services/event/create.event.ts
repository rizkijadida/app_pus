import { Event } from '@prisma/client';
import prisma from '../../prisma';

interface CreateEventParams
  extends Pick<
    Event,
    | 'name'
    | 'image'
    | 'twibbon'
    | 'targetPeserta'
    | 'tipeEvent'
    | 'startRegistration'
    | 'endRegistration'
    | 'eventDate'
    | 'eventStatus'
    | 'registrationMetod'
    | 'registrationFee'
    | 'linkJuknis'
    | 'registrationRequirement'
    | 'userId'
    | 'maxStudyField'
  > {}

export const CreateEventService = async (body: CreateEventParams, file: Express.Multer.File,) => {
  try {
    if (!body.userId) {
      throw new Error('please login first then u can create an event');
    }

    const userId = Number(body.userId);

    const { image, twibbon } = body;
    const { name } = body;

    if (
      !image &&
      !twibbon &&
      !body.name &&
      !body.targetPeserta &&
      !body.tipeEvent &&
      !body.eventDate &&
      !body.startRegistration &&
      !body.endRegistration &&
      !body.eventStatus &&
      !body.registrationMetod &&
      !body.maxStudyField &&
      !body.linkJuknis &&
      !body.registrationRequirement
    ) {
      throw new Error('Please fill in all required fields');
    }

    const existingName = await prisma.event.findFirst({
      where: { name: name },
    });

    if (existingName) {
      throw new Error(
        'Event name already exists, please choose a different name',
      );
    }

    const user = await prisma.user.findFirst({
      where: { id: Number(userId) },
    });

    if (!user) {
        throw new Error('user not found');
      }

    const createEvent = await prisma.event.create({
      data: {
        name: body.name,
        targetPeserta: body.targetPeserta,
        tipeEvent: body.tipeEvent,
        eventDate: new Date(body.eventDate),
        startRegistration: new Date(body.startRegistration),
        endRegistration: new Date(body.endRegistration),
        eventStatus: body.eventStatus,
        registrationFee: Number(body.registrationFee),
        registrationMetod: body.registrationMetod,
        maxStudyField: Number(body.maxStudyField),
        linkJuknis: body.linkJuknis,
        registrationRequirement: body.registrationRequirement,
        image: `/images/${file.filename}`,
        twibbon: `/images/${file.filename}`,
        userId: Number(userId),
      },
    });

    return createEvent;
  } catch (error) {
    throw error;
  }
};
