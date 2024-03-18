import { useQuery } from '@tanstack/react-query';
import { USERS } from '../constants/endpoints';
import { User } from '../types/user';
import { showErrorToast } from '../helpers/showToast';

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(USERS);

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
};

export const useUsers = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery<User[], Error>({
    queryKey: ['users-list'],
    queryFn: async () => {
      try {
        const response = await fetchUsers();
        return response;
      } catch (error: unknown) {
        showErrorToast({
          title: 'Error',
          subtitle: 'We have some probles trying to get users...',
        });
        return [];
      }
    },
  });

  return {
    users: data,
    isLoading,
    refetch,
    isRefetching,
  };
};
