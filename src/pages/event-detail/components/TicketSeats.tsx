import { Box, Flex, Text } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import classes from './style.module.css';

interface Props {
  data: TicketSeats[];
  selectedSeats: TicketSeats[];
  onSelect: (v: TicketSeats) => void;
  onRemove: (v: TicketSeats) => void;
}

export function TicketSeats({
  data,
  onSelect,
  selectedSeats,
  onRemove,
}: Props) {
  const { ref: parentContainer, width: parentWidth } = useElementSize();

  return (
    <Box>
      <Text fz="lg" fw="bold" mb="md" c="neutral.6">
        {data[0].price} Ks
      </Text>
      <Flex
        ref={parentContainer}
        wrap="wrap"
        rowGap={3}
        justify="space-between"
      >
        {data.map((seat) => {
          const isSelected = !!selectedSeats.find((s) => s.name === seat.name);
          return (
            <Box
              key={seat.id}
              className={
                isSelected ? classes.selectedTicketSeat : classes.ticketSeat
              }
              w={(parentWidth - 18) / 8}
              onClick={() => {
                if (isSelected) {
                  onRemove(seat);
                } else {
                  onSelect(seat);
                }
              }}
            >
              <Text fz="sm" ta="center" c={isSelected ? 'white' : 'neutral.8'}>
                {seat.name}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}
