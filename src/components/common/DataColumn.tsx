import { Stack, Text } from '@mantine/core';

interface Props {
  label: string;
  value: string;
}

export function DataColumn({ label, value }: Props) {
  return (
    <Stack>
      <Text fw="bold">{label}</Text>
      <Text>{value}</Text>
    </Stack>
  );
}
