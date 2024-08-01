import prisma from '@/prisma';

export const GetCartService = async (id: number) => {
  try {
    const cart = await prisma.cart.findFirst({
      where: { userDetailId: id },
      include: { 
        CartItem: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart) {
      return { empty: true, items: [] };
    }
  } catch (error) {
    throw error;
  }
};
