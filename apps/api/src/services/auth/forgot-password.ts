import { transpoter } from '@/lib/nodemailer';
import prisma from '@/prisma';
import { JWT_SECRET, NEXT_BASE_URL } from '@/utils/config';
import { sign } from 'jsonwebtoken';

export const ForgotPassowrdService = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error('invalid email address');
    }

    const token = sign({ id: user.id }, JWT_SECRET, {
      expiresIn: '30M',
    });

    const link = NEXT_BASE_URL + `/reset-password?token=${token}`;

    await transpoter.sendMail({
      from: 'rizkijadida@gmail.com',
      to: email,
      subject: 'Link Reset Password',
      html: `<a href="${link}" target="_blank">Reset Password Here </a>`,
    });

    return {
      message: 'email reset password has been sent',
      data: transpoter
    };
  } catch (error) {
    throw error;
  }
};
