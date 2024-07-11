import { transpoter } from '@/lib/nodemailer';
import prisma from '@/prisma';
import { JWT_SECRET, NEXT_BASE_URL } from '@/utils/config';
import { sign } from 'jsonwebtoken';
import { join } from 'path';
import fs from 'fs/promises';
import Handlebars from 'handlebars';

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

    const templatePath = join(__dirname, '../templates', 'template.hbs');

    const templateSource = await fs.readFile(templatePath, 'utf-8');

    const compileTemplate = Handlebars.compile(templateSource);

    const html = compileTemplate({ name: 'Rizki' });

    await transpoter.sendMail({
      from: 'rizkijadida@gmail.com',
      to: email,
      subject: 'Link Reset Password',
      html: html,
    });

    return {
      message: 'email reset password has been sent',
      data: transpoter,
    };
  } catch (error) {
    throw error;
  }
};
