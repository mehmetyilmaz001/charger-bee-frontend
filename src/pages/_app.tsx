import React from 'react';
import { ConfigProvider } from 'antd';
import { appWithTranslation } from "next-i18next";
import type { AppProps } from 'next/app';
import theme from '../styles/theme/base';
import { usePersistentLanguage } from '@/hooks/usePersistentLocale';
import "../styles/app.scss";
import ThemeProvider from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/globals';

const App = ({ Component, pageProps }: AppProps) => {

  usePersistentLanguage();

  return (
    <ConfigProvider theme={theme}>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ConfigProvider>
  )
};

export default appWithTranslation(App);