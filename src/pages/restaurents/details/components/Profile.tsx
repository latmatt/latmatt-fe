import { Carousel } from '@mantine/carousel';
import { Card, Title, Text, Image, Box } from '@mantine/core';
import { modals } from '@mantine/modals';
import { ImageListModal } from '@components/modals';
import { imageList } from '@config/mocks';
import { ProfileTitle } from './ProfileTitle';

export function Profile() {
  const handleSelectImg = (idx: number) =>
    modals.open({
      centered: true,
      withCloseButton: true,
      children: <ImageListModal selectedImgIdx={idx} imgList={imageList} />,
      closeOnClickOutside: true,
      fullScreen: true,
    });

  return (
    <Card withBorder>
      <ProfileTitle />

      <Image my="lg" radius="md" src={imageList[0]} />

      <Carousel
        withIndicators
        slideSize="25%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={1}
      >
        {imageList.map((img, i) => (
          <Carousel.Slide key={img}>
            <Box onClick={() => handleSelectImg(i)}>
              <Image my="lg" radius="md" src={img} />
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>

      <Title order={6}>Description</Title>

      <Text>
        Koji Sushi Bar is a trendy and casual Japanese sushi and sashimi-only
        joint with a simple menu focusing on quality fresh sea produce and with
        speed and affordability in the day to cater to office crowd. In the
        evening, Omakase (chef decide) menu is served along with a good
        selection of sake and shochu for a relaxed dining experience.
      </Text>
    </Card>
  );
}
