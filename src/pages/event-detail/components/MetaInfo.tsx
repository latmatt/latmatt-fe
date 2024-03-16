import { Grid } from '@mantine/core';
import { EventInfoCard } from '@components/card';

interface Props {
  data: EventNotice[];
}

export function MetaInfo({ data }: Props) {
  return (
    <Grid>
      {data?.map((d) => (
        <Grid.Col key={d.id} span={{ base: 12, sm: 6, md: 3 }}>
          <EventInfoCard data={d} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
