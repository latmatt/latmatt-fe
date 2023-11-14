import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '@config/const';
import { useUserStore } from '@hooks/useUser';
import { login } from '@services/auth';
import { setAuth } from '@utils/auth';

export function useLogin() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data: any) => login(data),
    onSuccess: (data) => {
      const state = {
        state: {
          user: data.data.data.Data,
        },
      };
      localStorage.setItem('_u', JSON.stringify(state));
      navigate('/hub');
      if (data.data?.data?.TOKEN) {
        setAuth(data.data?.data?.TOKEN);
        setUser(data.data?.data);
        localStorage.setItem('_u', JSON.stringify(data.data));
        navigate('/hub');
      } else {
        showNotification({
          color: 'red',
          message: data.data?.message || 'Login fail',
        });
      }
    },
    onError: (error: any) => {
      showNotification({
        color: 'red',
        message: error?.data?.message || 'Login fail',
      });
    },
  });
}
