import { Carousel } from '@mantine/carousel';
import {
  Button,
  TextInput,
  PasswordInput,
  Checkbox,
  Tabs,
  Select,
  Text,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';

export const components = {
  Button: Button.extend({
    defaultProps: {
      size: 'lg',
    },
  }),
  Select: Select.extend({
    defaultProps: {
      size: 'lg',
      rightSection: <IconChevronDown size={20} />,
      maxDropdownHeight: '80vh',
    },
  }),
  TextArea: TextInput.extend({
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
  Carousel: Carousel.extend({
    defaultProps: {
      withIndicators: true,

      slideSize: {
        base: '80%',
        sm: '33.333333%',
        md: '33.333333%',
        lg: '25%',
      },
      slideGap: 'md',
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
  }),
  Text: Text.extend({
    defaultProps: {
      c: 'neutral.8',
    },
  }),
};
