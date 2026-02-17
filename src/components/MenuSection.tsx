import type { MenuSection as MenuSectionType, MenuItem } from '../data/menu'
import MenuCategory from './MenuCategory'

interface MenuSectionProps {
    section: MenuSectionType
    isSelected: (itemId: string) => boolean
    onToggle: (itemId: string) => void
    onPreview: (item: MenuItem) => void
}

export default function MenuSection({
    section,
    isSelected,
    onToggle,
    onPreview,
}: MenuSectionProps) {
    return (
        <div className="bg-white w-full max-w-2xl mx-auto">
            {/* Section Header */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-800 mb-2">
                    {section.name}
                </h2>
                <div className="h-1 w-24 bg-brand-orange/20 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-12">
                {section.categories.map((category) => (
                    <MenuCategory
                        key={category.name}
                        category={category}
                        isSelected={isSelected}
                        onToggle={onToggle}
                        onPreview={onPreview}
                    />
                ))}
            </div>
        </div>
    )
}