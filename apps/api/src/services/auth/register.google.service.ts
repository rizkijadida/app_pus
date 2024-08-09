// import { BASE_WEB } from '@/config';
// import prisma from '@/prisma';
// import { google } from 'googleapis';

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_OAUTH_CLIENT_ID,
//   process.env.GOOGLE_OAUTH_CLIENT_SECRET,
//   BASE_WEB,
// );

// interface GoogleUser {
//   id: string;
//   email: string;
//   verified_email: boolean;
//   name: string;
//   given_name: string;
//   family_name: string;
//   picture: string;
//   locale: string;
//   password: string
// }

// export const RegisterGoogleService = async (code: string) => {
//   try {
//     const { tokens } = await oAuth2Client.getToken(code);
//     const response = await oAuth2Client.request({
//       url: 'https://www.googleapis.com/oauth2/v3/userinfo',
//     });
//     const data = response.data as GoogleUser;

//     const existingUser = await prisma.user.findFirst({
//       where: {
//         email: data.email,
//       },
//     });

//     if (!existingUser) {
//       const existingUser = await prisma.user.create({
//         data: {
//           email: data.email,
//           firstName: data.given_name,
//           password: data.password,
//           lastName: data.family_name,
//           iseDeleted: false,
//           token: '0',
//           isVerified: true,
//         },
//       });
//     }

//     return { message: 'register success', data: existingUser };
//   } catch (error) {
//     console.error('Error in Google login service:', error);
//     throw new Error('Google login failed');
//   }
// };
