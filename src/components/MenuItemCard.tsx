import { motion } from 'framer-motion'
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
    <motion.div
      onClick={onToggle}
      className={`
        cursor-pointer group flex flex-col items-center gap-3 p-6 rounded-lg
        transition-all duration-200 text-center
        ${isSelected
          ? 'bg-brand-orange/5 border border-brand-orange/20 shadow-sm scale-[1.02]'
          : 'hover:bg-stone-50 border border-transparent hover:border-stone-100'
        }
      `}
    >
      <div className="flex-1 w-full">
        <div className="flex flex-col items-center gap-1 mb-2">
          <h4 className={`text-xl font-display font-bold ${isSelected ? 'text-brand-orange' : 'text-stone-800'}`}>
            {item.name}
          </h4>
          {item.price && (
            <span className="text-stone-900 font-bold font-display text-lg">
              ₦{item.price.toLocaleString()}
            </span>
          )}
        </div>

        {item.description && (
          <p className="text-sm text-stone-500 font-light leading-relaxed max-w-md mx-auto">
            {item.description}
          </p>
        )}
      </div>

      <div className="mt-2">
        <div className={`
          w-6 h-6 rounded-full border flex items-center justify-center transition-colors
          ${isSelected
            ? 'bg-brand-orange border-brand-orange'
            : 'border-stone-300 group-hover:border-brand-orange'
          }
        `}>
          {isSelected && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </div>
      </div>
    </motion.div>
  )
}
