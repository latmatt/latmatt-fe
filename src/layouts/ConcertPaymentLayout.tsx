/* eslint-disable no-restricted-syntax */
import { useEffect } from 'react';
import { Box, Space } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';
import { PageLoading } from '@components/loading';
import { Navbar } from '@components/navbar/Navbar';
import { CONTENT_SPACING, LAYOUT_PADDING } from '@config/const';
import { useAppSetup } from '@hooks/useAppSetup';
import { useQueries } from '@hooks/useQueries';
import { getAuth, setAuth } from '@utils/auth';

export function ConcertPaymentLayout() {
  const { queries } = useQueries();
  const navigate = useNavigate();
  const init = useAppSetup();

  useEffect(() => {
    if (queries.token && queries.refreshToken) {
      setAuth(queries?.token, queries?.refreshToken);
      if (getAuth()) {
        navigate('/');
      }
    }
  }, [navigate, queries]);

  if (!init) return <PageLoading />;
  return (
    <Box>
      <Navbar />

      <Space h={CONTENT_SPACING} />

      <Box px={LAYOUT_PADDING}>
        <Outlet />
      </Box>

      <Space h={CONTENT_SPACING} />
    </Box>
  );
}
