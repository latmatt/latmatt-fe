import { Button, Stack, PasswordInput, Text, Box, Group } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { Apple, Facebook, Google, LogoSlogan } from '@components/common';
import { PhoneInput } from '@components/input';
import { setAuth } from '@utils/auth';
import { loginSchema } from '@utils/schema';
import classes from './styles.module.css';
import { useLogin } from '../query';

interface FormValues {
  phoneNumber: string;
  password: string;
}

export function LoginForm() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useLogin();

  const form = useForm<FormValues>({
    initialValues: {
      phoneNumber: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  function handleSubmit(values: FormValues) {
    mutate(values, {
      onSuccess: (data) => {
        setAuth(data.headers.jwt_token, data.headers.refresh_token);
        navigate('/home');
      },
    });
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

        <Button
          loading={isLoading}
          fullWidth
          type="submit"
          disabled={!form.isValid()}
        >
          Log in
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
