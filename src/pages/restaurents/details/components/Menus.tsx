import { Card, Grid, Title, Image, Box } from '@mantine/core';
import { modals } from '@mantine/modals';
import { ImageListModal } from '@components/modals';
import { imageList } from '@config/mocks';

export function Menus() {
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
      <Grid>
        <Grid.Col span={12}>
          <Title order={5}>Menus</Title>
        </Grid.Col>

        {imageList.map((img, i) => (
          <Grid.Col
            key={img}
            span={{
              xs: 6,
              md: 4,
            }}
          >
            <Box onClick={() => handleSelectImg(i)}>
              <Image radius="md" src={img} />
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  );
}
