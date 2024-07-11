import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
  email: Yup.string().required('email is required').email(),
  password: Yup.string().required('password is required'),
  level: Yup.string().required?.('level is required')
});
