import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '@components/page';
import {
  ConcertPaymentLayout,
  DefaultLayout,
  DetailLayout,
  InfoLayout,
  ListLayout,
  RestaurentDetailLayout,
} from '@layouts';
import {
  CreatePasswordPage,
  ForgetPasswordPage,
  LoginPage,
  OtpPage,
  ResetPasswordPage,
} from '@pages/auth';
import { HomePage } from '@pages/home';
import {
  ConcertDetailPage,
  ConcertListPage,
  ConcertPaymentPage,
  ConcertPaymentSuccessPage,
  RestaurentDetailsPage,
  RestaurentPaymentPage,
  RestaurentSuccessPage,
  RestaurentsPage,
  SearchResultPage,
  YourTicketPage,
} from '@pages/index';
import { SupportPage } from '@pages/support';
import { TermsAndConditions } from '@pages/termsAndConditions';
import { ConcertDetailLayout } from '../layouts/ConcertDetailLayout';

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
    element: <ListLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search-results',
        element: <SearchResultPage />,
      },
      {
        path: 'restaurants',
        element: <RestaurentsPage />,
      },
      {
        path: 'concerts',
        element: <ConcertListPage />,
      },
    ],
  },
  {
    path: '/',
    element: <DetailLayout />,
    children: [
      {
        path: 'concerts/:id',
        element: <ConcertDetailLayout />,
        children: [
          {
            index: true,
            element: <ConcertDetailPage />,
          },
        ],
      },
      {
        path: 'concerts/:id',
        element: <ConcertPaymentLayout />,
        children: [
          {
            path: 'payment',
            element: <ConcertPaymentPage />,
          },
          {
            path: 'payment-success',
            element: <ConcertPaymentSuccessPage />,
          },
        ],
      },
      {
        path: 'restaurants/:id',
        element: <RestaurentDetailLayout />,
        children: [
          {
            index: true,
            element: <RestaurentDetailsPage />,
          },
          {
            path: 'payment',
            element: <RestaurentPaymentPage />,
          },
          {
            path: 'payment-success',
            element: <RestaurentSuccessPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <InfoLayout />,
    children: [
      { path: '/support', element: <SupportPage /> },
      {
        path: 'your-ticket',
        element: <YourTicketPage />,
      },
    ],
  },
]);
