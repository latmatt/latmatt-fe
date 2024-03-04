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
import CryptoJS from 'crypto-js';
// import JSEncrypt from 'jsencrypt';
import forge from 'node-forge';
import { useNavigate } from 'react-router-dom';
import { PhoneInput } from '@components/input';
// import { encryptDataWithRSA } from '@utils/helper';
import { useInvoice } from '@hooks/useInvoice';
import { paymentSchema } from '@utils/schema';
import useUserStore from '../../store/user';
import { encryptDataWithRSA } from '@utils/helper';

// function encryptDataWithRSA(encryptKey: any, plaintext: any) {
//   const publicKeyForge = forge.pki.publicKeyFromPem(encryptKey);
//   const encryptedBytes = publicKeyForge.encrypt(plaintext);
//   const encryptedHex = forge.util.bytesToHex(encryptedBytes);
//   return encryptedHex;
// }

export function PaymentPage() {
  const navigate = useNavigate();
  const id = useId();
  // const { selectedSeats } = useUserStore();
  // const invoice = useInvoice({
  //   cart: selectedSeats,
  //   type: 'concert',
  //   taxPercent: 5,
  //   serviceChargesPercent: 10,
  // });

  const [zones, setZones] = useState<{ name: string; seats: string[] }[]>([]);

  // useMemo(() => {
  //   const zoneResult: { name: string; seats: string[] }[] = [];
  //   selectedSeats.forEach((seat: any) => {
  //     const existedZone = zoneResult.find(
  //       (z) => z.name === seat.ticketZone.name
  //     );

  //     if (!existedZone) {
  //       zoneResult.push({ name: seat.ticketZone.name, seats: [] });
  //     }
  //   });

  //   setZones(
  //     zoneResult.map((zr) => ({
  //       name: zr.name,
  //       seats: selectedSeats,
  //     }))
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedSeats]);

  // const { data, isLoading } = useGetDingerPrebuilt();

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
    // validate: zodResolver(paymentSchema),
  });

  const handlePreBuildCheckout = async () => {
    // Mock items
    const items = JSON.stringify([
      {
        name: 'Dinger',
        amount: 1100,
        quantity: 2,
      },
    ]);

    const data = {
      // from Dinger
      clientId: import.meta.env.VITE_PAYMANT_CLIENT_ID,
      // from Dinger
      publicKey: import.meta.env.VITE_PAYMENT_PUBLIC_KEY,
      items,
      customerName: 'John Doe',
      totalAmount: 1000,
      merchantOrderId: id,
      // from Dinger
      merchantKey: import.meta.env.VITE_PAYMENT_MERCHANT_API_KEY,
      projectName: 'LATTMAT',
      merchantName: 'LATTMAT',
    };

    /**
     * Encrypt data with RSA Algorithm
     */
    const encryptedData = encryptDataWithRSA(
      // from Dinger
      JSON.stringify(data),
      import.meta.env.VITE_PAYMENT_ENCRYPTION_KEY
    );

    /**
     * Convert encrypted data to base64
     */
    const base64EncryptedData = encodeURI(btoa(encryptedData));

    /**
     * Hash base64 data with sha256 using secret key from Dinger
     */
    const hash = CryptoJS.HmacSHA256(
      base64EncryptedData,
      // from Dinger
      import.meta.env.VITE_PAYMENT_SECRET_KEY
    ).toString();

    console.log('encryptedData', encryptedData);
    console.log('base64EncryptedData', base64EncryptedData);
    console.log('hash', hash);
    console.log(
      `https://prebuilt.dinger.asia/?payload=${base64EncryptedData}&hashValue=${hash}`
    );

    window.location.href = `https://prebuilt.dinger.asia/?payload=${base64EncryptedData}&hashValue=${hash}`;
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
            {/* <Card withBorder>
              <Stack>
                <Group justify="space-between">
                  <Text fw="bold">Zone</Text>
                  <Text fw="bold">Seat</Text>
                </Group>

                {zones.map((z) => (
                  <Group key={z.name} justify="space-between">
                    <Text>{z.name}</Text>
                    <Text>001</Text>
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
                  <Text>{selectedSeats.length}</Text>
                </Group>

                <Divider />

                <Group justify="space-between">
                  <Text fw="bold">Subtotal</Text>
                  <Text>{invoice.subTotal} Ks</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold">
                    Service Charges ( {invoice.serviceChargesPercent} % )
                  </Text>
                  <Text>{invoice.serviceCharges} Ks</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold">Tax ( {invoice.taxPercent} % )</Text>
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
            </Card> */}

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
