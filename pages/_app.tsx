import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });


function App({ Component, pageProps }: AppProps<{}>) {
  const queryClient = new QueryClient();

  return (
    <div className={inter.className}>
      {/* Warning Banner */}
      <div style={{
        background: '#fff3cd',
        color: '#856404',
        padding: '12px',
        textAlign: 'center',
        borderBottom: '1px solid #ffeeba',
        fontWeight: 'bold',
        fontSize: '1rem',
        zIndex: 9999,
        position: 'relative'
      }}>
        ATTENTION: USPS AzureChat will be discontinued as of November 1, 2025. Please use DaiSE instead of AzureChat. For more information about DaiSE, see <a href="https://daise.usps.gov/faq" target="_blank" rel="noopener noreferrer" style={{ color: '#856404', textDecoration: 'underline' }}>https://daise.usps.gov/faq</a>.
      </div>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}

export default appWithTranslation(App);
