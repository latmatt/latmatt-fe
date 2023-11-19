import { Button, Stack, PasswordInput, Box, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { LogoSlogan } from '@components/common';
import { createPasswordSchema } from '@utils/schema';

interface FormValues {
  name: string;
  password: string;
  confirmPassword: string;
}

export function CreatePasswordForm() {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(createPasswordSchema),
  });

  function handleSubmit(values: FormValues) {
    console.log('CREATE PASSWORD FORM VALUES', values);
    navigate('/home');
  }

  return (
    <Box w="100%">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack p="lg" align="center">
          <Box w="60%">
            <LogoSlogan />
          </Box>

          <TextInput
            w="100%"
            label="Name"
            placeholder="enter your name"
            {...form.getInputProps('name')}
          />

          <PasswordInput
            w="100%"
            placeholder="enter your password"
            label="Create Password"
            {...form.getInputProps('password')}
          />

          <PasswordInput
            w="100%"
            placeholder="retype password"
            label="Retype Password"
            {...form.getInputProps('confirmPassword')}
          />

          <Button fullWidth type="submit" disabled={!form.isValid()}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
