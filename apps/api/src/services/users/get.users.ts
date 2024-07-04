import prisma from '@/prisma';
import { Prisma, User } from '@prisma/client';



export const GetUsersService = async (body: User) => {
  try {
    const { id, createdAt, email, fullName,  updatedAt } = body;
   
    const users = await prisma.user.findMany({
        where: { email, fullName, createdAt, updatedAt}
    });

    return {
      data: users,
      meta: { email, fullName, createdAt, updatedAt },
    };
  } catch (error) {
    throw error;
  }
};
