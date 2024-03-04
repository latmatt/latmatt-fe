import { Grid, Pagination, Space, Stack } from '@mantine/core';
import { CONTENT_SPACING } from '@config/const';
import { Ads, TicketItem } from './components';

export function YourTicketPage() {
  return (
    <>
      <Space h={CONTENT_SPACING} />

      <Grid>
        <Grid.Col span={{ span: 12, sm: 12, md: 9 }}>
          <Stack gap="md" align="center">
            <TicketItem />

            <TicketItem />

            <TicketItem />

            <Pagination total={10} />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ span: 12, sm: 12, md: 3 }}>
          <Ads />
        </Grid.Col>
      </Grid>

      <Space h={CONTENT_SPACING} />
    </>
  );
}
