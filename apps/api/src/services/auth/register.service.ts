import { User } from '@/types/user.type';
import prisma from '../../prisma';
import { hashedPassword } from '../../lib/bcrypt';

export const RegisterService = async (body: Omit<User, "id" | "image">) => {
  try {
     const {email, password } = body;

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error('email already exist');
    }

    const hashPassword = await hashedPassword(password);

    const newUser = await prisma.user.create({
    data: {...body, password: hashPassword}
    });
  
    
    return {
      message: 'register success',
      data: newUser,
    };
  } catch (error) {
    throw error;
  }
};
