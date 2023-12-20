import { Image } from '@mantine/core';

interface Props {
  imgUrl: string;
}

export function BannerImg({ imgUrl }: Props) {
  return <Image radius="sm" mah={500} fit="cover" src={imgUrl} />;
}
