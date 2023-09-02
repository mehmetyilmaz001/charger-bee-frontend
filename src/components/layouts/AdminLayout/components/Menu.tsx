import React from 'react';
import Image from 'next/image';
import { Menu as AntMenu, Layout } from 'antd';
import { useTranslation } from 'next-i18next';
import type { MenuProps as AntMenuProps } from 'antd';
import {
    AppstoreOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

import styles from "./Menu.module.scss";

interface IMenuProps {}

console.log('%cMenu.tsx line:16 styles', 'color: #007acc;', styles);


const Menu: React.FC<IMenuProps> = () => {
    const router = useRouter();
    const { t } = useTranslation("common");
    const menuItems: AntMenuProps["items"] = [
        {
            key: "/admin",
            icon: <AppstoreOutlined />,
            label: t("dashboard")
        },
        {
            key: "/admin/users",
            icon: <UserOutlined />,
            label: t("users")
        }
    ]

    return (
        <Layout.Sider className={styles.sider}>
            <div className={styles.logo}><Image width={0} height={0} src="/images/logo.svg" alt="logo" sizes='100vh'/></div>
            <AntMenu className="menu" theme="light" mode="inline" items={menuItems} selectedKeys={[router.pathname]} onClick={(menuItem) => {
                router.push(menuItem.key)
            }} />
        </Layout.Sider>
    );
}


export default Menu;
