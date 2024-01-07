import { Card, Text, Image, Group, Stack, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.css';

interface Props {
  item: Event;
}

export function ItemCard({ item }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/events/${item.id}`)}
      className={classes.card}
      withBorder
      radius="lg"
    >
      <Card.Section className={classes.imageSection}>
        <Image src={item.image} h={200} alt="No way!" />
        <Box className={classes.imageSlideup}>
          <Text c="neutral.0" fw="bold">
            Check Details
          </Text>
        </Box>
      </Card.Section>

      <Text fw="bold" fz="lg" my="md">
        {item.title}
      </Text>

      <Group justify="space-between">
        <Stack gap={0}>
          <Text fz="sm">{item.startDate}</Text>
          <Text fz="sm">{item.eventDetails[0].location.city}</Text>
        </Stack>

        <Stack gap={0}>
          <Text fz="sm" ta="right">
            {item.eventDetails[0].location.state}
          </Text>
          <Text fz="sm" ta="right">
            {item.startTime}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
}
