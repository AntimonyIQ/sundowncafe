import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange mx-auto mb-4"></div>
          <p className="text-brand-black">Loading...</p>
        </div>
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
