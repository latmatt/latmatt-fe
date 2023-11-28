import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '@components/page';
import { AuthLayout, RootLayout } from '@layouts';
import {
  CreatePasswordPage,
  ForgetPasswordPage,
  LoginPage,
  OtpPage,
  ResetPasswordPage,
} from '@pages/auth';
import { HomePage } from '@pages/home';
import { TermsAndConditions } from '@pages/termsAndConditions';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <RootLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'otp',
        element: <OtpPage />,
      },
      {
        path: 'create-password',
        element: <CreatePasswordPage />,
      },
      {
        path: 'forget-password',
        element: <ForgetPasswordPage />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />,
      },
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
    ],
  },
]);
