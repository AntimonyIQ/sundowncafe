import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ErrorBoundary from '../components/ErrorBoundary'

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'))
const MenuPage = lazy(() => import('../pages/MenuPage'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'menu',
        element: <MenuPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
