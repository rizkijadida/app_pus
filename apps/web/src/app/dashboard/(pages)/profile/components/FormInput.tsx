"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormikHandlers } from "formik";
import React, { HTMLInputTypeAttribute } from "react";

interface FormInputProps {
  name: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  value: string | number;
  isError: boolean;
  error: string | undefined;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  value,
  isError,
  error,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="form-input block">
      <Label htmlFor={name} className="block text-xs font-medium text-gray-700">
        {label}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        className="flex justify-between items-end w-full rounded-md border border-[#1c71cd] py-4 pr-[350px] text-base focus:border-[#1c71cd] sm:text-sm"
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormInput;
