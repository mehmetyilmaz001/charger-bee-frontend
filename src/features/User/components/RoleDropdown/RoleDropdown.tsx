// RoleDropdown.tsx
import React from 'react';
import { Select } from 'antd';
import { mockRoleList } from '../../mockData';
import { Role } from '../../types';

const { Option } = Select;

type RoleDropdownProps = {
  selectedRoles: Role[];
  onChange: (role: string) => void;
  value?: string;
};


const RoleDropdown: React.FC<RoleDropdownProps> = ({ selectedRoles, onChange, value }) => {
    console.log('%cRoleDropdown.tsx line:17 selectedRoles', 'color: #007acc;', selectedRoles);
  // Calculate available roles by excluding roles that the user already has
  const availableRoles = mockRoleList.filter(r => !selectedRoles.map(i => i.id).includes(r.id));

  return (
    <Select 
      value={value}
      onChange={onChange}
      placeholder="Select a role"
    >
      {availableRoles.map(r => (
        <Option key={r.id} value={r.id}>
          {r.name}
        </Option>
      ))}
    </Select>
  );
};

export default RoleDropdown;
