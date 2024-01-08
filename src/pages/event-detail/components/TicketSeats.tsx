import { Box, Flex, Text } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import classes from './style.module.css';

interface Props {
  data: TicketSeats[];
}

export function TicketSeats({ data }: Props) {
  const { ref: parentContainer, width: parentWidth } = useElementSize();

  return (
    <>
      <Text fz="lg" fw="bold" mb="md">
        {data[0].price} Ks
      </Text>
      <Flex
        ref={parentContainer}
        wrap="wrap"
        rowGap={3}
        justify="space-between"
      >
        {data.map((seat) => (
          <Box
            key={seat.id}
            className={classes.ticketSeat}
            w={(parentWidth - 18) / 8}
            bg="#CA81B6"
          >
            <Text fz="sm" ta="center">
              {seat.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </>
  );
}
