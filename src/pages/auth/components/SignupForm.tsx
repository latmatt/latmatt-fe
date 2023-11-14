import {
  Button,
  Stack,
  Text,
  Box,
  Group,
  Checkbox,
  createStyles,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { Apple, Facebook, Google, LogoSlogan } from '@components/common';
import { PhoneInput } from '@components/input';
import { signUpSchema } from '@utils/schema';

interface FormValues {
  phoneNumber: string;
  termsAndConditions: boolean;
}

export function SignupForm() {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    initialValues: {
      phoneNumber: '',
      termsAndConditions: false,
    },
    validate: zodResolver(signUpSchema),
  });

  const handleSubmit = (value: FormValues) => {
    console.log('SIGN UP FORM VALUES', value);
    navigate('/otp');
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack h="100%" spacing="md" p="lg" align="center" justify="center">
        <Box w="60%">
          <LogoSlogan />
        </Box>

        <PhoneInput
          w="100%"
          label="Phone Number"
          placeholder="enter your phone number"
          {...form.getInputProps('phoneNumber')}
        />

        <Button fullWidth type="submit" disabled={!form.isValid()}>
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

        <Group position="center">
          <Facebook w={60} />
          <Google w={60} />
          <Apple w={60} />
        </Group>
      </Stack>
    </form>
  );
}
