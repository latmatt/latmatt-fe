import {
  Box,
  Card,
  Grid,
  Stack,
  TextInput,
  Text,
  Group,
  Textarea,
  Space,
  Center,
  Title,
  Button,
  Checkbox,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconArrowNarrowLeft } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { DataRow } from '@components/common';
import { PhoneInput } from '@components/input';
import { CONTENT_SPACING } from '@config/const';
import { paymentSchema } from '@utils/schema';

export function RestaurentPaymentPage() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      payment: '',
      terms: false,
      refundPolicy: false,
    },
    validate: zodResolver(paymentSchema),
  });

  return (
    <>
      <Space h={CONTENT_SPACING} />

      <form onSubmit={form.onSubmit(() => navigate('/a/purchase-info'))}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group mb="md" justify="space-between">
              <Text fw="bold" fz="lg">
                Billing Details
              </Text>

              <Group onClick={() => navigate(-1)}>
                <IconArrowNarrowLeft />
                <Text>Back</Text>
              </Group>
            </Group>

            <Card withBorder>
              <Stack>
                <TextInput
                  label="Name"
                  placeholder="enter your name"
                  withAsterisk
                  {...form.getInputProps('name')}
                />

                <TextInput
                  label="Email"
                  placeholder="enter your mail"
                  withAsterisk
                  {...form.getInputProps('email')}
                />

                <PhoneInput
                  w="100%"
                  label="Phone Number"
                  placeholder="enter your phone number"
                  withAsterisk
                  {...form.getInputProps('phone')}
                />

                <Textarea
                  label="Note"
                  withAsterisk
                  {...form.getInputProps('note')}
                />

                <Box>
                  <Text fw="bold" c="primary">
                    Important
                  </Text>
                  <Text>
                    The customer information won’t be changed after purchasing
                    the ticket. And can’t be sold to others.
                  </Text>
                </Box>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p={0}>
              <Center w="100%" py="sm" bg="primary">
                <Title order={5} c="white">
                  Your Booking
                </Title>
              </Center>

              <Stack gap="sm" p="md">
                <DataRow label="Restaurants Name" value="Meeting Point" />
                <DataRow label="Booking Date" value="2024.01.02( Monday)" />
                <DataRow label="Booking  Branch" value="Pyay Rd Branch" />
                <DataRow label="Total People" value="2" />
              </Stack>
            </Card>

            <Stack my="md">
              <Checkbox
                defaultChecked
                label="I agree to sell my privacy"
                {...form.getInputProps('terms', { type: 'checkbox' })}
              />
              <Checkbox
                defaultChecked
                label="I agree to sell my privacy"
                {...form.getInputProps('refundPolicy', { type: 'checkbox' })}
              />
            </Stack>

            <Button fullWidth>Book Now</Button>
          </Grid.Col>
        </Grid>
      </form>

      <Space h={CONTENT_SPACING} />
    </>
  );
}
