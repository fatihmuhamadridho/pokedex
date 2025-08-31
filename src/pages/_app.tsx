import '@/styles/globals.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({});
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </QueryClientProvider>
  );
}
