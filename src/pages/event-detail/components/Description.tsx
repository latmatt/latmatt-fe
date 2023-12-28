/* eslint-disable react/no-danger */
import { Card, Grid, ScrollArea, Text } from '@mantine/core';
import { TicketCenter } from './TicketCenter';

interface Props {
  data: string;
}

export function Description({ data }: Props) {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 8 }}>
        <ScrollArea h="50vh">
          <Card radius="sm" bg="white" p="md">
            <div dangerouslySetInnerHTML={{ __html: data }} />
          </Card>
        </ScrollArea>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <TicketCenter />
      </Grid.Col>
    </Grid>
  );
}
