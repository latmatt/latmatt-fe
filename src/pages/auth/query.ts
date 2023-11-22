import { useMutation } from '@tanstack/react-query';
import {
  login,
  otp,
  register,
  resetPassword,
  validateOtp,
} from '@services/auth';

export function useGetOtp() {
  return useMutation({
    mutationFn: (phoneNumber: OtpPayload) => otp(phoneNumber),
  });
}

export function useValidateOtp() {
  return useMutation({
    mutationFn: (payload: ValidateOtpPayload) => validateOtp(payload),
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
  });
}

export function useResetPassword() {
  return useMutation({
    mutationFn: (payload: ResetPasswordPayload) => resetPassword(payload),
  });
}
