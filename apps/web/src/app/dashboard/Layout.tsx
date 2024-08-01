"use client";

import SideBar from "./SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
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
