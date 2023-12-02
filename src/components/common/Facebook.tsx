import { Image } from '@mantine/core';
import FacebookImg from '@assets/images/common/facebook.png';

interface Props {
  w?: string | number;
  h?: string | number;
}

export function Facebook({ w = 'auto', h = 'auto' }: Props) {
  return <Image src={FacebookImg} w={w} h={h} alt="Random image" />;
}
