import { Grid, Group, Text } from '@mantine/core';

interface DataGridProps {
  data: DataType[];
}

export function DataGrid({ data }: DataGridProps) {
  return (
    <>
      {data.map((d: DataType) => (
        <Group
          key={d.value}
          py="xs"
          grow
          sx={(theme) => ({
            borderBottom: '1px solid',
            borderColor: theme.colors.gray[1],
          })}
        >
          <Text color="gray.6" fw={500}>
            {d.label}
          </Text>
          <Text color="gray.9" fw={500}>
            {d.value}
          </Text>
        </Group>
      ))}
    </>
  );
}
