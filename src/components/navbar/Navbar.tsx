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
import { IconMenu2 } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { LAYOUT_PADDING } from '@config/const';
import { MENU_ITEMS } from '@config/menu';
import { MobileNavbar } from './MobileNavbar';
import { NavbarItem } from './NavbarItem';
import classes from './style.module.css';
import { Logo } from '../common/Logo';

export function Navbar() {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Paper shadow="xs" py="sm" px={LAYOUT_PADDING}>
        <Group justify="space-between">
          <Box h={60}>
            <Logo />
          </Box>

          <Group className={classes.desktopNavbar} justify="flex-end" gap="xl">
            {MENU_ITEMS.map((item) => (
              <NavbarItem key={item.to} to={item.to} label={item.label} />
            ))}
            <Button onClick={() => navigate('/auth/login')}>Sign up</Button>

            <Select
              size="lg"
              withCheckIcon={false}
              defaultValue="EN"
              maw={100}
              data={['EN', 'MM']}
            />
          </Group>

          <Group className={classes.mobileNavbar}>
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
