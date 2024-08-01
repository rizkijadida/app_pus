export interface Event {
  id: number;
  startDate: Date;
  title: string;
  category: string;
  content: string;
  description: string;
  thumbnail: string;
  registerAt: number;
  link: string;
}

export interface IformCreateEvent {
  adminId: number
  title: string;
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
