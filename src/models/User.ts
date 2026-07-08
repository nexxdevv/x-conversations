export interface User {
  _id?: string;

  name: string;

  email: string;

  image?: string;

  createdAt: Date;

  lastLogin: Date;

  online: boolean;
}