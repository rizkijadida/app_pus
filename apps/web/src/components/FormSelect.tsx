// 'use client';
// import React from 'react';
// import { FieldProps } from 'formik';
// import { Select } from './ui/select';
// import { Label } from './ui/label';

// interface FormSelectProps extends FieldProps {
//   name: string;
//   options: Array<{ value: string; label: string }>;
//   placeholder?: string;
//   isError?: boolean;
//   error?: string | undefined;
// }

// const FormSelect: React.FC<FormSelectProps> = ({
//   field, // { name, value, onChange, onBlur }
//   form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc
//   name,
//   options,
//   placeholder,
//   isError,
//   error,
// }) => (
//   <div className="form-group">
//     <Label htmlFor={name} className={isError ? 'text-red-500' : 'text-black'}>
//       {name}
//     </Label>
//     <Select
//       id={field.name}
//       name={field.name}
//       value={field.value}
//       onChange={field.onChange}
//       onBlur={field.onBlur}
//       placeholder={placeholder}
//       isError={isError}
//     >
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </Select>
//   </div>
// );

// export default FormSelect;
