import { useId, useMemo, useState } from 'react';
import {
  Box,
  Card,
  Grid,
  Select,
  Stack,
  TextInput,
  Text,
  Group,
  Divider,
  Space,
  Radio,
  Checkbox,
  Button,
  Textarea,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconArrowNarrowLeft } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { PhoneInput } from '@components/input';
import { useInvoice } from '@hooks/useInvoice';
import { dingerPrebuilt } from '@services/dinger';
import { paymentSchema } from '@utils/schema';
import useUserStore from '../../../store/user';

export function ConcertPaymentPage() {
  const navigate = useNavigate();
  const id = useId();

  const { cart } = useUserStore();

  const invoice = useInvoice({
    cart: cart.concert,
    type: 'concert',
    taxPercent: 5,
    serviceChargesPercent: 10,
  });

  const [zones, setZones] = useState<{ name: string; seats: string[] }[]>([]);

  useMemo(() => {
    const zoneResult: { name: string; seats: string[] }[] = [];
    cart.concert.forEach((seat: any) => {
      const existedZone = zoneResult.find(
        (z) => z.name === seat.ticketZone.name
      );

      if (!existedZone) {
        zoneResult.push({ name: seat.ticketZone.name, seats: [] });
      }
    });

    setZones(
      zoneResult.map((zr) => ({
        name: zr.name,
        seats: cart.concert,
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.concert]);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      paymentType: '',
      payment: '',
      terms: false,
      refundPolicy: false,
    },
    validate: zodResolver(paymentSchema),
  });

  const handlePreBuildCheckout = async () => {
    const data = {
      customerName: 'Kyaw Kyaw',
      totalAmount: 2200,
      merchantOrderId: id,
      items: [
        {
          name: 'Dinger',
          amount: 1100,
          quantity: 2,
        },
      ],
    };

    const prebuiltData = await dingerPrebuilt(data);

    window.location.href = prebuiltData.data.data.url;
  };

  return (
    <Box>
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

                <Textarea
                  label="Address"
                  placeholder="enter your address"
                  withAsterisk
                  {...form.getInputProps('address')}
                />

                <PhoneInput
                  w="100%"
                  label="Phone Number"
                  placeholder="enter your phone number"
                  withAsterisk
                  {...form.getInputProps('phone')}
                />

                <Select
                  label="Delivery Option"
                  data={['Physical Ticket', 'E-Ticket']}
                  withAsterisk
                  {...form.getInputProps('paymentType')}
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
            <Box bg="primary" py="md">
              <Text fw="bold" ta="center" c="white">
                Your Ticket Detail
              </Text>
            </Box>

            <Card withBorder>
              <Stack>
                <Group justify="space-between">
                  <Text fw="bold">Zone</Text>
                  <Text fw="bold">Seat</Text>
                </Group>

                {zones.map((z) => (
                  <Group key={z.name} justify="space-between">
                    <Text>{z.name}</Text>
                    <Text>{z.seats.map((s: any) => s.name).join(', ')}</Text>
                  </Group>
                ))}

                <Divider />

                <Group justify="space-between">
                  <Text fw="bold">Event Date</Text>
                  <Text>2024.01.02</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold">Event Place</Text>
                  <Text>Thuwanabumi</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold">Event City</Text>
                  <Text>Yangon</Text>
                </Group>

                <Divider />

                <Group justify="space-between">
                  <Text fw="bold">No. of tickets</Text>
                  <Text>{cart.concert.length}</Text>
                </Group>

                <Divider />

                <Group justify="space-between">
                  <Text fw="bold">Subtotal</Text>
                  <Text>{invoice.subTotal} Ks</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold">Service Charges ( 10 % )</Text>
                  <Text>{invoice.serviceCharges} Ks</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold">Tax ( 10 % )</Text>
                  <Text>{invoice.tax} Ks</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold" fz="lg">
                    Total
                  </Text>
                  <Text fz="lg" c="primary">
                    {invoice.total} Ks
                  </Text>
                </Group>
              </Stack>
            </Card>

            <Space h="md" />

            <Card withBorder>
              <Radio.Group name="payment" {...form.getInputProps('payment')}>
                <Stack>
                  <Radio label="Cash On Delievery" value="nu" />
                  <Divider />
                  <Radio label="Bank Transfer" value="react" />
                </Stack>
              </Radio.Group>
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

            <Button onClick={handlePreBuildCheckout} fullWidth>
              Place Order
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
}
