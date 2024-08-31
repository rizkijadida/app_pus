"use client";
import FormInput from "@/components/FormInputt";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useRegister from "@/hooks/api/auth/useRegister";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { validationSchema } from "./validationSchema";


const Register = () => { 
  const { register, isLoading } = useRegister();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        level: "",
      },
      validationSchema,
      onSubmit: (values) => {
        register(values)
      },
    });

    

  return (
    <main className="mt-relative container mx-auto h-[200vh] bg-gradient-to-r from-[#2853b2] to-[#1c71cd] px-4">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <Card className="h-relative my-20 w-[350px] bg-white">
            <CardHeader>
              <CardTitle className="text-primary text-center text-2xl">
                SIGN UP
              </CardTitle>
              <CardDescription className="text-center text-sm text-black">
                Welcome To Puskanas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <FormInput
                name="email"
                type="text"
                label="Email"
                placeholder="email"
                value={values.email}
                error={errors.email}
                isError={!!touched.email && !!errors.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
               

              {/* firstName */}
              <FormInput
                name="firstName"
                type="text"
                label="First Name"
                placeholder="first Name"
                value={values.firstName}
                error={errors.firstName}
                isError={!!touched.firstName && !!errors.firstName}
                handleChange={handleChange}
                handleBlur={handleBlur}
              /> 

              {/* lastName */}
              <FormInput
                name="lastName"
                type="text"
                label="Last Name"
                placeholder="Last Name"
                value={values.lastName}
                error={errors.lastName}
                isError={!!touched.lastName && !!errors.lastName}
                handleChange={handleChange}
                handleBlur={handleBlur}
              /> 

              {/* password */}
              <FormInput
                name="password"
                type="password"
                label="Password"
                placeholder="password"
                value={values.password}
                error={errors.password}
                isError={!!touched.password && !!errors.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
              /> 

              {/* grade */}

              <div className="flex w-[300px] flex-col">
                {/* <div className={isError ? "text-red-500" : "text-black"}> */}
                <Label htmlFor={"level"} className="fot-light text-sm">
                  Jenjang
                </Label>
                {/* </div> */}
                <Select onValueChange={(value) => handleChange({target: {name: 'level', value}})}>
                  <SelectTrigger className="w-[300px] bg-white">
                    <SelectValue placeholder="Jenjang" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="SD">SD / MI</SelectItem>
                    <SelectItem value="SMP">SMP / MTs</SelectItem>
                    <SelectItem value="SMA">SMA / SMK / MA</SelectItem>
                    <SelectItem value="MAHASISWA">Mahasiswa</SelectItem>
                    <SelectItem value=" GURU_SD">Guru SD / MI</SelectItem>
                    <SelectItem value="GURU_SMP">Guru SMP / MTs</SelectItem>
                    <SelectItem value="GURU_SMA">
                      Guru SMA / SMK / MA
                    </SelectItem>
                   
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <div className="mx-6 flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-end text-xs">
                  Remember Me?
                </Label>
              </div>
              <Link
                className="cursor-pointer text-end text-xs underline"
                href="/auth/forgot-password"
              >
                forgot password?
              </Link>
            </div>
            <CardFooter className="flex justify-center">
              <div className="grid">
                <Button
                  className="my-5 w-[300px] rounded-xl bg-orange-300 text-sm font-medium"
                  variant={"default"}
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <Loader2 className=" animate-spin" /> : 'Sign Up'}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </main>
  );
};

export default Register;
