import { Grid } from '@mantine/core';
import { EventInfoCard } from '@components/card';

export function MetaInfo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
        <EventInfoCard />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
        <EventInfoCard />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
        <EventInfoCard />
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
        <EventInfoCard />
      </Grid.Col>
    </Grid>
  );
}
