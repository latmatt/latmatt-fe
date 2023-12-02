import { Image } from '@mantine/core';
import Img from '@assets/images/common/social-fb.svg';

interface Props {
  w?: string | number;
  h?: string | number;
}

export function SocialFacebook({ w = 'auto', h = 'auto' }: Props) {
  return <Image h={h} w={w} src={Img} alt="Random image" />;
}
