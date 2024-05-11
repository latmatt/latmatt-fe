/* eslint-disable no-restricted-syntax */
import { useEffect } from 'react';
import { Box } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';
import { PageLoading } from '@components/loading';
import { useAppSetup } from '@hooks/useAppSetup';
import { useQueries } from '@hooks/useQueries';
import { getAuth, setAuth } from '@utils/auth';

export function ConcertDetailLayout() {
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
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
