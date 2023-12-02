import { Box, Paper, Group, Select } from '@mantine/core';
import { LAYOUT_PADDING } from '@config/const';
import { MENU_ITEMS } from '@config/menu';
import { Logo } from './Logo';
import { NavbarItem } from './NavbarItem';

export function Navbar() {
  return (
    <Paper shadow="xs" py="sm" px={LAYOUT_PADDING}>
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

          <Select
            size="lg"
            withCheckIcon={false}
            defaultValue="EN"
            maw={100}
            data={['EN', 'MM']}
          />
        </Group>
      </Group>
    </Paper>
  );
}
