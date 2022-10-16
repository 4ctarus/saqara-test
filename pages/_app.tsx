import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import ThemeSwitch from '../containers/ThemeSwitch';
import '../styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeSwitch>
        <Component {...pageProps} />
      </ThemeSwitch>
    </QueryClientProvider>
  );
}

export default MyApp;
