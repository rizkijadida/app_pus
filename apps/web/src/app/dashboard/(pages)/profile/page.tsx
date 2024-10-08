"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";
import { CgProfile } from "react-icons/cg";
// import GeneralTab from "@/app/dashboard/(pages)/profile/components/GeneralTab";
// import PrivacyTab from "@/app/dashboard/(pages)/profile/PrivacyTab";
// import SecurityTab from "@/app/dashboard/(pages)/profile/SecurityTab";

const Profile = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  // const tab = searchParams.get("tab") || "general";

  // let ComponentToRender;
  // switch (tab) {
  //   case "privacy":
  //     ComponentToRender = PrivacyTab;
  //     break;
  //   case "security":
  //     ComponentToRender = SecurityTab;
  //     break;
  //   case "general":
  //   default:
  //     ComponentToRender = GeneralTab;
  //     break;
  // }

  const handleTabChange = (newTab: any) => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", newTab);
    router.push(`/dashboard/profile?${params.toString()}`);
  };
  return (
    <div className="container h-screen m-5">
    <div className="grid space-y-5">
      <div className="flex text-xs">
        <p className="text-slate-600">Dashboard</p>
        <p className="text-[#1c71cd]"> / Profile</p>
      </div>
      <div className="flex items-center space-x-3">
      <CgProfile />
        <h4 className="font-bold">Profile</h4>
      </div>
      <div>
        <div className="flex flex-row gap-6 px-2 py-1 text-xs">
          <Button
            variant={"link"}
            size={"sm"}
            onClick={() => {
              handleTabChange("general");
            }}
          >
            General
          </Button>
          <Button
            variant={"link"}
            size={"sm"}
            onClick={() => {
              handleTabChange("privacy");
            }}
          >
            Privacy
          </Button>
          <Button
            variant={"link"}
            size={"sm"}
            onClick={() => {
              handleTabChange("security");
            }}
          >
            Security
          </Button>
        </div>
        <Separator className="bg-[#1c71cd]" />
      </div>

      {/* <div>
        <ComponentToRender />
      </div> */}

      <div className="mt-4 flex justify-end mr-10">
        <Button variant={"default"} className="border-[#1c71cd] bg-[#1c71cd]">
          Save Change
        </Button>
      </div>
    </div>
  </div>
  )
}

export default Profile;