
"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/user/userSlice";
import { useRouter } from "next/navigation";


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
          <h1>Logo</h1>

          {Boolean(id) ? (
            <div className="flex items-center gap-8">

              <h3 onClick={() => router.push("/")}>Home</h3>
              <h3 onClick={() => router.push("/profile")}>Profile</h3>

              <h3 onClick={logout}>Logout</h3>
            </div>
          ) : (
            <div className="flex items-center gap-8">

              <h3 onClick={() => router.push("/")}>Home</h3>
              <h3 onClick={() => router.push("/login")}>Login</h3>
              <h3 onClick={() => router.push("/register")}>Register</h3>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
