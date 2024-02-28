import { useMemo, useState } from 'react';
import { Grid, Box, Text } from '@mantine/core';
import classes from './style.module.css';
import useUserStore from '../../../../store/user';

interface SeatProps {
  seat: EventSeat;
}

export function TicketSeat({ seat }: SeatProps) {
  const { selectedSeats, updateSelectedSeats } = useUserStore();

  const [isSelected, setIsSelected] = useState<boolean>(false);

  useMemo(() => {
    const selectedSeat = selectedSeats.find((s: any) => s.id === seat.id);

    if (selectedSeat) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [seat, selectedSeats]);

  const handleClick = () => {
    if (isSelected) {
      const filteredSeats = selectedSeats.filter((s: any) => s.id !== seat.id);
      updateSelectedSeats(filteredSeats);
    } else {
      updateSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <Grid.Col span={{ base: 12 / 8, sm: 12 / 8, md: 12 / 8 }}>
      <Box
        className={
          isSelected ? classes.selectedSeatContainer : classes.seatContainer
        }
        onClick={handleClick}
      >
        <Text fz="sm" c={isSelected ? 'white' : 'neutral.9'}>
          {seat.name}
        </Text>
      </Box>
    </Grid.Col>
  );
}
