// "use client";

// import { validationSchema } from "@/app/dashboard/(pages)/profile/validationSchema";

// import { Label } from "@/components/ui/label";

// import * as React from "react";

// import { Input } from "@/components/ui/input";
// import useGetProfile from "@/hooks/api/dashboard/useGetProfile";
// import { useFormik } from "formik";
// import FormInput from "./FormInput";

// interface SecurityProps {}

// const SecurityTab: React.FC<SecurityProps> = () => {
//   const { getProfile } = useGetProfile();
//   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
//     useFormik({
//       initialValues: {
//         id: 0,
//         gender: true,
//         postalCode: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//         address: "",
//         dateOfBirth: "",
//         phoneNumber: "",
//         level: "",
//         currentPassword: "",
//         newPassword: "",
//         confirmNewPassword: "",
//       },
//       validationSchema,
//       onSubmit: (values) => {
//         getProfile(values);
//       },
//     });
//   return (
//     <div>
//       <div className="p-2">
//         <div className="space-y-2">
//           <p className="text-sm font-bold">Password</p>
//         </div>

//         <div className="mt-4 space-y-5">
//           <FormInput
//             name="password"
//             type="password"
//             label="Current Password"
//             placeholder="Current Password"
//             value={values.currentPassword}
//             error={errors.currentPassword}
//             isError={!!touched.currentPassword && !!errors.currentPassword}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />

//           <FormInput
//             name="newpassword"
//             type="password"
//             label="New Password"
//             placeholder="New Password"
//             value={values.newPassword}
//             error={errors.newPassword}
//             isError={!!touched.newPassword && !!errors.newPassword}
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />

//           <FormInput
//             name="confirmnewpassword"
//             type="password"
//             label="Confirm New Password"
//             placeholder="Confirm New Password"
//             value={values.confirmNewPassword}
//             error={errors.confirmNewPassword}
//             isError={
//               !!touched.confirmNewPassword && !!errors.confirmNewPassword
//             }
//             handleChange={handleChange}
//             handleBlur={handleBlur}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecurityTab;
