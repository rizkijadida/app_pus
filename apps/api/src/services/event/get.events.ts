import prisma from '@/prisma';
import { PageInationParams } from '@/types/pageInation.type';
import { Event, Prisma } from '@prisma/client';

interface GetEventsQuery extends PageInationParams {
  search: string;
}

export const getEventsService = async (query: GetEventsQuery) => {
  try {
    const { page, sortBy, sortOrder, take, search } = query;

    const whereClause: Prisma.EventWhereInput = {
      name: { contains: search },
    };

    const events = await prisma.event.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: {
        [sortBy]: sortOrder,
      }
    });

    const count = await prisma.event.count({
        where: whereClause,
    })

    return {
        data: events,
        meta: {page, take, total: count }
    }

  //   const {name, eventDate, startRegistration, endRegistration, registrationFee, linkJuknis} = query 

  //   const events = await prisma.event.findMany({
  // //  skip: {startRegistration: startRegistration} , 
  // // take: {name: name}
  // include: {name: name}
  //   })

  
  } catch (error) {
    throw error;
  }
};
