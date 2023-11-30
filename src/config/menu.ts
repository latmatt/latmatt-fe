import { MENU_ITEM_TYPE } from './const';

export const MENU_ITEMS = [
  {
    to: '/',
    label: 'Home',
    type: MENU_ITEM_TYPE.DEFAULT,
  },
  {
    to: '/support',
    label: 'Support',
    type: MENU_ITEM_TYPE.DEFAULT,
  },
  {
    to: '/ticket',
    label: 'Your Ticket',
    type: MENU_ITEM_TYPE.DEFAULT,
  },
  {
    to: '/auth/login',
    label: 'Sign up',
    type: MENU_ITEM_TYPE.BUTTON,
  },
];
