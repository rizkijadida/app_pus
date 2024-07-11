import prisma from '@/prisma';

export const GetUserService = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
     throw new Error('user not found!');
    }
    
    return user
  } catch (error) {
    throw error;
  }
};
