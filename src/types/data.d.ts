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
    page?: number;
  }

  export interface Category {
    id: string;
    name: string;
    image: string;
    description: string;
  }

  export interface Event {
    id: string;
    title: string;
    description: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    earlyAccessExpiredDate: string;
    image: string;
    coverImage: string;
    userClickCount: number;
    location: {
      id: string;
      name: string;
      street: string;
      city: string;
      state: string;
      zipCode: string;
      mapLink: string;
      phone: string;
    };
  }

  export interface Genres {
    id: string;
    name: string;
    image: string;
    description: string | null;
    eventType: {
      id: string;
      name: string;
      image: string;
      description: string;
    };
  }
}
