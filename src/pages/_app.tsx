import React from 'react';
import { ConfigProvider } from 'antd';
import { appWithTranslation } from "next-i18next";
import type { AppProps } from 'next/app';
import theme from '../theme/themeConfig';
import { usePersistentLanguage } from '@/hooks/usePersistentLocale';

const App = ({ Component, pageProps }: AppProps) => {

  usePersistentLanguage();

  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
};

export default appWithTranslation(App);