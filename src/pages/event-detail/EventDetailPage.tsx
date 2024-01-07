import { BackgroundImage, Box, Space } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useParams } from 'react-router-dom';
import { Footer } from '@components/common/Footer';
import { PageLoading } from '@components/loading';
import { Navbar } from '@components/navbar/Navbar';
import { CONTENT_SPACING, LAYOUT_PADDING } from '@config/const';
import { BannerImg, Description, MetaInfo } from './components';
import { useGetEventDetails } from './queries';

export function EventDetailPage() {
  const [scroll] = useWindowScroll();
  const { id } = useParams();
  const { data, isLoading } = useGetEventDetails({
    id: id || '',
  });

  if (isLoading) return <PageLoading />;

  return (
    <BackgroundImage src={data?.data.content[0].backgroundImage}>
      <Navbar isTransparent={!(scroll.y > 70)} />

      <Box px={LAYOUT_PADDING}>
        <Space h={CONTENT_SPACING} />

        <BannerImg imgUrl={data?.data.content[0].image} />

        <Space h={CONTENT_SPACING} />

        <MetaInfo data={data?.data.content[0].eventNotice} />

        <Space h={CONTENT_SPACING} />

        <Description data={data?.data.content[0]} />

        <Space h={CONTENT_SPACING} />
      </Box>

      <Footer isTransparent />
    </BackgroundImage>
  );
}
