import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/common/Footer';
import { Navbar } from '@components/common/Navbar';
import { PageLoading } from '@components/loading';
import { useAppSetup } from '@hooks/useAppSetup';

export function RootLayout() {
  const init = useAppSetup();

  if (!init) return <PageLoading />;
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}
