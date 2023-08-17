// useRoleManagement.ts
import useSWR, { mutate } from 'swr';
import axios from 'axios';

type User = {
  id: number;
  name: string;
  roles: string[];
};

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const useRoleManagement = (userId: string | undefined) => {
  const { data, error } = useSWR<User | null>(userId ? `/api/user/${userId}` : null, fetcher);

  const removeRoleFromUser = async (roleToRemove: string): Promise<void> => {
    // Simulate a fake API call
    return new Promise((resolve) => {
      setTimeout(async () => {
        if (data) {
          const updatedRoles = data.roles.filter(role => role !== roleToRemove);
          // Here, you'd typically make an API request to update the user's roles. 
          // Once the API request is successful, you'd update the local data.
          mutate(`/api/user/${data.id}`, { ...data, roles: updatedRoles }, false);
          console.log(`Removed role ${roleToRemove} from user ${data.name}`);
          resolve();
        }
      }, 1000);
    });
  };

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    removeRoleFromUser
  };
};

export default useRoleManagement;
