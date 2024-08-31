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
import useLogin from "@/hooks/api/auth/useLogin";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { validationSchema } from "./validationSchema";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const { login, isLoading } = useLogin();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <main className="container mx-auto h-[100vh] bg-gradient-to-r from-[#2853b2] to-[#1c71cd] px-4">
      <div className="flex justify-center">
        
        <form onSubmit={handleSubmit}>
          <Card className="my-20 w-[350px] bg-white">
            <CardHeader>
              <CardTitle className="text-primary text-center text-2xl">
                SIGN IN
              </CardTitle>
              <CardDescription className="text-center text-black">
                Welcome To Puskanas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  {/* email */}
                  <FormInput
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Email"
                    value={values.email}
                    error={errors.email}
                    isError={!!touched.email && !!errors.email}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  {/* password */}
                  <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={values.password}
                    error={errors.password}
                    isError={!!touched.password && !!errors.password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
              </form>
            </CardContent>
            <div className="mx-6 flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-end text-xs">
                  Remember Me?
                </Label>
              </div>
              <p
                className="cursor-pointer text-end text-xs underline"
                onClick={() => router.push("/forgot-password")}
              >
                forgot password?
              </p>
            </div>
            <CardFooter className="flex justify-center">
              <div className="grid">
                <Button
                  className="my-5 w-[300px] rounded-xl bg-orange-300 text-sm font-medium"
                  variant={"default"}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className=" animate-spin" /> : 'Sign In'}
                </Button>
                <Link className="text-center text-xs underline" href="/auth/register">
                  Dont have account? click here to sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </main>
  );
};

export default Login;
