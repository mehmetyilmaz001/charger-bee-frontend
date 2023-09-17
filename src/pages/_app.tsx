import '../styles/app.scss';

import { ConfigProvider } from 'antd';
import enUs from 'antd/locale/en_US';
import trTr from 'antd/locale/tr_TR';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import React from 'react';

import { usePersistentLanguage } from '@/hooks/usePersistentLocale';
import ThemeProvider from '@/providers/ThemeProvider';
import GlobalStyle from '@/styles/globals';
import { locale } from '@/utils/constants';

import theme from '../styles/theme/base';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  usePersistentLanguage();

  const localeConfig = {
    [locale.en.code]: enUs,
    [locale.tr.code]: trTr,
  };

  return (
    <ConfigProvider
      theme={theme}
      locale={localeConfig[router.locale ?? locale.en.code]}
    >
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default appWithTranslation(App);
