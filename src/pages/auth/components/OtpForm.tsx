import { Stack, Box, Button, PinInput, Group, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { LogoSlogan } from '@components/common';
import { LOCAL_STORAGE_KEYS, OTP_TYPES } from '@config/const';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { otpSchema } from '@utils/schema';
import { useValidateOtp } from '../query';

interface FormValues {
  otp: string;
}

export function OtpForm() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useValidateOtp();
  const { get } = useLocalStorage();

  const form = useForm({
    initialValues: {
      otp: '',
    },
    validate: zodResolver(otpSchema),
  });

  const handleSubmit = (value: FormValues) => {
    const data = get(LOCAL_STORAGE_KEYS.REGISTER);
    mutate(
      {
        phoneNumber: data?.phoneNumber,
        otp: value.otp,
        type: OTP_TYPES.REGISTER,
      },
      {
        onSuccess: () => navigate('/create-password'),
      }
    );
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack p="lg" align="center">
        <Box w="60%">
          <LogoSlogan />
        </Box>

        <Text fz="xl" fw="bold" ta="center">
          We have sent the OTP to your phone number
        </Text>

        <Group>
          <PinInput length={6} size="lg" {...form.getInputProps('otp')} />
        </Group>

        <Button
          fullWidth
          loading={isLoading}
          type="submit"
          disabled={!form.isValid()}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}
