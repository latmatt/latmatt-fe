import { Button, Group, Image, Stack, Text } from '@mantine/core';
import { IconCircleChevronRight } from '@tabler/icons';

export function EventHorizontalCard() {
  return (
    <Group justify="space-between" w="100%">
      <Group>
        <Image
          w={100}
          h={100}
          radius="sm"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        />

        <Stack gap={0}>
          <Text fw="bold" fz="lg">
            title
          </Text>

          <Text>title</Text>
          <Text>title</Text>
        </Stack>
      </Group>

      <Stack>
        <Button rightSection={<IconCircleChevronRight />}>Continue</Button>
      </Stack>
    </Group>
  );
}
