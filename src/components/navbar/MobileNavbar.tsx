import {
  Box,
  Center,
  Stack,
  Text,
  Image,
  Group,
  Divider,
  Button,
} from '@mantine/core';
import profile from '@assets/images/svg/profile.svg';
import setting from '@assets/images/svg/settings.svg';
import { MENU_ITEMS } from '@config/menu';
import { usePermission } from '@hooks/usePermission';
import { MobileNavbarItem } from './MobileNavbarItem';

interface Props {
  logout: () => void;
}

export function MobileNavbar({ logout }: Props) {
  const { isAuthedUser } = usePermission();

  return (
    <Box>
      <Center bg="neutral.1" h={180}>
        <Stack align="center" gap={0}>
          <Image src={profile} />
          <Text>Username</Text>
        </Stack>
      </Center>
      <Stack justify="space-between" h="calc(100vh - 180px)">
        <Box>
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

        {isAuthedUser && (
          <Box px="lg" pb="lg">
            <Button onClick={logout} fullWidth variant="light">
              Log out
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
}
