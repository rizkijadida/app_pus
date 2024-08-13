import { TargetPeserta } from '@prisma/client';
import { EventStatus } from './event.status';
import { RegistrationMethod } from './registration.method';
// import { TipeEvent } from './tipe.event.type';
import { TipeEvent } from '@prisma/client';

export interface Event {
  id: number;
  name: string;
  image: string;
  twibbon: string;
  maxStudyField: number;
  linkJuknis: string;
  user: { id: number };
  registrationMethod: RegistrationMethod;
  startRegistration : Date;
  endRegistration: Date;
  eventDate: Date;
  createdAt: Date;
  updatedAt: Date;
  targetPeserta: TargetPeserta;
  tipeEvent: TipeEvent;
  eventStatus: EventStatus;
  regsitrationFee: number | null;
  registrationReuirement: string;
}
