import { motion } from 'framer-motion'
import type { MenuItem } from '../data/menu'
import defaultFoodImage from '../assets/images/rice-bowl.png'

interface MenuItemCardProps {
    item: MenuItem
    isSelected: boolean
    onToggle: () => void
    onPreview: () => void
    isLast?: boolean
}

export default function MenuItemCard({
    item,
    isSelected,
    onToggle,
    onPreview,
    isLast
}: MenuItemCardProps) {
    const isSoldOut = item.available === false

    return (
        <motion.div
            onClick={isSoldOut ? undefined : onToggle}
            className={`
                group relative flex items-center gap-4 p-4 md:p-6 transition-all duration-300 cursor-pointer
                ${isSelected ? 'bg-african-cream/30' : 'bg-white hover:bg-stone-50'}
                ${isSoldOut ? 'opacity-60 cursor-not-allowed' : ''}
                ${!isLast ? 'border-b border-stone-100' : ''}
            `}
        >
            {/* Image Preview - Left */}
            <div 
                className="w-20 h-20 md:w-24 md:h-24 shrink-0 relative overflow-hidden rounded-xl bg-stone-100"
                onClick={(e) => {
                    // Stop toggle propagation, trigger preview
                    e.stopPropagation()
                    onPreview()
                }}
            >
                <img
                    src={item.image || defaultFoodImage}
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Sold Out Overlay */}
                {isSoldOut && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 border border-white/50">
                            Sold Out
                        </span>
                    </div>
                )}
            </div>

            {/* Content - Middle */}
            <div className="flex-1 min-w-0 pr-8">
                <div className="flex justify-between items-start mb-1">
                    <h3 className={`text-lg font-bold font-display truncate pr-2 ${isSelected ? 'text-african-dark-brown' : 'text-stone-800'}`}>
                        {item.name}
                    </h3>
                </div>

                {item.description && (
                    <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed mb-2 font-light">
                        {item.description}
                    </p>
                )}

                {/*
                <div className={`text-base font-bold ${isSelected ? 'text-brand-orange' : 'text-brand-orange'}`}>
                    ₦{item.price?.toLocaleString()}
                </div>
                */}
            </div>

            {/* Selection Checkbox - Right */}
            <div className="shrink-0 absolute right-4 md:right-6 top-1/2 -translate-y-1/2">
                <div
                    className={`
                        w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                        ${isSelected 
                        ? 'bg-brand-orange border-brand-orange scale-110 shadow-lg shadow-orange-200/50'
                        : 'bg-transparent border-stone-300 group-hover:border-stone-400'
                        }
                    `}
                >
                    {isSelected && (
                        <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </motion.svg>
                    )}
                </div>
            </div>

            {/* Active Border Indicator (Left) */}
            {isSelected && (
                <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange"
                />
            )}
        </motion.div>
    )
}
