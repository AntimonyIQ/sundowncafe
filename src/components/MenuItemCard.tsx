import { motion } from 'framer-motion'
import type { MenuItem } from '../data/menu'
import defaultFoodImage from '../assets/images/rice-bowl.png'

interface MenuItemCardProps {
    item: MenuItem
    isSelected: boolean
    onToggle: () => void
    onPreview: () => void
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
            onClick={isSoldOut ? undefined : onToggle}
            className={`
        cursor-pointer group flex flex-row items-start gap-4 p-4 rounded-xl
        transition-all duration-200 text-left relative overflow-hidden
        ${isSelected
                ? 'bg-brand-orange/5 border border-brand-orange/20 shadow-sm'
                : 'bg-white border border-stone-100 hover:border-stone-200 hover:shadow-md'
            }
        ${isSoldOut ? 'opacity-60 grayscale cursor-not-allowed' : ''}
      `}
        >
            {/* Image Section */}
            <div
                className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-stone-100 relative group/image cursor-zoom-in"
                onClick={(e) => {
                    e.stopPropagation()
                    onPreview()
                }}
            >
                <img
                    src={item.image || defaultFoodImage}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                />
                {!isSoldOut && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 flex items-center justify-center transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14L21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                    </div>
                )}
                {isSoldOut && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold uppercase tracking-wider">Sold Out</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                    <h4 className={`text-lg font-display font-bold leading-tight ${isSelected ? 'text-brand-orange' : 'text-stone-800'}`}>
                        {item.name}
                    </h4>
                    <div className={`
                        w-5 h-5 rounded-full border flex items-center justify-center transition-colors shrink-0 mt-1
                        ${isSelected
                            ? 'bg-brand-orange border-brand-orange'
                            : 'border-stone-300 group-hover:border-brand-orange'
                        }
                        `}>
                        {isSelected && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        )}
                    </div>
                </div>

                {/*
                {item.price && (
                    <div className="text-brand-orange font-bold font-display text-base mt-1">
                        ₦{item.price.toLocaleString()}
                    </div>
                )}
                */}

                {item.description && (
                    <p className="text-xs text-stone-500 font-light leading-relaxed mt-2 line-clamp-2">
                        {item.description}
                    </p>
                )}
            </div>
        </motion.div>
    )
}
