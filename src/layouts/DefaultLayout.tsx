import { Outlet } from 'react-router-dom';
import { PageLoading } from '@components/loading';
import { useAppSetup } from '@hooks/useAppSetup';

export function DefaultLayout() {
  const init = useAppSetup();

  if (!init) return <PageLoading />;

  return <Outlet />;
}
