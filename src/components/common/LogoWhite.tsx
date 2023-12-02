import { Image } from '@mantine/core';
import Logo from '@assets/images/logo/logo-white.png';

interface Props {
  w?: string | number;
  h?: string | number;
}

export function LogoWhite({ w = 'auto', h = 'auto' }: Props) {
  return <Image h={h} w={w} src={Logo} alt="Random image" />;
}
