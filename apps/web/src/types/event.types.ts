import { TipeEvent } from '@prisma/client';
import { EventStatus } from './event.status';
import { RegistrationMethod } from './registration.method';
import { TargetPeserta } from './target.peserta';

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
  regsitrationFee: number;
  registrationReuirement: string;
}


export interface IformCreateEvent {
  adminId: number
  name: string;
  level: level;
  category: string;
  content: string;
  description: string;
  thumbnail: File[];
  link: string;
  startDate: Date;
  registerAt: number;
  timeDifferencesAt: string;
}

export enum level {
  SD,
  SMP,
  SMA,
  MAHASISWA,
  GURU_SD,
  GURU_SMP,
  GURU_SMA,
}
