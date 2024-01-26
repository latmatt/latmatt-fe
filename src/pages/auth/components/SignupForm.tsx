import { Button, Stack, Text, Box, Group, Checkbox } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { Apple, Facebook, Google, LogoSlogan } from '@components/common';
import { PhoneInput } from '@components/input';
import { LOCAL_STORAGE_KEYS, OTP_TYPES } from '@config/const';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { signUpSchema } from '@utils/schema';
import classes from './styles.module.css';
import { useGetOtp } from '../query';

interface FormValues {
  phoneNumber: string;
  termsAndConditions: boolean;
}

export function SignupForm() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useGetOtp();
  const { set } = useLocalStorage();

  const form = useForm<FormValues>({
    initialValues: {
      phoneNumber: '',
      termsAndConditions: false,
    },
    validate: zodResolver(signUpSchema),
  });

  const handleSubmit = (value: FormValues) => {
    mutate(
      {
        phoneNumber: value.phoneNumber,
        type: OTP_TYPES.REGISTER,
      },
      {
        onSuccess: () => {
          set(LOCAL_STORAGE_KEYS.AUTH_INFO, {
            type: OTP_TYPES.REGISTER,
            ...value,
          });
          navigate('/auth/otp');
        },
        onError: (err) => {
          console.log('error', err);
        },
      }
    );
  };

  return (
    <form
      className={classes.form}
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <Stack p="lg" align="center">
        <Box w="60%">
          <LogoSlogan />
        </Box>

        <PhoneInput
          w="100%"
          label="Phone Number"
          placeholder="enter your phone number"
          {...form.getInputProps('phoneNumber')}
        />

        <Checkbox
          w="100%"
          label={
            <Text>
              By signing up, I confirm that I have read and accept the{' '}
              <Link to="/terms-and-conditions">Terms and Conditions</Link>.
            </Text>
          }
          {...form.getInputProps('termsAndConditions', { type: 'checkbox' })}
        />

        <Button
          loading={isLoading}
          fullWidth
          type="submit"
          disabled={!form.isValid()}
        >
          Sign up
        </Button>

        <Text ta="center" fw="bold">
          Or
        </Text>

        <Group>
          <Facebook w={60} />
          <Google
            w={60}
            onClick={() => {
              window.location.href = `${
                import.meta.env.VITE_API_URL
              }/oauth2/authorization/google?redirect_uri=${
                import.meta.env.VITE_FE_DOMAIN
              }`;
            }}
          />
          <Apple w={60} />
        </Group>
      </Stack>
    </form>
  );
}
