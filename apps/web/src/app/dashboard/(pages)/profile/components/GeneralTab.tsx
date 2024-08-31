"use client";

import { validationSchema } from "@/app/dashboard/(pages)/profile/validationSchema";
import FormInputt from "@/components/FormInputt";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useGetProfile from "@/hooks/api/dashboard/useGetProfile";
import { useFormik } from "formik";
import { PiStudent } from "react-icons/pi";
import FormInput from "./FormInput";
import ProfilePicture from "./ProfilePicture";
import Tooltip from "./Tooltip";

interface GeneralProps {}

const GeneralTab: React.FC<GeneralProps> = () => {

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
    // <form onSubmit={handleSubmit}>

    // </form>
    <div>
      <div className="p-2">
        <div className="space-y-2">
          <p className="text-sm font-bold">Personal Data</p>
          <p className="text-xs text-slate-600">
            Fill in the data according to your ID card
          </p>
        </div>
        <div className="mt-5 p-2">
{/* {getProfile.map((avatar: any) => {
    return (
        <ProfilePicture key={avatar.id} profileImageUrl={avatar.profileImageUrl}/>
    )
})} */}
          <Avatar className="size-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <button className="cursor-pointer text-xs text-[#1c71cd]">
            Change Picture
          </button>

          <div className="mt-2 space-y-2">
            <p className="text-xs text-slate-600">Status</p>
            <Badge variant="secondary" className="gap-1 text-[#1c71cd]">
              {" "}
              <PiStudent />
              Peserta
            </Badge>
          </div>

          <div className="mt-4 flex items-center justify-between ">
            <FormInputt
              name="firstName"
              type="string"
              label="First Name"
              placeholder="First Name"
              value={values.firstName}
              error={errors.firstName}
              isError={!!touched.firstName && !!errors.firstName}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />

            <FormInput
              name="lastName"
              type="string"
              label="Last Name"
              placeholder="Last Name"
              value={values.lastName}
              error={errors.lastName}
              isError={!!touched.lastName && !!errors.lastName}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>

          <div className="my-3 flex items-center justify-between space-x-8">
            <Tooltip label="Email" email="rizkijadida@gmail.com" name="Email" />

            <FormInput
              name="phoneNumber"
              type="number"
              label="Phone Number"
              placeholder="phone Number"
              value={values.phoneNumber}
              error={errors.phoneNumber}
              isError={false}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>

          <div className="grid gap-y-2">
            <p className="text-xs font-medium text-gray-700">Gender</p>
            <RadioGroup defaultValue="comfortable" className="flex">
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="male" id="r1" />
                <Label htmlFor="r1" className="text-xs">
                  Male
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="female" id="r2" />
                <Label htmlFor="r2" className="text-xs">
                  Female
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mt-4">
            <Label className="text-xs font-medium text-gray-700">
              Date Of Birth
            </Label>
            <Input
              className="flex w-full cursor-pointer items-end justify-between rounded-md border border-[#1c71cd] text-base focus:border-[#1c71cd] sm:text-sm"
              type="date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralTab;
