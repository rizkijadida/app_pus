import { hashedPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import jwt from 'jsonwebtoken';
interface VerifyBody {
  token: string;
  password: string;
}

interface JwtPaylaod {
  id: number;
}
export const ResetPassowrdService = async (body: VerifyBody) => {
  try {
    const { token, password } = body;
    const decodeToken = jwt.decode(token) as JwtPaylaod;
    const userId = decodeToken.id;

    const ValidateUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!ValidateUser) {
      throw new Error('User Not Found');
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        isVerified: true,
        password: await hashedPassword(password),
      },
    });

    return {
      message: 'verify succeess',
    };
  } catch (error) {
    throw error;
  }
};
