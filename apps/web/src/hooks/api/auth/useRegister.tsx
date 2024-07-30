<<<<<<< HEAD
=======

>>>>>>> origin/main
import { axiosInstance } from "@/lib/axios";
import { useAppDispatch } from "@/redux/hooks";
import { registerAction } from "@/redux/slices/user/userSlice";
import { User } from "@/types/user.types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface RegisterArgs
  extends Omit<User, "id" | "gender" | "dateOfBirth" | "postalCode"> {
  password: string;
}

interface RegisterUserArgs extends Omit<User, "id" | "gender"> {
  password: string;
<<<<<<< HEAD
=======

>>>>>>> origin/main
}

interface RegisterResponse {
  message: string;
  data: RegisterUserArgs;
  token: string;
}

const useRegister = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const register = async (payload: RegisterArgs) => {
    try {
      const { data } = await axiosInstance.post<RegisterResponse>(
<<<<<<< HEAD
=======

>>>>>>> origin/main
        "/auth/register",
        payload,
      );
      console.log(data);

      dispatch(registerAction(data.data));
      localStorage.setItem("token", data.token);
      router.replace("/");
<<<<<<< HEAD
=======

>>>>>>> origin/main
    } catch (error) {
      if (error instanceof AxiosError) {
        //FIXME: change alert to toast
        alert(error?.response?.data);
      }
    }
  };
  return { register };
};

export default useRegister;
