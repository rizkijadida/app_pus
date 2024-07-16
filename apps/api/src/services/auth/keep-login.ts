import prisma from '@/prisma';

export const KeepLoginService = async (id: number) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
        throw new Error("invalid user Id")
    }


    return {
        message: "keep login succes",
        data:user
    }
  } catch (error) {
    throw error;
  }
};
