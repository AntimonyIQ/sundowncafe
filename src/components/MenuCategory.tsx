import type { MenuCategory as MenuCategoryType } from '../data/menu'
import MenuItemCard from './MenuItemCard'

interface MenuCategoryProps {
  category: MenuCategoryType
  isSelected: (itemId: string) => boolean
  onToggle: (itemId: string) => void
}

export default function MenuCategory({
  category,
  isSelected,
  onToggle,
}: MenuCategoryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-brand-orange rounded-full"></span>
        {category.name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            isSelected={isSelected(item.id)}
            onToggle={() => onToggle(item.id)}
          />
        ))}
      </div>
    </div>
  )
}
