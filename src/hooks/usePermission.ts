import { getAuth } from '@utils/auth';

export function usePermission() {
  return {
    isGuest: !getAuth(),
    isAuthedUser: !!getAuth(),
  };
}
