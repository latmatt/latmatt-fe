import { Box, Image } from '@mantine/core';
import GoogleImg from '@assets/images/common/google.png';
import classes from './styles.module.css';

interface Props {
  w?: string | number;
  onClick?: () => void;
}

export function Google({ w, onClick }: Props) {
  return (
    <Box className={classes.google} maw={w} onClick={onClick}>
      <Image src={GoogleImg} w="100%" alt="Random image" />
    </Box>
  );
}
