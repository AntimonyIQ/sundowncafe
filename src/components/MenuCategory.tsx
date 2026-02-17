import type { MenuCategory as MenuCategoryType, MenuItem } from '../data/menu'
import MenuItemCard from './MenuItemCard'
import StylishDivider from './StylishDivider'

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
        <div className="mb-12 last:mb-0 text-center relative">
            <h3 className="text-2xl font-luxury font-bold text-african-dark-brown mb-8 inline-block px-8 relative">
                {category.name}
            </h3>

            <div className="grid grid-cols-1 gap-4 px-4">
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

            <div className="mt-12 px-4">
                <StylishDivider color="#7F5539" className="w-full h-auto" />
            </div>
        </div>
    )
}