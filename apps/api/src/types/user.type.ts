export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: boolean;
  level: any;
  email: string;
  image: string;
  password: string;
}

export interface UserDetail {
  id: number;
  image: string;
  address: string;
  dateoFBirth: Date;
  postalCode: string;
  userId: number;
}
