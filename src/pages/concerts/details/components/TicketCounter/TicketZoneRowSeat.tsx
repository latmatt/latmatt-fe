/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Box, Grid, Skeleton, Space, Text } from '@mantine/core';
import { SEAT_STATUS } from '@config/const';
import classes from './style.module.css';
import { TicketSeat } from './TicketSeat';
import { useGetTicketSeats } from '../../queries';

interface RowProps {
  row: EventRows;
  setRow: Dispatch<SetStateAction<string>>;
  disable?: boolean;
  active?: boolean;
}

function Row({ row, setRow, disable = false, active = false }: RowProps) {
  return (
    <Grid.Col span={{ base: 12 / 8, sm: 12 / 8, md: 12 / 8 }}>
      <div
        onClick={() => {
          if (!disable) setRow(row.id);
        }}
        className={
          disable
            ? classes.disableRowContainer
            : active
            ? classes.activeRowContainer
            : classes.rowContainer
        }
      >
        {row.name}
      </div>
    </Grid.Col>
  );
}

interface ZoneProps {
  rows: EventRows[];
}

export function TicketZoneWithRow({ rows }: ZoneProps) {
  const [currentRow, setCurrentRow] = useState<string>(rows[0]?.id || '');
  const [isDisableRow, setIsDisableRow] = useState<boolean>(false);
  const [rowPrice, setRowPrice] = useState<number>(rows[0]?.price || 0);

  const { data: seats, isLoading: seatLoading } = useGetTicketSeats({
    ticketRowId: currentRow,
  });

  useEffect(() => {
    if (!seatLoading) {
      const rowStatus = !!seats.find(
        (s: EventSeat) => s.state !== SEAT_STATUS.AVAILABLE
      );
      setIsDisableRow(rowStatus);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seats]);

  const handleSelectRow = (row: EventRows) => {
    setCurrentRow(row.id);
    setRowPrice(row.price);
  };

  return (
    <Box>
      <Text fw="bold">{rowPrice} Ks</Text>

      <Box className={classes.zoneItem}>
        <Text fw="bold">Rows</Text>

        <Grid gutter={2}>
          {rows.map((r) => (
            <Row
              key={r.id}
              row={r}
              setRow={() => handleSelectRow(r)}
              active={currentRow === r.id}
              disable={isDisableRow}
            />
          ))}
        </Grid>
      </Box>

      <Space h="sm" />

      <Box className={classes.zoneItem}>
        <Text fw="bold">Seats</Text>

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
