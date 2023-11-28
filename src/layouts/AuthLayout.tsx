import { Outlet } from 'react-router-dom';
import { PageLoading } from '@components/loading';
import { useAppSetup } from '@hooks/useAppSetup';
import { useAuthedRoute } from '@hooks/useAuth';

export function AuthLayout() {
  const init = useAppSetup();
  useAuthedRoute();

  if (!init) return <PageLoading />;
  return <Outlet />;
}
