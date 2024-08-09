"use client";

import AuthGuard from "@/hoc/AuthGuard";
import SideBar from "./SideBar";
import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const ProtectedChildren = AuthGuard(() => (
    <>
      <SideBar />
      <div className="flex w-full flex-col ">
        <Header  />
        <div className="flex-1 bg-gray-100 py-8 font-bold  max-md:px-4 md:px-12">
          {children}
        </div>
      </div>
    </>
  ));
  return (
    <>
      <section>
        <div className=" h-auto grid grid-cols-8">
          <div className="col-span-1 sticky top-0">
            <SideBar />
          </div>
          <div className="col-span-7">{children}</div>   
        </div>
      </section>
    </>
  );
}
