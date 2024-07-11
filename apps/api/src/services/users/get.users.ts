import prisma from '@/prisma';
import { Prisma, User } from '@prisma/client';

export const GetUsersService = async (body: User) => {
  try {
    const { id, createdAt, email, firstName, lastName, gender, updatedAt } = body;

    const users = await prisma.user.findMany({
      where: { email, firstName , lastName, createdAt, updatedAt },
    });

    return {
      data: users,
      meta: { email, firstName, lastName, gender, createdAt, updatedAt },
    };
  } catch (error) {
    throw error;
  }
};
