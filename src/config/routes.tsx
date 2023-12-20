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
import { DashboardPage } from '@pages/dashboard';
import { EventDetailPage } from '@pages/event-detail';
import { HomePage } from '@pages/home';
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
        element: <HomePage />,
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
    path: '/d',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },
    ],
  },
]);
