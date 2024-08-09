import { User } from '@prisma/client';
import { hashedPassword } from '../../lib/bcrypt';
import prisma from '../../prisma';

export const RegisterService = async (
  body: Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'level' |'password'>,
) => {
  try {
    // const newUser = await prisma.user.create({
    //   data: {
    //     ...body,
    //     password: hashPassword,
    //   },
    // });

    // const token = req.headers.authorization?.split(' ')[1]; // const token = req.headers.authorization?.split(' ')[1];
    // await transporter.sendMail({
    //   from: process.env.GMAIL_EMAIL,
    //   to: email,
    //   subject: 'Register Success',
    //   text:
    //     `klik link dibawah ini untuk verifikasi akun anda ` +
    //     `${BASE_WEB}/verify?token=${generateToken}`,
    // });

    const { email, password, } = body;
    const existigUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existigUser) {
      throw new Error('email already exist');
    }

    const hashPassword = await hashedPassword(password);

    const newUser = await prisma.user.create({
      data: { ...body, password: hashPassword },
    });
    // const token = sign({ id: newUser.id }, JWT_SECRET, {
    //   expiresIn: '2h',
    // });
    
    return {
      message: 'register success',
      data: newUser,
      // token,
    }
  } catch (error) {
    throw error;
  }
};
