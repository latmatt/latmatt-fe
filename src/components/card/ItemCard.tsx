import { Card, Text, Image, Group, Stack, Box } from '@mantine/core';
import classes from './style.module.css';

interface Props {
  title: string;
  image: string;
  date: string;
  city: string;
  location: string;
  time: string;
}

export function ItemCard({ title, image, date, city, location, time }: Props) {
  return (
    <Card className={classes.card} withBorder radius="lg">
      <Card.Section className={classes.imageSection}>
        <Image src={image} h={200} alt="No way!" />
        <Box className={classes.imageSlideup}>
          <Text c="neutral.0" fw="bold">
            Check Details
          </Text>
        </Box>
      </Card.Section>

      <Text fw="bold" fz="lg" my="md">
        {title}
      </Text>

      <Group justify="space-between">
        <Stack gap={0}>
          <Text fz="sm">{date}</Text>
          <Text fz="sm">{city}</Text>
        </Stack>

        <Stack gap={0}>
          <Text fz="sm" ta="right">
            {location}
          </Text>
          <Text fz="sm" ta="right">
            {time}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
}
