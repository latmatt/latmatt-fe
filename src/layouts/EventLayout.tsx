import { BackgroundImage, Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/common/Footer';
import { PageLoading } from '@components/loading';
import { Navbar } from '@components/navbar/Navbar';
import { LAYOUT_PADDING } from '@config/const';
import { useAppSetup } from '@hooks/useAppSetup';

export function EventLayout() {
  const init = useAppSetup();

  if (!init) return <PageLoading />;
  return <Outlet />;
}
