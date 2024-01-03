import { Button, Stack, Box } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { LogoSlogan } from '@components/common';
import { PhoneInput } from '@components/input';
import { LOCAL_STORAGE_KEYS, OTP_TYPES } from '@config/const';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { forgetPasswordSchema } from '@utils/schema';
import { useGetOtp } from '../query';

interface FormValues {
  phoneNumber: string;
}

export function ForgetPasswordForm() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useGetOtp();
  const { set } = useLocalStorage();

  const form = useForm<FormValues>({
    initialValues: {
      phoneNumber: '',
    },
    validate: zodResolver(forgetPasswordSchema),
  });

  function handleSubmit(values: FormValues) {
    mutate(
      {
        phoneNumber: values.phoneNumber,
        type: OTP_TYPES.FORGOT_PASSWORD,
      },
      {
        onSuccess: () => {
          set(LOCAL_STORAGE_KEYS.AUTH_INFO, {
            type: OTP_TYPES.FORGOT_PASSWORD,
            ...values,
          });
          navigate('/auth/otp');
        },
      }
    );
  }

  return (
    <Box w="100%">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack p="lg" align="center">
          <Box w="60%">
            <LogoSlogan />
          </Box>

          <PhoneInput
            w="100%"
            placeholder="enter your phone number"
            label="Phone Number"
            {...form.getInputProps('phoneNumber')}
          />

          <Button
            loading={isLoading}
            fullWidth
            type="submit"
            disabled={!form.isValid()}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
