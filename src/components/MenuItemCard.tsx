import type { MenuItem } from '../data/menu'

interface MenuItemCardProps {
  item: MenuItem
  isSelected: boolean
  onToggle: () => void
}

export default function MenuItemCard({
  item,
  isSelected,
  onToggle,
}: MenuItemCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        w-full text-left p-4 rounded-lg border-2 transition-all duration-200
        hover:shadow-md active:scale-[0.98]
        ${
          isSelected
            ? 'border-brand-green bg-brand-green/10 shadow-sm'
            : 'border-gray-200 bg-white hover:border-brand-orange/50'
        }
      `}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3
            className={`font-semibold text-base mb-1 ${
              isSelected ? 'text-brand-green' : 'text-brand-black'
            }`}
          >
            {item.name}
          </h3>
          {item.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0">
          <div
            className={`
            w-6 h-6 rounded-full border-2 flex items-center justify-center
            transition-all duration-200
            ${
              isSelected
                ? 'bg-brand-green border-brand-green'
                : 'border-gray-300 bg-white'
            }
          `}
          >
            {isSelected && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}
