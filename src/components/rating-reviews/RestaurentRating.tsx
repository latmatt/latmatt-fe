import { Group, Text } from '@mantine/core';
import { IconStar } from '@tabler/icons';

export function RestaurentRating() {
  return (
    <Group>
      <Group>
        <IconStar color="#091AF6" />
        <IconStar color="#091AF6" />
        <IconStar color="#091AF6" />
        <IconStar color="#091AF6" />
        <IconStar color="#091AF6" />
      </Group>

      <Text>(32 reviews)</Text>
    </Group>
  );
}
