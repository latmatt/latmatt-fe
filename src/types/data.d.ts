export {};

declare global {
  export interface OtpPayload {
    phoneNumber: string;
  }

  export interface ValidateOtpPayload {
    phoneNumber: string;
    otp: string;
    type: string;
  }

  export interface RegisterPayload {
    firstName: string;
    lastName: string;
    username: string;
    countryCode: string;
    phoneNumber: string;
    password: string;
    mail: string;
    profileImage: string;
  }

  export interface LoginPayload {
    phoneNumber: string;
    password: string;
  }

  export interface ChangePasswordPayload {
    oldPassword: string;
    newPassword: string;
    phoneNumber: string;
  }

  export interface ResetPasswordPayload {
    newPassword: string;
    phoneNumber: string;
  }

  export interface DataType {
    label: string;
    value: string | null | undefined;
  }

  export interface EventListParamType {
    size?: number;
  }
}
