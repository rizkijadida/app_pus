"use client";

import { FormikHandlers } from "formik";
import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

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

const FormInputt: React.FC<FormInputProps> = ({
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
    <div className="flex w-[300px] flex-col ">
      <div className={isError ? "text-red-500" : "text-black"}>
        <Label htmlFor={name} className="fot-light text-sm">
          {label}
        </Label>
      </div>
      <Input
        name={name}
        type={type} 
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        className={isError ? "border-red-500" : ""}
      />
      {isError ? (
        <div className="w-[72vh] text-xs text-red-500">{error}</div>
      ) : null}
    </div>
  );
};

export default FormInputt;
