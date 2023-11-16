import { Image } from '@mantine/core';
import FacebookImg from '@assets/images/common/Facebook.png';

interface Props {
  w?: string | number;
}

export function Facebook({ w }: Props) {
  return <Image src={FacebookImg} maw={w} alt="Random image" />;
}
