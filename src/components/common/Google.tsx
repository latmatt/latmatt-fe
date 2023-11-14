import { Image } from '@mantine/core';
import GoogleImg from '@assets/images/common/Google.png';

interface Props {
  w?: string | number;
}

export function Google({ w }: Props) {
  return <Image src={GoogleImg} maw={w} alt="Random image" />;
}
