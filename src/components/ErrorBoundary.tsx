import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ErrorBoundary() {
  const error = useRouteError()

  const is404 = isRouteErrorResponse(error) && error.status === 404

  const title = is404 ? 'Page Not Found' : 'Something Went Wrong'
  const code = is404 ? '404' : 'Error'
  const message = is404
    ? 'Looks like this page wandered off. Head back to the café and explore what we have to offer.'
    : 'An unexpected error occurred. Please try again or return to the home page.'

  return (
    <div className="min-h-screen bg-stone-100 font-sans flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[640px] bg-white rounded-2xl shadow-xl shadow-stone-900/10 px-8 py-14 flex flex-col items-center text-center"
      >
        {/* Logo */}
        <img src="/icon.png" alt="Sundown Cafe" className="w-12 h-12 object-contain mb-8" />

        {/* Code */}
        <p className="font-luxury text-brand-orange text-8xl md:text-9xl font-bold leading-none tracking-tight mb-4">
          {code}
        </p>

        {/* Heading */}
        <h1 className="font-luxury text-stone-900 text-2xl md:text-3xl font-semibold tracking-wide mb-3">
          {title}
        </h1>

        {/* Supporting text */}
        <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-sm mb-10">
          {message}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-orange text-white font-bold text-sm tracking-wide rounded-xl hover:bg-orange-600 active:scale-95 transition-all duration-200"
          >
            Go Home
          </Link>
          {is404 ? (
            <Link
              to="/menu"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-stone-100 text-stone-700 font-bold text-sm tracking-wide rounded-xl hover:bg-stone-200 active:scale-95 transition-all duration-200"
            >
              View Menu
            </Link>
          ) : (
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-stone-100 text-stone-700 font-bold text-sm tracking-wide rounded-xl hover:bg-stone-200 active:scale-95 transition-all duration-200"
            >
              Try Again
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
