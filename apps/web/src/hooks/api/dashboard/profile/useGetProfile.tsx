// 'use client';


// import { axiosInstance } from '@/lib/axios';

// import { AxiosError } from 'axios';
// import { useEffect, useState } from 'react';

// const useGetBlog = (id: number) => {
//   const [data, setData] = useState< | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const getBlog = async () => {
//     try {
//       const { data } = await axiosInstance.get<>(`/blogs/${id}`);
//       setData(data);
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         // TODO replace console.log with toast
//         console.log(error.response?.data);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getBlog();
//   }, []);
//   return { blog: data, isLoading, refetch: getBlog };
// };

// export default useGetBlog;
// v