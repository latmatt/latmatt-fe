import { Button, Stack, PasswordInput, Box } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { LogoSlogan } from '@components/common';
import { resetPasswordSchema } from '@utils/schema';

interface FormValues {
  password: string;
  confirmPassword: string;
}

export function ResetPasswordForm() {
  const form = useForm<FormValues>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(resetPasswordSchema),
  });

  function handleSubmit(values: FormValues) {
    console.log('RESET PASSWORD FORM VALUES', values);
  }

  return (
    <Box w="100%">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stack p="lg" align="center">
          <Box w="60%">
            <LogoSlogan />
          </Box>

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
