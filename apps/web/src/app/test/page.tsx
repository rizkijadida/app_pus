// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import PrivacyTab from "../dashboard/(pages)/profile/components/PrivacyTab";
// import SecurityTab from "../dashboard/(pages)/profile/components/SecurityTab";
// import GeneralTab from "../dashboard/(pages)/profile/components/GeneralTab";
// import { Button } from "@/components/ui/button";

// const Test = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const tab = searchParams.get("tab") || "general";

//   let ComponentToRender;
//   switch (tab) {
//     case "privacy":
//       ComponentToRender = PrivacyTab;
//       break;
//     case "security":
//       ComponentToRender = SecurityTab;
//       break;
//     case "general":
//     default:
//       ComponentToRender = GeneralTab;
//       break;
//   }

//   const handleTabChange = (newTab: any) => {
//     const params = new URLSearchParams(window.location.search);
//     params.set("tab", newTab);
//     router.push(`/test?${params.toString()}`);
//   };

//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <div>
//         <Button onClick={() => handleTabChange("general")}>General</Button>
//         <Button onClick={() => handleTabChange("privacy")}>Privacy</Button>
//         <Button onClick={() => handleTabChange("security")}>Security</Button>
//       </div>
//       <ComponentToRender />
//     </div>
//   );
// };

// export default Test;
