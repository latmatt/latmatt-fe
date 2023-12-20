import { useState } from 'react';
import { Group, ActionIcon, Text } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons';

interface Props {
  type: string;
  price: string;
}

export function TicketCounter({ price, type }: Props) {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <>
      <Text fw="bold">{type}</Text>
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
            <Text>{count}</Text>
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
