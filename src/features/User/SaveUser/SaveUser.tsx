// SaveUser.tsx
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, notification, Upload } from 'antd';
import React, { useState } from 'react';

import type { User } from '../types';
import useSaveUser from './SaveUser.hook';

interface SaveUserProps {
  user?: User;
}

const SaveUser: React.FC<SaveUserProps> = ({ user = {} as User }) => {
  const [profilePicUrl, setProfilePicUrl] = useState<string | undefined>(
    user.profilePicUrl,
  );
  const { saveUser } = useSaveUser();

  const onFinish = async (values: any) => {
    const updatedUser: User = {
      ...user,
      ...values,
      profilePicUrl,
    };

    try {
      await saveUser(updatedUser);
      notification.success({
        message: user.id
          ? 'User updated successfully!'
          : 'User created successfully!',
      });
    } catch (error) {
      notification.error({ message: 'Error processing request.' });
    }
  };

  const onProfilePicChange = (info: any) => {
    if (info.file.status === 'done') {
      setProfilePicUrl('https://placeholder.com/my-uploaded-image.jpg');
    }
  };

  // ... (rest of the component remains the same)
  return (
    <Form layout="vertical" initialValues={user} onFinish={onFinish}>
      <Form.Item label="Profile Picture">
        <Upload
          name="profilePic"
          showUploadList={false}
          action="/api/upload" // Your API endpoint for uploading files
          onChange={onProfilePicChange}
        >
          <Avatar src={profilePicUrl} icon={<UserOutlined />} size={64} />
          <Button icon={<UploadOutlined />}>Change Profile Picture</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Surname"
        name="surname"
        rules={[{ required: true, message: 'Please input the surname!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input a valid email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input the phone number!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {user.id ? 'Save Changes' : 'Create User'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SaveUser;
