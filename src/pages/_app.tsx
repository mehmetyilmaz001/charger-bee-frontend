import React from 'react';
import { ConfigProvider } from 'antd';
import { appWithTranslation } from "next-i18next";
import type { AppProps } from 'next/app';
import theme from '../styles/theme/base';
import { usePersistentLanguage } from '@/hooks/usePersistentLocale';
import "../styles/app.scss";
import ThemeProvider from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/globals';
import { useRouter } from 'next/router';
import { locale } from '../../next-i18next.config';
import enUs from 'antd/locale/en_US';
import trTr from 'antd/locale/tr_TR';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  usePersistentLanguage();

  const localeConfig = {
    [locale.en.code]: enUs,
    [locale.tr.code]: trTr
  }

  return (
    <ConfigProvider theme={theme} locale={localeConfig[router.locale ?? locale.en.code]}>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ConfigProvider>
  )
};

export default appWithTranslation(App);