import {
  Box,
  Paper,
  Group,
  Select,
  ActionIcon,
  Drawer,
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu2, IconUserCircle, IconBell } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { LAYOUT_PADDING } from '@config/const';
import { MENU_ITEMS } from '@config/menu';
import { usePermission } from '@hooks/usePermission';
import { MobileNavbar } from './MobileNavbar';
import { NavbarItem } from './NavbarItem';
import classes from './style.module.css';
import { Logo } from '../common/Logo';

export function Navbar() {
  const navigate = useNavigate();
  const { isAuthedUser } = usePermission();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Paper shadow="xs" py="sm" px={LAYOUT_PADDING}>
        <Group justify="space-between">
          <Box h={50}>
            <Logo />
          </Box>

          <Group className={classes.desktopNavbar} justify="flex-end" gap="xl">
            {MENU_ITEMS.map((item) => (
              <NavbarItem key={item.to} to={item.to} label={item.label} />
            ))}

            {isAuthedUser ? (
              <>
                <Button
                  variant="outline"
                  color="neutral.8"
                  rightSection={<IconUserCircle />}
                >
                  Hello
                </Button>

                <ActionIcon variant="white" color="neutral.8">
                  <IconBell />
                </ActionIcon>
              </>
            ) : (
              <Button onClick={() => navigate('/auth/login')}>Sign up</Button>
            )}

            <Select
              size="lg"
              variant="unstyled"
              withCheckIcon={false}
              defaultValue="EN"
              maw={80}
              data={['EN', 'MM']}
            />
          </Group>

          <Group className={classes.mobileNavbar}>
            {isAuthedUser && (
              <ActionIcon variant="white" color="neutral.8">
                <IconBell />
              </ActionIcon>
            )}

            <ActionIcon onClick={open} variant="white">
              <IconMenu2 />
            </ActionIcon>
          </Group>
        </Group>
      </Paper>

      <Drawer
        position="right"
        size={280}
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.5 }}
        withCloseButton={false}
        padding={0}
      >
        <MobileNavbar />
      </Drawer>
    </>
  );
}
