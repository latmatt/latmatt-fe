import Cookies from 'js-cookie';
import { IAuth } from './auth.type';

export function getAuth() {
  const data = localStorage.getItem('_u') as string | undefined | null;
  if (data) {
    const state = JSON.parse(data) as IAuth;
    return state;
  }
  return null;
}

export function setAuth(credentials: string) {
  return Cookies.set('auth', credentials, {
    expires: 1,
    sameSite: 'Lax',
  });
}

export function removeAuth() {
  Cookies.remove('auth');
  window.location.href = '/';
}
