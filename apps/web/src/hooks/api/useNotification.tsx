// "use client";

// import { NotificationApi } from "@/providers/notificationProvide";
// import { AxiosResponse } from "axios";

// export const useNotification = () => {
//   const api = NotificationApi();
//   const openNotification = {  
//     open: api.open,
//     warning: api.warning,
//     error: api.error,
//     info: api.info,
//     success: api.success,
//     async: (
//       asyncFunc: Promise<AxiosResponse<any, any>>,
//       successFunc?: () => void,
//       rejectFunc?: () => void,
//     ) => {
//       asyncFunc
//         .then((success) => {
//           api.success({
//             className: "font-rubik font-semibold",
//             message: "success!",
//             description:
//               success.data &&
//               success.data.message &&
//               typeof success.data?.message == "string"
//                 ? success.data.message
//                 : undefined,
//           });
//           return successFunc && successFunc();
//         })
//         .catch((error) => {
//           api.error({
//             message: "Something is Error",
//             className: "font-rubik font-semiboold",
//             description:
//               error.response.data && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//           });
//           return rejectFunc && rejectFunc();
//         });
//     },
//   };
//   return { openNotification };
// };

