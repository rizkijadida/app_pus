import { User } from '@/types/user.type';
import prisma from '../../prisma';
import { hashedPassword } from '../../lib/bcrypt';
import { Prisma } from '@prisma/client';

export const RegisterService = async (
  body: Omit<User, 'id' | 'image' | 'gender'>,
) => {
  try {
    const { email, password, phoneNumber, level } = body;

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });
    if (existingUser) {
      throw new Error('email already exist');
    }

    const existingphoneNumber = await prisma.user.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (existingphoneNumber) {
      return { message: 'nomber has been registerred' };
    }
    if (
      !phoneNumber ||
      phoneNumber.length < 10 ||
      phoneNumber.length > 15 ||
      isNaN(parseInt(phoneNumber))
    ) {
      return { message: 'invalid phone number' };
    }

    const hashPassword = await hashedPassword(password);

    const newUser = await prisma.user.create({
      data: { ...body, password: hashPassword },
    });

    return {
      message: 'register success',
      data: newUser,
    };
  } catch (error) {
    throw error;
  }
};
