import type { MenuCategory as MenuCategoryType, MenuItem } from '../data/menu'
import MenuItemCard from './MenuItemCard'

interface MenuCategoryProps {
    category: MenuCategoryType
    isSelected: (itemId: string) => boolean
    onToggle: (itemId: string) => void
    onPreview: (item: MenuItem) => void
}

export default function MenuCategory({
    category,
    isSelected,
    onToggle,
    onPreview,
}: MenuCategoryProps) {
    return (
        <div className="mb-8 last:mb-0">
            {/* Section Header */}
            <div className="flex items-center justify-between px-4 mb-3">
                <h3 className="text-sm font-bold text-stone-700 uppercase tracking-widest">
                    {category.name}
                </h3>
                <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-stone-300 flex-shrink-0"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>

            {/* Horizontal Scroll Row */}
            <div className="flex gap-3 overflow-x-auto pb-2 px-4 scrollbar-hide">
                {category.items.map((item) => (
                    <MenuItemCard
                        key={item.id}
                        item={item}
                        isSelected={isSelected(item.id)}
                        onToggle={() => onToggle(item.id)}
                        onPreview={() => onPreview(item)}
                    />
                ))}
            </div>
        </div>
    )
}