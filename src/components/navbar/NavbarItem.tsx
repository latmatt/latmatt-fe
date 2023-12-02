import { Box, Text } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './style.module.css';

interface Props {
  label: string;
  to: string;
}

export function NavbarItem({ label, to }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box onClick={() => navigate(to)}>
      <Text
        className={
          location.pathname === to
            ? classes.activeMenuItemDefault
            : classes.menuItemDefault
        }
      >
        {label}
      </Text>
    </Box>
  );
}
