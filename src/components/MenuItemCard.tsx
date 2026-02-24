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
}: MenuItemCardProps) {
    const isSoldOut = item.available === false

    return (
        <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            whileFocus={{ y: -3, transition: { duration: 0.2 } }}
            className={`
                relative flex-shrink-0 w-40 rounded-2xl overflow-hidden cursor-pointer
                bg-white shadow-sm border
                ${isSelected ? 'border-brand-orange ring-2 ring-brand-orange/20' : 'border-stone-100'}
                ${isSoldOut ? 'opacity-60 cursor-not-allowed' : ''}
            `}
        >
            {/* Image Container */}
            <div
                className="relative w-full h-40 overflow-hidden bg-stone-100"
                onClick={(e) => {
                    e.stopPropagation()
                    onPreview()
                }}
            >
                <img
                    src={item.image || defaultFoodImage}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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

                {/* Floating Add / Check Button */}
                {!isSoldOut && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            onToggle()
                        }}
                        className={`
                            absolute bottom-2 right-2 w-8 h-8 rounded-full
                            flex items-center justify-center shadow-lg
                            transition-all duration-200 active:scale-90
                            ${isSelected
                                ? 'bg-brand-orange scale-110'
                                : 'bg-brand-orange/90 hover:bg-brand-orange hover:scale-105'}
                        `}
                        aria-label={isSelected ? 'Remove from selection' : 'Add to selection'}
                    >
                        {isSelected ? (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        ) : (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        )}
                    </button>
                )}
            </div>

            {/* Content Below Image */}
            <div className="px-3 pt-2 pb-3">
                <h3 className="text-sm font-bold text-stone-800 leading-snug line-clamp-2">
                    {item.name}
                </h3>
                {/*
                {item.price && (
                    <p className="text-xs text-brand-orange font-semibold mt-1">
                        ₦{item.price.toLocaleString()}
                    </p>
                )}
                */}
            </div>
        </motion.div>
    )
}
