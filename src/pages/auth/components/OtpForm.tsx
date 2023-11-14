import { Stack, Box, Button, PinInput, Group, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { LogoSlogan } from '@components/common';
import { otpSchema } from '@utils/schema';

interface FormValues {
  otp: string;
}

export function OtpForm() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      otp: '',
    },
    validate: zodResolver(otpSchema),
  });

  const handleSubmit = (value: FormValues) => {
    console.log('OTP FORM VALUES', value);
    navigate('/create-password');
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack spacing="md" p="lg" align="center">
        <Box w="60%">
          <LogoSlogan />
        </Box>

        <Text fz="xl" fw="bold" ta="center">
          We have sent the OTP to your phone number
        </Text>

        <Group position="center">
          <PinInput length={6} size="lg" {...form.getInputProps('otp')} />
        </Group>

        <Button fullWidth type="submit" disabled={!form.isValid()}>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
