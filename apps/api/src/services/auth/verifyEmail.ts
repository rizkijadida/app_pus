import { BASE_WEB, JWT_SECRET } from '@/config';
import { transporter } from '@/lib/nodemailer';
import prisma from '@/prisma';
import { User } from '@/types/user.type';
import { sign } from 'jsonwebtoken';

export const VerifyEmailService = async (body: Pick<User, 'email'>) => {
  try {
    const { email } = body;
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      throw new Error('User Not Found');
    }

    if (!user.password) {
      throw new Error('Password incorrect');
    }
    const generateToken = sign({ id: user.id }, JWT_SECRET, {
      expiresIn: '2h',
    });
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: 'reset  your password',
      text:
        'klik link dibawah ini untuk reset password ' +
        `${BASE_WEB}/forgotpassword/reset-password?token=${generateToken}`,
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { token: generateToken },
    });

    return { message: 'verify email success' };
  } catch (error) {
    throw error;
  }
};
