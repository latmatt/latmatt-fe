import { Box, Text } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './style.module.css';

interface Props {
  isTransparent?: boolean;
  label: string;
  to: string;
}

export function NavbarItem({ isTransparent, label, to }: Props) {
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
        c={isTransparent ? 'neutral.0' : 'neutral.8'}
      >
        {label}
      </Text>
    </Box>
  );
}
