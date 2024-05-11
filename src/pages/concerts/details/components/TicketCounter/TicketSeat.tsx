import { useMemo, useState } from 'react';
import { Grid, Box, Text } from '@mantine/core';
import classes from './style.module.css';
import useUserStore from '../../../../../store/user';

interface SeatProps {
  seat: EventSeat;
}

export function TicketSeat({ seat }: SeatProps) {
  const { cart, updateConcertCart } = useUserStore();

  const [isSelected, setIsSelected] = useState<boolean>(false);

  useMemo(() => {
    const selectedSeat = cart.concert.find((s: any) => s.id === seat.id);

    if (selectedSeat) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [cart.concert, seat.id]);

  const handleClick = () => {
    if (isSelected) {
      const filteredSeats = cart.concert.filter((s: any) => s.id !== seat.id);
      updateConcertCart(filteredSeats);
    } else {
      updateConcertCart([...cart.concert, seat]);
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
