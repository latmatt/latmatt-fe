import { Card, Text, Image, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.css';

interface Props {
  item: Event;
}

export function ItemCard({ item }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/concerts/${item.id}`)}
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
    </Card>
  );
}
