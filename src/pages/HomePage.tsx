import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-brand-black mb-6">
          Welcome to <span className="text-brand-orange">Sundown Cafe</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience the perfect blend of fresh coffee, delicious food, and amazing vibes.
        </p>
        <Link
          to="/menu"
          className="inline-block bg-brand-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-green transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
        >
          View Menu
        </Link>
      </section>

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-black mb-6 text-center">
            About Sundown Cafe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-semibold mb-2">Fresh Coffee</h3>
              <p className="text-gray-600">
                Premium beans, expertly brewed to perfection
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Great Food</h3>
              <p className="text-gray-600">
                Delicious meals made with fresh, local ingredients
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Amazing Vibes</h3>
              <p className="text-gray-600">
                Cozy atmosphere perfect for work or relaxation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
