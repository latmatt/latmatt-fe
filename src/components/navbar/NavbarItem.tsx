import { Box } from '@mantine/core';
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
      <span
        className={
          // eslint-disable-next-line no-nested-ternary
          location.pathname === to
            ? classes.activeMenuItemDefault
            : isTransparent
            ? classes.transparentMenuItemDefault
            : classes.menuItemDefault
        }
      >
        {label}
      </span>
    </Box>
  );
}
