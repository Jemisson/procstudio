import * as React from 'react';
import type { AppProps } from 'next/app';

import { theme } from '@/styles/globals';
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider } from '@/contexts/AuthContext';

import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export interface StudioAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const StudioApp = (props: StudioAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>ProcStudio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default StudioApp;
