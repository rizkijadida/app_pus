export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerified: boolean;
  isDeleted: boolean;
  token: string;
  createdAt: Date;
  updatedAt: Date;
  cart: string;
  event: string;
}
