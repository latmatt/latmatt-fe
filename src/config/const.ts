export const API_URL = import.meta.env.VITE_API_URL ?? '';

export const AUTH_TABS = ['Sign up', 'Log in'];

export const LOCAL_STORAGE_KEYS = {
  REGISTER: 'register',
};

export const OTP_TYPES = {
  REGISTER: 'SIGN_UP',
};

export const COOKIE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
};

export const LAYOUT_PADDING = { base: '3%', sm: '5%', md: '7%', lg: '7%' };

export const CONTENT_SPACING = { base: 'md', sm: 'lg', md: 70, lg: 70 };
