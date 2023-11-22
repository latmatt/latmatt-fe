import { Button, Stack, Text, Box, Group, Checkbox } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { Apple, Facebook, Google, LogoSlogan } from '@components/common';
import { PhoneInput } from '@components/input';
import { LOCAL_STORAGE_KEYS } from '@config/const';
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
      },
      {
        onSuccess: () => {
          set(LOCAL_STORAGE_KEYS.REGISTER, value);
          navigate('/otp');
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

        <Button
          loading={isLoading}
          fullWidth
          type="submit"
          disabled={!form.isValid()}
        >
          Sign up
        </Button>

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

        <Text ta="center" fw="bold">
          Or
        </Text>

        <Group>
          <Facebook w={60} />
          <Google w={60} />
          <Apple w={60} />
        </Group>
      </Stack>
    </form>
  );
}
