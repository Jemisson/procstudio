import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { Sidebar } from '@/components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Sidebar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
