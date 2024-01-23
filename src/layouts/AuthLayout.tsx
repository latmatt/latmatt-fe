import { Box, Space } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/common/Footer';
import { PageLoading } from '@components/loading';
import { Navbar } from '@components/navbar/Navbar';
import { CONTENT_SPACING, LAYOUT_PADDING } from '@config/const';
import { useAppSetup } from '@hooks/useAppSetup';
import { useAuthedRoute } from '@hooks/useAuth';

export function AuthLayout() {
  const init = useAppSetup();
  useAuthedRoute();

  if (!init) return <PageLoading />;
  return (
    <Box>
      <Navbar />

      <Box px={LAYOUT_PADDING}>
        <Space h={CONTENT_SPACING} />
        <Outlet />
        <Space h={CONTENT_SPACING} />
      </Box>

      <Footer />
    </Box>
  );
}
