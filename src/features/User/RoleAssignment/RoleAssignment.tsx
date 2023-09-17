// RoleAssignment.tsx
import { Button, Form, Modal, Tag } from 'antd';
import React, { useState } from 'react';

import RoleDropdown from '../components/RoleDropdown/RoleDropdown';
import UserSearch from '../components/UserSearch/UserSearch';
import type { Role, User } from '../types';
import useRoleManagement from './RoleAssignment.hooks';

const RoleAssignment: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [role, setRole] = useState<string>('');
  const { isLoading, isError, removeRoleFromUser } = useRoleManagement(
    selectedUser?.id,
  );

  const handleSubmit = () => {
    if (selectedUser) {
      // Logic to assign the role to the user
      console.log(`Assigned role ${role} to user ${selectedUser.name}`);
    }
  };

  const handleRoleRemoval = (_role: Role) => {
    Modal.confirm({
      title: `Are you sure you want to remove the ${_role.name} role?`,
      async onOk() {
        await removeRoleFromUser(_role.id);
      },
    });
  };

  //   if (isLoading) return <p>Loading...</p>;
  //   if (isError) return <p>Error loading user data!</p>;

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Select User">
        <UserSearch onChange={setSelectedUser} />
      </Form.Item>

      {/* Display roles of the selected user */}
      {selectedUser && (
        <Form.Item label="Existing Roles">
          {selectedUser.role.map((r) => (
            <Tag
              key={r.id}
              color="blue"
              closable
              onClose={() => handleRoleRemoval(r)}
            >
              {r.name}
            </Tag>
          ))}
        </Form.Item>
      )}

      <Form.Item label="Assign New Role">
        {selectedUser && (
          <RoleDropdown
            selectedRoles={selectedUser.role}
            onChange={setRole}
            value={role}
          />
        )}
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!selectedUser || !role}
        >
          Assign Role
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoleAssignment;
