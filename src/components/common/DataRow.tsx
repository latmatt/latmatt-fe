import { Group, Text } from '@mantine/core';

interface Props {
  label: string;
  value: string;
}

export function DataRow({ label, value }: Props) {
  return (
    <Group justify="space-between">
      <Text fw="bold">{label}</Text>
      <Text>{value}</Text>
    </Group>
  );
}
