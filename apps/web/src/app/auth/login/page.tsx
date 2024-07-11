'use client';
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import useLogin from '@/hooks/api/auth/useLogin';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { validationSchema } from './validationSchema';

const Login = () => {
  const router = useRouter();
  const { login } = useLogin();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <main className="container mx-auto h-[90vh] px-4 bg-gradient-to-r from-[#2853b2] to-[#1c71cd]">
      <div className=" flex justify-center">
        <Card className="w-[450px] my-24">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              SIGN IN
            </CardTitle>
            <CardDescription className="text-black text-center">
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
          <div className="flex justify-between mx-6">
            <div className="flex items-center space-x-2 ">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-end text-xs">
                Remember Me?
              </Label>
            </div>
            <p
              className="cursor-pointer text-end text-xs"
              onClick={() => router.push('/forgot-password')}
            >
              forgot password?
            </p>
          </div>
          <CardFooter className="flex justify-center">
            <div className="grid">
              <Button className="my-5" type="submit">
                Sign In
              </Button>
              <p className="text-end text-xs">
                Dont have account?{' '}
                <a href="/register" className="cursor-pointer ">
                  click here to sign up
                </a>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Login;
