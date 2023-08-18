// useSaveUser.ts
import { mutate } from 'swr';
import axios from 'axios';
import { User } from '../types';

const useSaveUser = () => {
  const saveUser = async (user: User): Promise<User> => {
    // The API endpoint for updating or creating the user
    let url = `/api/user`;
    if (user.id) {
      url += `/${user.id}`;
    }

    // Optimistically update the cache using SWR's mutate method (for updating an existing user)
    if (user.id) {
      mutate(url, user, false);
    }

    // Simulate a fake API call using axios
    let response;
    if (user.id) {
      response = await axios.put(url, user);
    } else {
      response = await axios.post(url, user);
    }
    
    // Here we're assuming the API responds with the created/updated user data
    const updatedUser = response.data;
    
    // Revalidate and update the cache with the latest data
    mutate(url, updatedUser);

    return updatedUser;
  };

  return { saveUser };
};

export default useSaveUser;
