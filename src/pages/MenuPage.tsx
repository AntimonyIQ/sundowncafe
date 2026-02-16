import { useSearchParams } from 'react-router-dom'
import { menuData } from '../data/menu'
import { useMenuSelection } from '../hooks/useMenuSelection'
import MenuSection from '../components/MenuSection'

export default function MenuPage() {
  const [searchParams] = useSearchParams()
  const seatParam = searchParams.get('seat')
  const { isSelected, toggleItem, clearAll, selectedCount } = useMenuSelection()

  const handleClearAll = () => {
    if (selectedCount > 0) {
      if (
        window.confirm(
          `Are you sure you want to clear all ${selectedCount} selected items?`
        )
      ) {
        clearAll()
      }
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Seat/Table Identifier */}
            <div className="flex items-center gap-3">
              {seatParam && (
                <div className="bg-brand-green text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  Serving{' '}
                  {seatParam.includes('-') || seatParam.match(/[A-Z]/)
                    ? `Table ${seatParam}`
                    : `Seat ${seatParam}`}
                </div>
              )}
              {selectedCount > 0 && (
                <div className="bg-brand-orange text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  {selectedCount} {selectedCount === 1 ? 'item' : 'items'}{' '}
                  selected
                </div>
              )}
            </div>

            {/* Clear Selection Button */}
            <button
              onClick={handleClearAll}
              disabled={selectedCount === 0}
              className={`
                px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200
                ${
                  selectedCount > 0
                    ? 'bg-red-500 text-white hover:bg-red-600 active:scale-95 shadow-sm'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              Clear Selection
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-gray-600">
            Explore our delicious offerings and select your favorites
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Tap any item to add it to your selection
          </p>
        </div>

        {/* Menu Sections */}
        <div className="max-w-7xl mx-auto">
          {menuData.map((section) => (
            <MenuSection
              key={section.name}
              section={section}
              isSelected={isSelected}
              onToggle={toggleItem}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-orange to-brand-green text-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              🌅 Your Taste Buds Will Thank You
            </h3>
            <p className="text-sm opacity-90">
              Have questions or special requests? Our friendly staff is here to
              help!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
