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

  if (!data && isLoading) return <PageLoading />;

  return (
    <Box>
      <BackgroundImage src={data?.backgroundImage}>
        <Navbar isTransparent={!(scroll.y > 70)} />

        <Box px={LAYOUT_PADDING}>
          <Space h={CONTENT_SPACING} />

          <BannerImg imgUrl={data?.image} />

          <Space h={CONTENT_SPACING} />

          <MetaInfo data={data?.eventNotice} />

          <Space h={CONTENT_SPACING} />

          <Description data={data} />

          <Space h={CONTENT_SPACING} />
        </Box>

        <Footer isTransparent />
      </BackgroundImage>
    </Box>
  );
}
