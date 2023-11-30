import { Box, Button, Text } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './styles.module.css';

interface Props {
  label: string;
  to: string;
  type?: string;
}

export function NavbarItem({ label, to, type = 'default' }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  if (type === 'button') {
    return <Button onClick={() => navigate(to)}>{label}</Button>;
  }

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
