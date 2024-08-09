"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/user/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SlBasketLoaded } from "react-icons/sl";
export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);

  const logout = async () => {
    localStorage.removeItem("token");
    await dispatch(logoutAction());
    router.push("/auth/login");
  };
  return (
    <nav className="container sticky top-0 z-50 mx-auto bg-[#1c71cd] px-4">
      <div className="">
        <div className="flex items-center justify-between py-2">
          <Image
            className="inline-block cursor-pointer rounded-md"
            src="/puskanas.png"
            alt=""
            width={100}
            height={100}
            onClick={() => router.push("/")}
          />

          <div className="flex cursor-pointer items-center gap-5 text-white">
            <SlBasketLoaded />
            <h5 onClick={() => router.push("/")} className="text-sm">
              Home
            </h5>
            <h5 onClick={() => router.push("/dashboard/profile")} className="text-sm">
              Profile
            </h5>
            <h5 onClick={logout} className="text-sm">
              Logout
            </h5>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
