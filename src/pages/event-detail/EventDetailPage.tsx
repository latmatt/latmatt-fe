import { BackgroundImage, Box, Space } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { Footer } from '@components/common/Footer';
import { Navbar } from '@components/navbar/Navbar';
import { CONTENT_SPACING, LAYOUT_PADDING } from '@config/const';
import { BannerImg, Description, MetaInfo } from './components';

export function EventDetailPage() {
  const [scroll] = useWindowScroll();

  return (
    <BackgroundImage src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png">
      <Navbar isTransparent={!(scroll.y > 70)} />

      <Box px={LAYOUT_PADDING}>
        <Space h={CONTENT_SPACING} />

        <BannerImg imgUrl="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" />

        <Space h={CONTENT_SPACING} />

        <MetaInfo />

        <Space h={CONTENT_SPACING} />

        <Description />

        <Space h={CONTENT_SPACING} />
      </Box>

      <Footer isTransparent />
    </BackgroundImage>
  );
}
