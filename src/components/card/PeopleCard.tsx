import { Box, Image, Text } from '@mantine/core';

interface Props {
  name: string;
  img: string;
}

export function PeopleCard({ name, img }: Props) {
  return (
    <Box w={150}>
      <Image w={150} h={150} radius={150} src={img} />

      <Text fw="bold" ta="center" mt="sm">
        {name}
      </Text>
    </Box>
  );
}
