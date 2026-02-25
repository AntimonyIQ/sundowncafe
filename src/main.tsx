import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './index.css'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen w-screen bg-white">
        <div className="w-10 h-10 border-4 border-stone-100 border-t-brand-orange rounded-full animate-spin"></div>
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
    <Analytics />
  </StrictMode>,
)
