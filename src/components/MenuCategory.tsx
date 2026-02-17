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
    <div className="mb-8 last:mb-0 text-center">
      <h3 className="text-xl font-display font-semibold text-brand-orange mb-6 border-b border-stone-100 pb-2 inline-block px-8">
        {category.name}
      </h3>

      <div className="grid grid-cols-1 gap-6">
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