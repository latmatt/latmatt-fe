import { useId } from 'react';
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
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IconArrowNarrowLeft } from '@tabler/icons';
import CryptoJS from 'crypto-js';
import JSEncrypt from 'jsencrypt';
import forge from 'node-forge';
import { useNavigate } from 'react-router-dom';
import { PhoneInput } from '@components/input';
// import { encryptDataWithRSA } from '@utils/helper';
import { paymentSchema } from '@utils/schema';

function encryptDataWithRSA(publicKey: any, plaintext: any) {
  const publicKeyForge = forge.pki.publicKeyFromPem(publicKey);
  const encryptedBytes = publicKeyForge.encrypt(plaintext);
  const encryptedHex = forge.util.bytesToHex(encryptedBytes);
  return encryptedHex;
}

export function PaymentPage() {
  const navigate = useNavigate();
  const id = useId();

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

  const handleMakePayment = async () => {
    const rsaPublicKey = `-----BEGIN PUBLIC KEY-----\n${
      import.meta.env.VITE_PAYMENT_PUBLIC_KEY
    }\n-----END PUBLIC KEY-----`;

    const items = JSON.stringify([
      {
        name: 'Dinger',
        amount: 1100,
        quantity: 2,
      },
    ]);

    const data = {
      clientId: '2dc83ae-3799-323c-8ba6-45a74babb39b',
      publicKey: import.meta.env.VITE_PAYMENT_PUBLIC_KEY,
      items,
      customerName: 'Sai Min',
      totalAmount: 2200,
      merchantOrderId: id,
      merchantKey: '4c5dan8.v1dovbn4ocsoaDl3fDgGcEVtSBk',
      projectName: 'LATTMAT',
      merchantName: 'LATTMAT',
    };

    const encryptedData = encryptDataWithRSA(
      rsaPublicKey,
      // JSON.stringify(data)
      '{id: "hello"}'
    );
    const base64EncryptedData = btoa(
      unescape(encodeURIComponent(encryptedData))
    );
    const hash = CryptoJS.HmacSHA256(
      base64EncryptedData,
      'd29d3881dc1d43f662e46ea68c8af701'
    ).toString();

    console.log('encryptedData', base64EncryptedData);
    console.log('base64EncryptedData', base64EncryptedData);
    console.log('hash', hash);
    console.log(
      `https://prebuilt.dinger.asia/?payload=${base64EncryptedData}&hashValue=${hash}`
    );

    // window.location.href = `https://prebuilt.dinger.asia/?payload=${base64EncryptedData}&hashValue=${hash}`;

    // await prebuilt({
    //   payload: 'hhaha',
    //   hashValue: 'hehe',
    // });
  };

  return (
    <Box>
      <form>
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

                <Select
                  label="Delivery Option"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
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

                <Group justify="space-between">
                  <Text>VIP</Text>
                  <Text>001</Text>
                </Group>

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
                  <Text>1</Text>
                </Group>

                <Divider />

                <Group justify="space-between">
                  <Text fw="bold">Subtotal</Text>
                  <Text>Ks 100,000</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold">Service Charges ( 10 % )</Text>
                  <Text>Ks 10,000</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold">Tax ( 5 % )</Text>
                  <Text>Ks 5,000</Text>
                </Group>

                <Group justify="space-between">
                  <Text fw="bold" fz="lg">
                    Total
                  </Text>
                  <Text fz="lg" c="primary">
                    Ks 115,000
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

            <Button onClick={handleMakePayment} fullWidth>
              Place Order
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
}
