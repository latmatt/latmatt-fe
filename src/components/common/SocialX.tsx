import { Image } from '@mantine/core';
import Img from '@assets/images/common/social-x.svg';

interface Props {
  w?: string | number;
  h?: string | number;
}

export function SocialX({ w = 'auto', h = 'auto' }: Props) {
  return <Image h={h} w={w} src={Img} alt="Random image" />;
}
