import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("first name is required"),
  lastName: Yup.string().required("last name is required"),
  email: Yup.string().required("email is required").email(),
  address: Yup.string().required("address is required"),
  level: Yup.string().required?.("level is required"),
  dateOfBirth: Yup.date().required("date of birth is required"),
  phoneNumber: Yup.string().required("phone number is required"),
  postaLCode: Yup.string().required("postal code is required"),
  password: Yup.string().required("password is a required field")
});
