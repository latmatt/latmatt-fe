import { Image } from '@mantine/core';
import Img from '@assets/images/common/playstore.png';

interface Props {
  w?: string | number;
  h?: string | number;
}

export function Playstore({ w = 'auto', h = 'auto' }: Props) {
  return <Image src={Img} w={w} h={h} alt="Random image" />;
}
