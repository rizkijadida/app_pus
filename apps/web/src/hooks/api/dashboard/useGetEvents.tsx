'use client';

import { axiosInstance } from '@/lib/axios';
import { Event } from '@/types/event.types';
import {
  IPageInationQueries,
  IpageInationMeta,
} from '@/types/pageInation.types';
import { useEffect, useState } from 'react';

interface IGetEventQuery extends IPageInationQueries {
  search?: string;  
}

const useGetEvents = (queries: IGetEventQuery) => {
  const [data, setData] = useState<Event[]>([]);
  const [meta, setMeta] = useState<IpageInationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getEvents = async () => {
    try {
      const { data } = await axiosInstance.get('/events', {
        params: queries,
      });

      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, [queries?.page, queries?.search]);
  return { data, meta, isLoading };
};

export default useGetEvents;
