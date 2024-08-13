"use client";
import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { registerAction } from "@/redux/slices/user/userSlice";
import { User } from "@/types/userTypes/user.types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
// import { useNotification } from "../useNotification";

interface RegisterArgs
  extends Pick<
    User,
    "email" | "level" | "firstName" | "lastName" | "password"
  > {}

const useRegister = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const register = async (payload: RegisterArgs) => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstance.post("/auth/register", {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
        level: payload.level,
      });
      dispatch(registerAction(data.data));
      // toast.success(data.data)
      // localStorage.setItem("token", data.token);
      // openNotification.success({ message: 'Register success' });
      router.replace("/auth/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        // openNotification.error({ message: error.response?.data?.message });
        alert(error.response?.data);
        // const errorMessage = error.response?.data.errors
        //   ? error.response.data.errors.map((err: any) => err.msg).join(', ')
        //   : 'An unexpected error occurred';
        // toast.error(errorMessage);
        // console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { register, isLoading };
};

export default useRegister;
