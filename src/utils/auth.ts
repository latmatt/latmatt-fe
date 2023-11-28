import Cookies from 'js-cookie';
import { COOKIE_KEYS } from '@config/const';

export function getAuth() {
  return Cookies.get(COOKIE_KEYS.ACCESS_TOKEN);
}

export function getRefreshAuth() {
  return Cookies.get(COOKIE_KEYS.REFRESH_TOKEN);
}

export function setAuth(access_token: string, refresh_token: string) {
  Cookies.set(COOKIE_KEYS.ACCESS_TOKEN, access_token);
  Cookies.set(COOKIE_KEYS.REFRESH_TOKEN, refresh_token);
}

export function removeAuth() {
  Cookies.remove(COOKIE_KEYS.ACCESS_TOKEN);
  Cookies.remove(COOKIE_KEYS.REFRESH_TOKEN);
  window.location.href = '/auth/login';
}
