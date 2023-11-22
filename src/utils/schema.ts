import * as z from 'zod';

// messge
const REQUIRED = "Field name can't be blank";
const LOGIN_ID_LENGTH = 'Login Id must be 6 number digits';

// const
const required = z.string().min(1, { message: REQUIRED });
const requiredNum = z.number().min(0, { message: REQUIRED });
const requiredDate = z.date();
const loginId = z.string().length(6, { message: LOGIN_ID_LENGTH });
const comment = z
  .string()
  .min(1, { message: 'Comment must be at least 1 characters.' })
  .max(250, { message: 'Comment must not exceed 250 characters.' });

const requiredString = (message: string) => {
  return z.string().min(1, { message });
};

export const createShipmentDyCMOSchema = z.object({
  OPTION: required,
  TR_TYPE_ID: required,
  REQ_AMT: requiredNum,
  REQUEST_TO: required,
  REQUEST_FROM: required,
  HUB_CENTER: required,
  DY_CMO_COMMENT: comment,
});

export const createShipmentBASchema = z.object({
  REQ_DATE: requiredDate,
  TR_TYPE_ID: required,
  REQ_AMT: requiredNum,
  BRANCH_ADMIN_COMMENT: comment,
});

export const hubSetupSchema = z.object({
  LOGIN_ID: loginId,
  TYPE: required,
  GROUP_NAME: required,
});

export const dycmoApproveSchema = z.object({
  HUB_CENTER: required,
  REQ_AMT: requiredNum,
  REQUEST_TO: required,
  DY_CMO_COMMENT: comment,
});

export const dycmoStatusSchema = z.object({
  STATUS: required,
  COMMENT: comment,
});

export const inboxSchema = z.object({
  HUB_CENTER: required,
  REQ_AMT: requiredNum,
  REQUEST_TO: required,
  COMMENT: comment,
});

export const dashboardSchema = inboxSchema;

export const signUpSchema = z.object({
  phoneNumber: requiredString('Phone number is required!'),
  termsAndConditions: z.boolean().refine((data) => data === true, {
    message: 'Need to accept terms and conditions!',
  }),
});

export const loginSchema = z.object({
  phoneNumber: requiredString('Phone number is required!'),
  password: z.string().min(1, { message: 'Password is required!' }),
});

export const otpSchema = z.object({
  otp: z.string().min(6, { message: 'OTP code is required!' }),
});

export const createPasswordSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required!' }),
    password: z.string().min(1, { message: 'Password is required!' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm password is required!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(1, { message: 'Password is required!' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm password is required!' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

export const forgetPasswordSchema = z.object({
  phoneNumber: requiredString('Phone number is required!'),
});
