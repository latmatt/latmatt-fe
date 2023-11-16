import { Image } from '@mantine/core';
import AppleImg from '@assets/images/common/Apple.png';

interface Props {
  w?: string | number;
}

export function Apple({ w }: Props) {
  return <Image src={AppleImg} maw={w} alt="Random image" />;
}
