import { Box, Paper, Group } from '@mantine/core';
import { MENU_ITEMS } from '@config/menu';
import { Logo } from './Logo';
import { NavbarItem } from './NavbarItem';

export function Navbar() {
  return (
    <Paper shadow="xs" py="sm">
      <Group justify="space-between">
        <Box h={60}>
          <Logo />
        </Box>

        <Group justify="flex-end" gap="xl">
          {MENU_ITEMS.map((item) => (
            <NavbarItem
              key={item.to}
              type={item.type}
              to={item.to}
              label={item.label}
            />
          ))}
        </Group>
      </Group>
    </Paper>
  );
}
