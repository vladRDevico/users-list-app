import { useQuery } from '@tanstack/react-query';
import { User } from '../types/user';
import { USERS } from '../constants/endpoints';
import { showErrorToast } from '../helpers/showToast';

const fetchUserDetail = async (id: number): Promise<User> => {
  const response = await fetch(`${USERS}/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  return response.json();
};

export const useUserDetail = (id: number) => {
  const { data, isLoading } = useQuery<User | null, Error>({
    queryKey: ['user', id],
    queryFn: async () => {
      try {
        const response = await fetchUserDetail(id);
        return response;
      } catch (error: unknown) {
        showErrorToast({
          title: 'Error',
          subtitle: 'We have some problems trying to get user details.',
        });
        return null;
      }
    },
  });

  return {
    user: data,
    isLoading,
  };
};
