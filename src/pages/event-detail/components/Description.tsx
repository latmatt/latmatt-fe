/* eslint-disable react/no-danger */
import { Card, Grid, ScrollArea } from '@mantine/core';
import { TicketCenter } from './TicketCenter';

interface Props {
  data: Event;
}

export function Description({ data }: Props) {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 8 }}>
        <ScrollArea h="50vh">
          <Card radius="sm" bg="white" p="md">
            <div
              dangerouslySetInnerHTML={{ __html: data.information as string }}
            />
          </Card>
        </ScrollArea>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <TicketCenter data={data.eventDetails[0]} />
      </Grid.Col>
    </Grid>
  );
}
