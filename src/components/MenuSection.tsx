import type { MenuSection as MenuSectionType } from '../data/menu'
import MenuCategory from './MenuCategory'

interface MenuSectionProps {
  section: MenuSectionType
  isSelected: (itemId: string) => boolean
  onToggle: (itemId: string) => void
}

export default function MenuSection({
  section,
  isSelected,
  onToggle,
}: MenuSectionProps) {
  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-2">
          {section.name}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-green rounded-full"></div>
      </div>
      <div className="space-y-8">
        {section.categories.map((category) => (
          <MenuCategory
            key={category.name}
            category={category}
            isSelected={isSelected}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  )
}
