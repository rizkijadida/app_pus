"use client"
import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/user/userSlice";
import { User } from "@/types/userTypes/user.types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginArgs extends Pick<User, "email" | "password"> {}

interface LoginResponse {
  message: string;
  data: User;
  token: string;
}

const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const login = async (payload: LoginArgs) => {
    setIsLoading(true)
    try {
      const { data } = await axiosInstance.post<LoginResponse>(
        "/auth/login",
        payload,
      );
      console.log(data);

      dispatch(loginAction(data.data));
      // localStorage.setItem("token", data.token);
      router.replace("/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        //FIXME: change alert to toast
        alert(error?.response?.data);
      }
    } finally {
      setIsLoading(false)
    }
  };
  return { login, isLoading };
};

export default useLogin;
