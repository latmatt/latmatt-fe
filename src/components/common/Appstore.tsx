import { Image } from '@mantine/core';
import Img from '@assets/images/common/app-store.png';

interface Props {
  w?: string | number;
  h?: string | number;
}

export function Appstore({ w = 'auto', h = 'auto' }: Props) {
  return <Image src={Img} w={w} h={h} alt="Random image" />;
}
