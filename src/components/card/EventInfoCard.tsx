import { Text, Card, Stack, Image } from '@mantine/core';
import icon from '@assets/images/svg/18plus.svg';

export function EventInfoCard() {
  return (
    <Card>
      <Stack gap="sm" align="center">
        <Image src={icon} w={80} />

        <Text ta="center" fw="bold">
          Title
        </Text>

        <Text ta="center">Saturday, March 30, 2024 4:00 PM - 12:00 AM</Text>
      </Stack>
    </Card>
  );
}
