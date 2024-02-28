/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Box, Grid, Skeleton, Space, Text } from '@mantine/core';
import { useGetTicketSeats } from '@pages/event-detail/queries';
import classes from './style.module.css';
import { TicketSeat } from './TicketSeat';

interface ZoneProps {
  rows: EventRows[];
}

export function TicketZoneWithSeats({ rows }: ZoneProps) {
  const { data: seats, isLoading: seatLoading } = useGetTicketSeats({
    ticketRowId: rows[0]?.id || '',
  });

  return (
    <Box>
      <Text fw="bold">{rows[0].price} Ks</Text>

      <Space h="sm" />

      <Box className={classes.zoneItem}>
        <Grid gutter={2}>
          {seatLoading
            ? Array.from({ length: 8 }, (_, index) =>
                (index + 1).toString()
              ).map((_, i) => (
                <Grid.Col
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  span={{ base: 12 / 8, sm: 12 / 8, md: 12 / 8 }}
                >
                  <Skeleton height={20} radius="sm" />
                </Grid.Col>
              ))
            : seats?.map((s: EventSeat) => <TicketSeat key={s.id} seat={s} />)}
        </Grid>
      </Box>

      <Space h="sm" />
    </Box>
  );
}
