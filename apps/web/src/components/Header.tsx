"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/user/userSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { SlBasketLoaded } from "react-icons/sl";

export const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
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

          {Boolean(id) ? (
            <div className="flex cursor-pointer items-center gap-5 text-white">
              <SlBasketLoaded />
              <h5 onClick={() => router.push("/")} className="text-sm">
                Home
              </h5>
              <h5 onClick={() => router.push("/profile")} className="text-sm">
                Profile
              </h5>
              <h5 onClick={logout} className="text-sm">
                Logout
              </h5>
            </div>
          ) : (
            <div className="flex cursor-pointer items-center gap-5 text-white">
              <Link href={"/chart"}>
                <FaCartShopping />
              </Link>
              <h5 onClick={() => router.push("/")} className="text-sm">
                Home
              </h5>
              <h5 onClick={() => router.push("/login")} className="text-sm">
                Login
              </h5>
              <h6
                onClick={() => router.push("/register")}
                className="flex flex-row text-sm"
              >
                Register
              </h6>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
