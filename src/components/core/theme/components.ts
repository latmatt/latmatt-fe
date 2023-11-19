import {
  Button,
  TextInput,
  PasswordInput,
  Checkbox,
  Tabs,
} from '@mantine/core';

export const components = {
  Button: Button.extend({
    defaultProps: {
      size: 'lg',
    },
  }),
  TextInput: TextInput.extend({
    defaultProps: {
      size: 'lg',
    },
  }),
  PasswordInput: PasswordInput.extend({
    defaultProps: {
      size: 'lg',
    },
  }),
  Checkbox: Checkbox.extend({
    defaultProps: {
      size: 'xs',
    },
  }),
  TabsTab: Tabs.Tab.extend({
    defaultProps: {
      fz: 'lg',
    },
  }),
};
