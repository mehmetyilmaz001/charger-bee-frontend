import useSWR from 'swr';

import type { FetchResponse } from '@/types/api';

import { mockUserList } from '../../mockData';
import type { User } from '../../types';

// Define the fetcher function with type
const fetcher = (_url: string): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUserList);
    }, 500);
  });
};

const useFetchUsers = (query: string): FetchResponse<User[]> => {
  const { data, error, isLoading } = useSWR(
    query ? `users?search=${query}` : null,
    fetcher,
  );

  return {
    data: data || null,
    isLoading,
    isError: error,
  };
};

export default useFetchUsers;
