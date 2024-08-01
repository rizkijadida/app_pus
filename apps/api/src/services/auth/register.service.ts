import prisma from '../../prisma';
import { hashedPassword } from '../../lib/bcrypt';
import { User } from '@prisma/client';

export const RegisterService = async (
  body: Omit<User, 'id' | 'userDetail' | 'createdAt' | 'updatedAt'>,
) => {
  try {
    const { email, password, phoneNumber } = body;

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const existingPhoneNumber = await prisma.user.findFirst({
      where: { phoneNumber },
    });

    if (existingPhoneNumber) {
      return { message: 'Phone number has been registered' };
    }

    const hashPassword = await hashedPassword(password);

    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: hashPassword,
      },
    });

    return {
      message: 'register success',
      data: newUser,
    };
  } catch (error) {
    throw error;
  }
};
