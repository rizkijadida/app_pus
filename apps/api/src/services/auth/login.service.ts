import { User } from '@/types/user.type';
import { appConfig } from '@/utils/config';
import { sign } from 'jsonwebtoken';
import { comparePassword } from '../../lib/bcrypt';
import prisma from '../../prisma';

export const LoginService = async (body: Pick<User, 'email' | 'password'>) => {
  try {
    const { email, password } = body;
    const user = await prisma.user.findFirst({
     where: {email}
    });

    if (!user) {
      throw new Error('invalid email address');
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      throw new Error('incorrect Password');
    }

    const token = sign({ id: user.id }, appConfig.jwtSecretKey, {
      expiresIn: '2h',
    });
    return {
      message: 'login success',
      data: user,
      token,
    };
  } catch (error) {
    throw error;
  }
};
