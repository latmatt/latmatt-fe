import {
  Box,
  Paper,
  Group,
  Select,
  ActionIcon,
  Drawer,
  Button,
} from '@mantine/core';
import { useDisclosure, useElementSize } from '@mantine/hooks';
import { IconMenu2, IconUserCircle, IconBell } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { LAYOUT_PADDING } from '@config/const';
import { MENU_ITEMS } from '@config/menu';
import { usePermission } from '@hooks/usePermission';
import { removeAuth } from '@utils/auth';
import { MobileNavbar } from './MobileNavbar';
import { NavbarItem } from './NavbarItem';
import classes from './style.module.css';
import { Logo } from '../common/Logo';

interface Props {
  isTransparent?: boolean;
}

export function Navbar({ isTransparent = false }: Props) {
  const navigate = useNavigate();
  const { ref, height } = useElementSize();
  const { isAuthedUser } = usePermission();
  const [opened, { open, close }] = useDisclosure(false);

  const handleLogout = () => {
    removeAuth();
  };

  return (
    <>
      <Box h={height} mb="lg" />
      <Paper
        ref={ref}
        bg={isTransparent ? 'transparent' : 'white'}
        shadow="xs"
        py="sm"
        px={LAYOUT_PADDING}
        className={classes.desktopNavWrapper}
      >
        <Group justify="space-between">
          <Box h={50} onClick={() => navigate('/')} className={classes.logo}>
            <Logo />
          </Box>

          <Group className={classes.desktopNavbar} justify="flex-end" gap="xl">
            {MENU_ITEMS.map((item) => (
              <NavbarItem
                isTransparent={isTransparent}
                key={item.to}
                to={item.to}
                label={item.label}
              />
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
              styles={{
                input: {
                  color: isTransparent ? 'white' : 'black',
                },
              }}
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
        bg="green"
      >
        <MobileNavbar logout={handleLogout} />
      </Drawer>
    </>
  );
}
