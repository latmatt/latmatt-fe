import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { MantineConfig } from '@components/core';
import i18n from '@config/i18n';
import { router } from '@config/routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineConfig>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
      </MantineConfig>
    </I18nextProvider>
  );
}

export default App;
