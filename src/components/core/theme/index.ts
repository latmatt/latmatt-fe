import { MantineThemeOverride, createTheme } from '@mantine/core';
import colors from './colors';
import { components } from './components';
import { headings } from './headings';

export const theme: MantineThemeOverride = createTheme({
  primaryColor: 'primary',
  colors,
  headings,
  components,
});
