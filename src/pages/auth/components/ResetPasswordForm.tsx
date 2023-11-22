import { Button, Stack, PasswordInput, Box } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { LogoSlogan } from '@components/common';
import { resetPasswordSchema } from '@utils/schema';
import { useResetPassword } from '../query';

interface FormValues {
  newPassword: string;
  confirmPassword: string;
}

export function ResetPasswordForm() {
  const { mutate, isLoading } = useResetPassword();

  const form = useForm<FormValues>({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validate: zodResolver(resetPasswordSchema),
  });

  function handleSubmit(values: FormValues) {
    mutate({
      newPassword: values.newPassword,
      phoneNumber: '09899587877',
    });
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
            {...form.getInputProps('newPassword')}
          />

          <PasswordInput
            w="100%"
            placeholder="retype password"
            label="Retype Password"
            {...form.getInputProps('confirmPassword')}
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
