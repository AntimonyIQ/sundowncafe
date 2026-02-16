import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'))
const MenuPage = lazy(() => import('../pages/MenuPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'menu',
        element: <MenuPage />,
      },
    ],
  },
])
