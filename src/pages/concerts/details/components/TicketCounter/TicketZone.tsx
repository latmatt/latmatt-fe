import { useEffect, useState } from 'react';
import { Group, ActionIcon, Text } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons';
import { SEAT_STATUS } from '@config/const';
import useUserStore from '../../../../../store/user';
import { useGetTicketSeats } from '../../queries';

interface Props {
  zone: EventZones;
  price: number;
}

export function TicketZone({ price, zone }: Props) {
  const { cart, updateConcertCart } = useUserStore();
  const [availableSeats, setAvailableSeats] = useState<EventSeat[]>([]);

  const { data: seats } = useGetTicketSeats({
    ticketRowId: zone.ticketRows[0].id,
  });

  useEffect(() => {
    setAvailableSeats(
      seats?.filter((s: EventSeat) => s.state === SEAT_STATUS.AVAILABLE)
    );
  }, [seats]);

  const handleIncrease = () => {
    updateConcertCart([...cart.concert, availableSeats[0]]);
    setAvailableSeats(
      availableSeats.filter((as) => as.id !== availableSeats[0].id)
    );
  };

  const handleDecrease = () => {
    const theLastSeat = cart.concert[cart.concert.length - 1];
    updateConcertCart(
      cart.concert.filter((cartConcert) => cartConcert.id !== theLastSeat.id)
    );
    setAvailableSeats(availableSeats.filter((as) => as.id !== theLastSeat.id));
  };

  return (
    <>
      <Text fw="bold" fz="lg">
        {zone.name}
      </Text>
      <Group justify="space-between">
        <Text>{price}</Text>

        <Group>
          <ActionIcon
            onClick={handleDecrease}
            variant="default"
            color="gray"
            aria-label="Settings"
          >
            <IconMinus style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>

          <ActionIcon variant="default" color="gray" aria-label="Settings">
            <Text>{cart.concert.length}</Text>
          </ActionIcon>

          <ActionIcon
            onClick={handleIncrease}
            variant="default"
            color="gray"
            aria-label="Settings"
          >
            <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </>
  );
}
