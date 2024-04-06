import {
  Box,
  Card,
  Center,
  Group,
  Title,
  Text,
  Stack,
  Image,
} from '@mantine/core';
import concon from '@assets/images/svg/concon.svg';
import { DataRow } from '@components/common';
import { CONTENT_SPACING } from '@config/const';

const bookingInfo = [
  { id: 1, label: 'Restaurent Name', value: 'Meeting Point' },
  { id: 2, label: 'Booking Date', value: '2024.01.02( Monday)' },
  { id: 3, label: 'Booking  Branch', value: 'Pyay Rd Branch' },
  { id: 4, label: 'Total People', value: '2' },
];

const cusInfo = [
  { id: 1, label: 'Customer Name', value: 'Phone Khant Kyaw' },
  { id: 2, label: 'Customer Email', value: 'daniel@gmail.com' },
  { id: 1, label: 'Customer Phone Number', value: '09 420 148 498' },
  { id: 1, label: 'Note', value: 'Please give us window table.' },
];

export function RestaurentSuccessPage() {
  return (
    <Box w="100%" py={CONTENT_SPACING}>
      <Center>
        <Card
          withBorder
          w={{
            sx: '100%',
            sm: '90%',
            md: 400,
          }}
          p={0}
        >
          <Center bg="primary" py="lg">
            <Title order={5} c="white">
              Booking Confirmation
            </Title>
          </Center>

          <Group justify="space-between" my="md" px="sm">
            <Image src={concon} width={60} height={60} />
            <Text fw="bold" fz="lg">
              Congratulations
            </Text>
            <Image src={concon} width={60} height={60} />
          </Group>

          <Box px="sm">
            <DataRow label="Booking ID" value="1124557TT" />
          </Box>

          <Stack gap="sm" mt="sm" px="sm">
            <Center bg="gray.3" py={2}>
              <Text ta="center">Booking Information</Text>
            </Center>

            {bookingInfo.map((info) => (
              <DataRow key={info.id} label={info.label} value={info.value} />
            ))}
          </Stack>

          <Stack gap="sm" my="sm" px="sm">
            <Center bg="gray.3" py={2}>
              <Text ta="center">Booking Information</Text>
            </Center>

            {cusInfo.map((info) => (
              <DataRow key={info.id} label={info.label} value={info.value} />
            ))}
          </Stack>
        </Card>
      </Center>
    </Box>
  );
}
