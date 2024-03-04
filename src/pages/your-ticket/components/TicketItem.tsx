import { Box, Group, Stack, Text, Image, Center, Card } from '@mantine/core';

export function TicketItem() {
  return (
    <Group>
      <Stack justify="center" align="center">
        <Text fz="lg" fw="bold" c="primary">
          March
        </Text>

        <Center
          w={60}
          h={60}
          bg="primary"
          style={{
            borderRadius: 60,
          }}
        >
          <Text fw="bold" c="white">
            6
          </Text>
        </Center>
      </Stack>

      <Card withBorder p={0} style={{ flex: 1 }}>
        <Group align="flex-start">
          <Box w={170} h={170}>
            <Image
              w="100%"
              h="100%"
              fit="cover"
              radius="md"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            />
          </Box>

          <Stack style={{ flex: 1 }} pr="sm" py="sm">
            <Group w="100%" justify="space-between">
              <Text fw="bold">Event Title</Text>
              <Text fw="bold">Mar 8th 2024, 6 : 00 PM</Text>
            </Group>
            <Text>
              Event Info, Event Info, Event Info, Event Info, Event Info, Event
              Info, Event Info, Event Info, Event Info, Event Info, Event Info,
              Event Info, Event Info, Event Info, Event Info, Event Info, Event
              Info, Event Info, Event Info, Event Info, Event Info, Event Info,
              Event Info, Event Info
            </Text>
          </Stack>
        </Group>
      </Card>
    </Group>
  );
}
