import { Avatar, Space } from 'antd';
import Image from 'next/image';
import React from 'react';

interface ProfileCellProps {
  name: string;
  profilePicUrl?: string;
  width?: number;
  height?: number;
}
const placeholderImgUrl = '/images/placeholder-person.jpg';

const ProfileCell: React.FC<ProfileCellProps> = ({
  name,
  profilePicUrl,
  width = 100,
  height = 100,
}) => {
  const [src, setSrc] = React.useState(profilePicUrl);

  return (
    <Space>
      <Avatar
        src={
          <Image
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={placeholderImgUrl}
            src={src ?? placeholderImgUrl}
            alt={name}
            onError={() => setSrc(placeholderImgUrl)}
          />
        }
      />{' '}
      {name}
    </Space>
  );
};

export default ProfileCell;
