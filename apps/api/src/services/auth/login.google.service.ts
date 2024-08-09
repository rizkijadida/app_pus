// import { BASE_WEB, JWT_SECRET } from '@/config';
// import prisma from '@/prisma';
// import { google } from 'googleapis';
// import { sign } from 'jsonwebtoken';

// interface GoogleUser {
//   id: string;
//   email: string;
//   verified_email: boolean;
//   name: string;
//   given_name: string;
//   family_name: string;
//   picture: string;
//   locale: string;
// }

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_OAUTH_CLIENT_ID,
//   process.env.GOOGLE_OAUTH_CLIENT_SECRET,
//   BASE_WEB,
// );

// export const LoginGoogleService = async (code: string) => {
//   try {
//     const { tokens } = await oAuth2Client.getToken(code);
//     oAuth2Client.setCredentials(tokens);

//     const response = await oAuth2Client.request({
//       url: 'https://www.googleapis.com/oauth2/v3/userinfo',
//     });

//     const data = response.data as GoogleUser;

//     const existingUser = await prisma.user.findFirst({
//       where: {
//         email: data.email,
//         firstName: data.given_name,
//         lastName: data.family_name,
//       },
//     });

//     if (!existingUser) {
//       throw new Error('Error Not Found');
//     }

//     const token = sign({ id: existingUser.id }, JWT_SECRET, {
//       expiresIn: '2h',
//     });

//     if (!existingUser) {
//       throw new Error('User Not Found');
//     }

//     return { message: 'Login Success', data: existingUser, token };
//   } catch (error) {
//     console.error('Error in Google login service:', error);
//     throw new Error('Google login failed');
//   }
// };
