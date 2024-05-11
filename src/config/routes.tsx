import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '@components/page';
import {
  AuthLayout,
  CategoryLayout,
  ConcertPaymentLayout,
  DefaultLayout,
  DetailLayout,
  EventLayout,
  InfoLayout,
  ListLayout,
  RestaurentDetailLayout,
  RootLayout,
  RootLayoutWithSearchBar,
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
import {
  ConcertListPage,
  ConcertPaymentPage,
  RestaurentDetailsPage,
  RestaurentPaymentPage,
  RestaurentSuccessPage,
  RestaurentsPage,
  SearchResultPage,
  YourTicketPage,
} from '@pages/index';
import { PaymentPage } from '@pages/payment';
import { PurchaseInfoPage } from '@pages/purchase-info';
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
            element: <EventDetailPage />,
          },
        ],
      },
      {
        path: 'concerts/:id/payment',
        element: <ConcertPaymentLayout />,
        children: [
          {
            index: true,
            element: <ConcertPaymentPage />,
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
  // {
  //   path: '/',
  //   element: <RootLayoutWithSearchBar />,
  //   children: [
  //     {
  //       index: true,
  //       element: <HomePage />,
  //     },
  //     {
  //       path: 'ticket',
  //       element: <HomePage />,
  //     },
  //     {
  //       path: 'search-results',
  //       element: <SearchResultPage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/',
  //   element: <RootLayout />,
  //   children: [
  //     {
  //       path: 'support',
  //       element: <SupportPage />,
  //     },
  // {
  //   path: 'your-ticket',
  //   element: <YourTicketPage />,
  // },
  //     {
  //       path: 'RESTAURANT/:id',
  //       element: <RestaurentDetailsPage />,
  //     },
  //     {
  //       path: 'RESTAURANT/:id/payment',
  //       element: <RestaurentPaymentPage />,
  //     },
  //     {
  //       path: 'RESTAURANT/:id/payment-success',
  //       element: <RestaurentSuccessPage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/categories',
  //   element: <CategoryLayout />,
  //   children: [
  //     {
  //       path: 'CONCERT',
  //       element: <CategoryDetailPage />,
  //     },
  //     {
  //       path: 'RESTAURANT',
  //       element: <RestaurentsPage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/events',
  //   element: <EventLayout />,
  //   children: [
  //     {
  //       path: ':id',
  //       element: <EventDetailPage />,
  //     },
  //   ],
  // },
  // {
  //   path: '/a',
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: 'payment',
  //       element: <PaymentPage />,
  //     },
  //     {
  //       path: 'purchase-info',
  //       element: <PurchaseInfoPage />,
  //     },
  //   ],
  // },
]);
