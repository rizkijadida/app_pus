<<<<<<< HEAD
=======

>>>>>>> origin/main
"use client";
import React from "react";
import { Label } from "./ui/label";

export interface FormSelectProps {
  id: string;
  options: Array<{ value: string; label: string }>; // Array of options
  value: string; // Selected value
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string; // Optional label for the select input
  placeholder?: string; // Optional placeholder for the select input
  disabled?: boolean; // Optional disabled state
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  options,
  value,
  onChange,
  label,
  placeholder,
  disabled = false,
}) => {
  return (
    <div className="form-select">
      {label && (
        <Label className="block text-xs font-medium text-gray-700">
          {label}
        </Label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="block w-full rounded-md border border-[#1c71cd] py-4 pl-3 pr-10 text-base focus:border-[#1c71cd] sm:text-sm"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
