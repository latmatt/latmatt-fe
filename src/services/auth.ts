import axios from 'axios';

export function otp(params: OtpPayload) {
  return axios.post('/otp', {}, { params });
}

export function validateOtp(payload: ValidateOtpPayload) {
  return axios.post('/otp/validate', payload);
}

export function register(payload: RegisterPayload) {
  return axios.post('/auth/register', payload);
}

export function login(params: LoginPayload) {
  return axios.post('/auth/login', {}, { params });
}

export function refreshToken() {
  return axios.post('/auth/refreshtoken');
}

export function changePassword(params: ChangePasswordPayload) {
  return axios.post('/auth/change-password', {}, { params });
}

export function resetPassword(params: ResetPasswordPayload) {
  return axios.post('/auth/reset-password', {}, { params });
}

export function googleLogin() {
  return axios.get('/oauth2/authorization/google');
}
