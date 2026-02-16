import { useSearchParams } from 'react-router-dom'

export default function MenuPage() {
  const [searchParams] = useSearchParams()
  const seatParam = searchParams.get('seat')

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-gray-600">
            Explore our delicious offerings
          </p>
        </div>

        {/* Seat/Table Identifier */}
        {seatParam && (
          <div className="bg-brand-green text-white rounded-lg p-6 mb-8 max-w-md mx-auto shadow-md">
            <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
            <p className="text-lg">
              You're viewing the menu for:{' '}
              <span className="font-bold text-brand-orange">
                {seatParam.includes('-') || seatParam.match(/[A-Z]/)
                  ? `Table ${seatParam}`
                  : `Seat ${seatParam}`}
              </span>
            </p>
            <p className="text-sm mt-2 opacity-90">
              Orders placed from this device will be assigned to your location.
            </p>
          </div>
        )}

        {/* Empty Menu State */}
        <div className="bg-white rounded-lg shadow-md p-12 text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-semibold text-brand-black mb-4">
            Menu Coming Soon
          </h2>
          <p className="text-gray-600 mb-6">
            We're preparing our delicious menu items for you. Check back soon!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-3xl mb-2">🥤</div>
              <h3 className="font-semibold text-brand-black">Beverages</h3>
              <p className="text-sm text-gray-500 mt-1">Coffee, Tea & More</p>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-3xl mb-2">🍔</div>
              <h3 className="font-semibold text-brand-black">Food</h3>
              <p className="text-sm text-gray-500 mt-1">Breakfast & Lunch</p>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-3xl mb-2">🍰</div>
              <h3 className="font-semibold text-brand-black">Desserts</h3>
              <p className="text-sm text-gray-500 mt-1">Sweet Treats</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Have questions? Ask our friendly staff for recommendations!
          </p>
        </div>
      </div>
    </div>
  )
}
