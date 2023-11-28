import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from '@utils/auth';

export function useAuthedRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const auth = getAuth();
    if (!auth) {
      navigate('/auth/login');
    }
  }, [navigate, pathname]);
}

export function useAuthRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const auth = getAuth();
    if (auth) {
      navigate('/home');
    }
  }, [navigate, pathname]);
}
