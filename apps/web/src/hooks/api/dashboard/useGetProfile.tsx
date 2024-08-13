import { axiosInstance } from "@/lib/axios";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { User } from "@/types/userTypes/user.types";
import { AxiosError } from "axios";

interface ProfileArgs extends User {

}

interface ProfileResponse {
  message: string;
  data: User;
  token: string;
}

const useGetProfile = () => {
  const { id } = useAppSelector((state: RootState) => state.user);

  const getProfile = async (payload: ProfileArgs) => {
    try {
      const response = await axiosInstance.get<ProfileResponse>(
        `/dashboard/profile/${id}`,
        {
          params: { ...payload },
        },
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        //FIXME: change alert to toast
        alert(error?.response?.data);
      }
    }
  };
  return { getProfile };
};

export default useGetProfile;
