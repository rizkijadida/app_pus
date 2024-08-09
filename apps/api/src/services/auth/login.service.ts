import { JWT_SECRET } from '@/config';
import { sign } from 'jsonwebtoken';
import { comparePassword } from '../../lib/bcrypt';
import prisma from '../../prisma';
import { User } from '@prisma/client';

export const LoginService = async (body: Pick<User, 'email' | 'password'>) => {
  try {
    // const { email, password } = body;
    // const existingUser = await prisma.user.findFirst({
    //   where: { email, password },
    // });

    // if (!existingUser?.email) {
    //   throw new Error('email not found');
    // }

    // if (!existingUser.password) {
    //   throw new Error('password not set for the user');
    // }

    // const isPasswordValid = await comparePassword(
    //   password,
    //   existingUser.password,
    // );

    // if (!isPasswordValid) {
    //   throw new Error('incorrect Password');
    // }

    // const token = sign({ id: existingUser.id }, JWT_SECRET, {
    //   expiresIn: '2h',
    // });

    // return {
    //   message: 'login success',
    //   data: {
    //     ...existingUser,
    //   },
    //   token,
    // };

    const { email, password } = body;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error('invalid email address');
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      throw new Error('incorrect password');
    }

    // const token = sign({ id: user.id }, JWT_SECRET, {
    //   expiresIn: '2h',
    // });
    // console.log('JWT_SECRET:', JWT_SECRET); // Hapus atau komentar baris ini

    
    return {
      message: 'login success',
      data: user,
      // token,
    };
  } catch (error) {
    throw error;
  }
};
