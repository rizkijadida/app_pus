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
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { validationSchema } from './validationSchema';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
});

const Register = () => {
  const router = useRouter();
  const { register } = useRegister();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        level: '',
      },
      validationSchema,
      onSubmit: (values) => {
        register(values);
      },
    });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <main className="container mx-auto h-[200vh] px-4 bg-gradient-to-r from-[#2853b2] to-[#1c71cd]">
      <div className=" flex justify-center">
        <Card className="w-[350px] my-20">

          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              SIGN UP
            </CardTitle>
            <CardDescription className="text-black text-center">
              Welcome To Puskanas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
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

                {/* email */}
                <FormInput
                  name="email"
                  type="text"
                  label="email"
                  placeholder="email"
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
                  label="password"
                  placeholder="password"
                  value={values.password}
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                {/* no hp */}
                <FormInput
                  name="phoneNumber"

                  type="number"
                  label="Phone Number"
                  placeholder="Phone Number"
                  value={values.phoneNumber}
                  error={errors.phoneNumber}
                  isError={!!touched.phoneNumber && !!errors.phoneNumber}

                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />


                {/* grade */}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-7/8 -space-y-14"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jenjang</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih Jenjang Anda" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Siswa - SD/MI">
                                Siswa - SD/MI
                              </SelectItem>
                              <SelectItem value="Siswa - SMP/MTs">
                                Siswa - SMP/MTs
                              </SelectItem>
                              <SelectItem value="Siswa - SMA/MA/SMK">
                                Siswa - SMA/MA/SMK
                              </SelectItem>
                              <SelectItem value="Mahasiswa">
                                Mahasiswa
                              </SelectItem>
                              <SelectItem value="Guru - SD/MI">
                                Guru - SD/MI
                              </SelectItem>
                              <SelectItem value="Guru - SMP/MTs">
                                Guru - SMP/MTs
                              </SelectItem>
                              <SelectItem value="Guru - SMA/MA/SMK">
                                Guru - SMA/MA/SMK
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>

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

export default Register;
