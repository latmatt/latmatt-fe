import { Group, Stack, Title, ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons';
import { RestaurentRating } from '@components/rating-reviews';

export function ProfileTitle() {
  return (
    <Group justify="space-between" align="flex-start">
      <Stack>
        <Title order={5}>Restaurent Name</Title>

        <RestaurentRating />
      </Stack>

      <Group>
        <ActionIcon variant="filled" radius="xl" aria-label="Settings">
          <IconAdjustments
            style={{ width: '70%', height: '70%' }}
            stroke={1.5}
          />
        </ActionIcon>

        <ActionIcon variant="filled" radius="xl" aria-label="Settings">
          <IconAdjustments
            style={{ width: '70%', height: '70%' }}
            stroke={1.5}
          />
        </ActionIcon>

        <ActionIcon variant="filled" radius="xl" aria-label="Settings">
          <IconAdjustments
            style={{ width: '70%', height: '70%' }}
            stroke={1.5}
          />
        </ActionIcon>
      </Group>
    </Group>
  );
}
