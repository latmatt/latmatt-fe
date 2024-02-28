import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '@components/page';
import {
  AuthLayout,
  CategoryLayout,
  DefaultLayout,
  EventLayout,
  RootLayout,
} from '@layouts';
import {
  CreatePasswordPage,
  ForgetPasswordPage,
  LoginPage,
  OtpPage,
  ResetPasswordPage,
} from '@pages/auth';
import { CategoryDetailPage } from '@pages/category-detail';
import { EventDetailPage } from '@pages/event-detail';
import { HomePage } from '@pages/home';
import { PaymentPage } from '@pages/payment';
import { PurchaseInfoPage } from '@pages/purchase-info';
import { SupportPage } from '@pages/support';
import { TermsAndConditions } from '@pages/termsAndConditions';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <DefaultLayout />,
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
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'ticket',
        element: <HomePage />,
      },
      {
        path: 'support',
        element: <SupportPage />,
      },
    ],
  },
  {
    path: '/categories',
    element: <CategoryLayout />,
    children: [
      {
        path: ':id',
        element: <CategoryDetailPage />,
      },
    ],
  },
  {
    path: '/events',
    element: <EventLayout />,
    children: [
      {
        path: ':id',
        element: <EventDetailPage />,
      },
    ],
  },
  {
    path: '/a',
    element: <AuthLayout />,
    children: [
      {
        path: 'payment',
        element: <PaymentPage />,
      },
      {
        path: 'purchase-info',
        element: <PurchaseInfoPage />,
      },
    ],
  },
]);
