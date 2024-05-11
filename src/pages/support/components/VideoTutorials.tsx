import { Card, Grid, Text, Title } from '@mantine/core';
import { tutorialVideos } from '@config/tutorial-videos';

export function VideoTutorials() {
  return (
    <Grid>
      <Grid.Col span={{ xs: 12 }}>
        <Title order={4}>Video Tutorials</Title>
      </Grid.Col>
      {tutorialVideos.map((video: any) => (
        <Grid.Col key={video.id} span={{ md: 3 }}>
          <Card withBorder radius="lg" p={0}>
            <iframe
              width="100%"
              //   height="315"
              src="https://www.youtube.com/embed/6S5Qp-M9CIE?si=HXDj3C7nDBGRrlUD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //   allowfullscreen
            />
            <Text ta="center" my="md" fw="bold">
              {video.name}
            </Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
