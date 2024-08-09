import prisma from '@/prisma';
import { User } from '@prisma/client';

export const GetUsersService = async (body: User) => {
  try {
    const { id, createdAt, email, firstName, lastName,updatedAt } = body;

    const users = await prisma.user.findMany({
      where: { email, firstName , lastName, createdAt, updatedAt },
    });

    return {
      data: users,
      meta: { email, firstName, lastName, createdAt, updatedAt },
    };
  } catch (error) {
    throw error;
  }
};
