import { Box, Center, Stack, Text, Image, Group, Divider } from '@mantine/core';
import profile from '@assets/images/svg/profile.svg';
import setting from '@assets/images/svg/settings.svg';
import { MENU_ITEMS } from '@config/menu';
import { MobileNavbarItem } from './MobileNavbarItem';

export function MobileNavbar() {
  return (
    <Box>
      <Center bg="neutral.1" h={180}>
        <Stack align="center" gap={0}>
          <Image src={profile} />
          <Text>Username</Text>
        </Stack>
      </Center>

      {MENU_ITEMS.map((menu) => (
        <MobileNavbarItem
          key={menu.label}
          label={menu.label}
          to={menu.to}
          icon={menu.icon}
        />
      ))}
      <MobileNavbarItem label="Settings" to="/settings" icon={setting} />

      <Group justify="center" py="sm">
        <Text>MM</Text>
        <Divider orientation="vertical" />
        <Text>EN</Text>
      </Group>
    </Box>
  );
}
