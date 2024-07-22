"use client";

import { validationSchema } from "@/app/dashboard/(pages)/profile/validationSchema";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import * as React from "react";

import { Input } from "@/components/ui/input";
import useGetProfile from "@/hooks/api/dashboard/useGetProfile";
import { useFormik } from "formik";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import Tooltip from "./components/Tooltip";
import { Textarea } from "@/components/ui/textarea";

interface PrivacyProps {}

const PrivacyTab: React.FC<PrivacyProps> = () => {
  const [selectedValue, setSelectedValue] = React.useState<string>("option1");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: "Medan", label: "Medan" },
    { value: "Jakarta", label: "Jakarta" },
    { value: "Jogja", label: "Jogja" },
  ];

  const { getProfile } = useGetProfile();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        id: 0,
        gender: true,
        postalCode: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        dateOfBirth: "",
        phoneNumber: "",
        level: "",
      },
      validationSchema,
      onSubmit: (values) => {
        getProfile(values);
      },
    });
  return (
    <div>
      <div className="p-2">
        <div className="space-y-2">
          <p className="text-sm font-bold">Identify & Address</p>
          <p className="text-xs text-slate-600">
            Fill in the data according to your ID card
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <FormSelect
            id="example-select"
            label="City"
            options={options}
            value={selectedValue}
            onChange={handleSelectChange}
            placeholder="city"
          />

          <FormInput
            name="postalCode"
            type="number"
            label="Postal Code"
            placeholder="Postal Code"
            value={values.postalCode}
            error={errors.postalCode}
            isError={!!touched.postalCode && !!errors.postalCode}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>

        <div className="mt-5 grid gap-y-2">
          {/* ADDRESS */}
          <Label className="text-xs font-medium text-gray-700">Address</Label>
          <Textarea
            placeholder="Address"
            className="border border-[#1c71cd] text-base focus:border-[#1c71cd]"
          />
        </div>

        <div className="mt-4">
          <Label className="text-xs font-medium text-gray-700">
            ID Card Number
          </Label>
          <Input
            className="flex w-full cursor-pointer items-end justify-between rounded-md border border-[#1c71cd] text-base focus:border-[#1c71cd] sm:text-sm"
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyTab;
