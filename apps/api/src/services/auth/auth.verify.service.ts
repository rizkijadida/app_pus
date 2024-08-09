import { comparePassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import jwt from 'jsonwebtoken';

interface VerifyBody {
  token: string;
  password: string;
}
interface jwtPayload {
  id: number;
}

export const AuthVerifyService = async (body: VerifyBody) => {
  try {
    const { token, password } = body;
    const decodeToken = jwt.decode(token) as jwtPayload;

    const userId = decodeToken.id;
    const ValidateUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!ValidateUser) {
      throw new Error('User Not Found');
    }

    if (!ValidateUser.password) {
      throw new Error('Password not set for the user');
    }

    const isPasswordCorrect = await comparePassword(
      password,
      ValidateUser.password,
    );

    if (!isPasswordCorrect) {
      throw new Error('Incorrect Password');
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        isVerified: true,
      },
    });

    return {
      message: 'Verify Success',
    };
  } catch (error) {
    throw error;
  }
};
