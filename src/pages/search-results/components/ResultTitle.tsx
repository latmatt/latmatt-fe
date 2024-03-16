import { Group, Box, Text } from '@mantine/core';

interface Props {
  title: string;
}

export function ResultTitle({ title }: Props) {
  return (
    <Group>
      <Box w={10} h={40} bg="primary" />

      <Text fw="bold">{title}</Text>
    </Group>
  );
}
