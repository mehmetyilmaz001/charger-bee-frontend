import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps as AntMenuProps } from 'antd';
import { Menu as AntMenu } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { SiderStyled } from './Menu.styled';

interface IMenuProps {}

const Menu: React.FC<IMenuProps> = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const menuItems: AntMenuProps['items'] = [
    {
      key: '/admin',
      icon: <AppstoreOutlined />,
      label: t('dashboard'),
    },
    {
      key: '/admin/users',
      icon: <UserOutlined />,
      label: t('users'),
    },
  ];

  return (
    <SiderStyled>
      <div className="logo">
        <Image
          width={0}
          height={0}
          src="/images/logo.svg"
          alt="logo"
          sizes="100vh"
        />
      </div>
      <AntMenu
        className="menu"
        mode="inline"
        items={menuItems}
        selectedKeys={[router.pathname]}
        onClick={(menuItem) => {
          router.push(menuItem.key);
        }}
      />
    </SiderStyled>
  );
};

export default Menu;
