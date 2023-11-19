import { Button, Stack, PasswordInput, Text, Box, Group } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { Apple, Facebook, Google, LogoSlogan } from '@components/common';
import { PhoneInput } from '@components/input';
import { loginSchema } from '@utils/schema';
import classes from './styles.module.css';

interface FormValues {
  phoneNumber: string;
  password: string;
}

export function LoginForm() {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    initialValues: {
      phoneNumber: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  function handleSubmit(values: FormValues) {
    console.log('LOGIN FORM VALUES', values);
    navigate('/home');
  }

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

        <Box w="100%">
          <PasswordInput
            placeholder="Password"
            label="Password"
            {...form.getInputProps('password')}
          />
          <Group justify="flex-end">
            <Text
              className={classes.forgetPassword}
              ta="end"
              onClick={() => navigate('/forget-password')}
            >
              forget password?
            </Text>
          </Group>
        </Box>

        <Button fullWidth type="submit" disabled={!form.isValid()}>
          Log in
        </Button>

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
