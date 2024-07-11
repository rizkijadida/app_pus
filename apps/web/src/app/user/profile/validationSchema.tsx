import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('fullname is required'),
  email: Yup.string().required('email is required').email(),
//   isi phone number dan address nanti, tapi sebelum itu tambah juga colom alamat di prisma nya
});
