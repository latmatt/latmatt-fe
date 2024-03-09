import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/common/Footer';
import { PageLoading } from '@components/loading';
import { Navbar } from '@components/navbar/Navbar';
import { LAYOUT_PADDING } from '@config/const';
import { useAppSetup } from '@hooks/useAppSetup';
import { SearchBar } from './components';

export function CategoryLayout() {
  const init = useAppSetup();

  if (!init) return <PageLoading />;
  return (
    <Box>
      <Navbar />

      <SearchBar />

      <Box px={LAYOUT_PADDING}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
