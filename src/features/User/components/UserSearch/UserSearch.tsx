// UserDropdown.tsx
import { Select } from 'antd';
import React from 'react';

import type { User } from '../../types';
import useFetchUsers from './UserSearch.hooks';

const { Option } = Select;

interface IUserSearchProps {
  onChange: (user: User | null) => void;
}

const UserSearch: React.FC<IUserSearchProps> = ({ onChange }) => {
  const [query, setQuery] = React.useState('');
  const { data, isLoading } = useFetchUsers(query);

  return (
    <Select
      showSearch
      placeholder="Select a user"
      notFoundContent={isLoading ? 'Searching...' : null}
      filterOption={false}
      onSearch={setQuery}
      onChange={(value) => {
        const selectedUser = data?.find((user) => user.id === value);
        onChange(selectedUser || null);
      }}
      style={{ width: '100%' }}
    >
      {data?.map((user) => (
        <Option key={user.id} value={user.id}>
          {user.name}
        </Option>
      ))}
    </Select>
  );
};

export default UserSearch;
