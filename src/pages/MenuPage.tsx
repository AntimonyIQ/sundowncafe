import { useSearchParams } from 'react-router-dom'
import { useState, useMemo, useRef, useEffect } from 'react'
import { menuData } from '../data/menu'
import type { MenuSection as MenuSectionType, MenuItem } from '../data/menu'
import { useMenuSelection } from '../hooks/useMenuSelection'
import { useSEO } from '../hooks/useSEO'
import MenuCategory from '../components/MenuCategory'
import { motion, AnimatePresence } from 'framer-motion'
// import AfricanFrame from '../components/AfricanFrame'
import ConfirmationModal from '../components/ConfirmationModal'
import SelectionPreviewModal from '../components/SelectionPreviewModal'
import ImagePreviewModal from '../components/ImagePreviewModal'

// Helper to filter menu data based on search
const filterMenu = (data: MenuSectionType[], query: string) => {
    if (!query) return data

    const lowerQuery = query.toLowerCase()

    return data.map(section => {
        const matchingCategories = section.categories.map(cat => {
            const matchingItems = cat.items.filter(item =>
                item.name.toLowerCase().includes(lowerQuery) ||
                item.description?.toLowerCase().includes(lowerQuery)
            )
            return { ...cat, items: matchingItems }
        }).filter(cat => cat.items.length > 0)

        return { ...section, categories: matchingCategories }
    }).filter(section => section.categories.length > 0)
}

export default function MenuPage() {
    useSEO({
        title: 'Menu — Sundown Cafe | Gourmet Food & Artisanal Coffee in Port Harcourt',
        description: 'Explore the Sundown Cafe menu featuring gourmet burgers, grilled proteins, smoothies, artisanal coffee, and decadent desserts. Best café menu in Port Harcourt, GRA.',
        canonical: 'https://sundown.cafe/menu',
    });
    const [searchParams] = useSearchParams()
    const seatParam = searchParams.get('seat')
    const { isSelected, toggleItem, clearAll, selectedCount, selectedIds } = useMenuSelection()
    const [isClearModalOpen, setIsClearModalOpen] = useState(false)
    const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false)
    const [previewItem, setPreviewItem] = useState<MenuItem | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [activeTab, setActiveTab] = useState(menuData[0].name)
    const tabsRef = useRef<HTMLDivElement>(null)

    const filteredMenu = useMemo(() => filterMenu(menuData, searchQuery), [searchQuery])

    const activeSection = useMemo(() => {
        return filteredMenu.find(section => section.name === activeTab)
    }, [filteredMenu, activeTab])

    const selectedItems = useMemo(() => {
        const items: MenuItem[] = []
        selectedIds.forEach(id => {
            for (const section of menuData) {
                for (const category of section.categories) {
                    const found = category.items.find(i => i.id === id)
                    if (found) {
                        items.push(found)
                        return // Found this id, move to next
                    }
                }
            }
        })
        return items
    }, [selectedIds])

    const handleClearAll = () => {
        if (selectedCount > 0) {
            setIsClearModalOpen(true)
        }
    }

    const confirmClearAll = () => {
        clearAll()
        setIsClearModalOpen(false)
    }

    const handleImagePreview = (item: MenuItem) => {
        setPreviewItem(item)
    }

    // Scroll active tab button into view when tab changes
    useEffect(() => {
        if (!tabsRef.current) return
        const activeBtn = tabsRef.current.querySelector('[data-active="true"]') as HTMLElement | null
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
        }
    }, [activeTab])

    return (
        <div className="min-h-screen bg-stone-100 font-sans">
            <SelectionPreviewModal
                isOpen={isSelectionModalOpen}
                onClose={() => setIsSelectionModalOpen(false)}
                selectedItems={selectedItems}
                onRemoveItem={toggleItem}
            />

            <ImagePreviewModal
                item={previewItem}
                isOpen={!!previewItem}
                onClose={() => setPreviewItem(null)}
                onToggleSelection={toggleItem}
                isSelected={isSelected}
            />

            <ConfirmationModal
                isOpen={isClearModalOpen}
                title="Clear Selection?"
                message={`Are you sure you want to remove all ${selectedCount} items from your selection?`}
                onConfirm={confirmClearAll}
                onCancel={() => setIsClearModalOpen(false)}
                confirmText="Yes, Clear All"
                cancelText="Keep Items"
                isDestructive={true}
            />

            {/* Page wrapper — centered, max-width constrained */}
            <div className="max-w-2xl mx-auto bg-white min-h-screen flex flex-col shadow-xl shadow-stone-900/10">

                {/* ── Header ── */}
                <div className="px-4 pt-5 pb-4 bg-white border-b border-stone-100">
                    <div className="flex items-center justify-between mb-4">
                        {/* Logo */}
                        <img src="/icon.png" alt="Sundown Cafe" className="w-10 h-10 object-contain" />

                        {/* Title */}
                        <div className="text-center">
                            <h1 className="text-lg font-luxury font-bold text-stone-900 tracking-wider leading-none">
                                <span className="text-african-yellow">SUNDOWN</span> MENU
                            </h1>
                            {seatParam && (
                                <p className="text-[11px] text-stone-400 tracking-widest uppercase mt-0.5">
                                    {seatParam.includes('-') ? `Table ${seatParam}` : `Seat ${seatParam}`}
                                </p>
                            )}
                        </div>

                        {/* Selection bag icon */}
                        <button
                            onClick={() => selectedCount > 0 && setIsSelectionModalOpen(true)}
                            className="relative p-2 text-stone-600 hover:text-brand-orange transition-colors"
                            aria-label="View selection"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                            {selectedCount > 0 && (
                                <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] bg-brand-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                                    {selectedCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search menu…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 focus:border-brand-orange
                                       rounded-xl text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-0
                                       text-sm transition-colors"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-3 flex items-center text-stone-400 hover:text-stone-600"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* ── Sticky Category Tabs ── */}
                <div className="sticky top-0 z-10 bg-white border-b border-stone-100 shadow-sm shadow-stone-900/5">
                    <div
                        ref={tabsRef}
                        className="flex overflow-x-auto scrollbar-hide px-4"
                    >
                        {menuData.map((section) => (
                            <button
                                key={section.name}
                                data-active={activeTab === section.name}
                                onClick={() => setActiveTab(section.name)}
                                className={`
                                    relative flex-shrink-0 py-3 px-4 text-xs font-bold tracking-widest uppercase
                                    transition-colors whitespace-nowrap
                                    ${activeTab === section.name
                                        ? 'text-brand-orange'
                                        : 'text-stone-400 hover:text-stone-600'}
                                `}
                            >
                                {section.name}
                                {activeTab === section.name && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Reset Bar (shown when items selected) ── */}
                {selectedCount > 0 && (
                    <div className="flex items-center justify-between px-4 py-2 bg-african-cream/30 border-b border-african-cream/60">
                        <span className="text-xs text-stone-500">
                            <span className="font-bold text-stone-700">{selectedCount}</span> item{selectedCount !== 1 ? 's' : ''} in your selection
                        </span>
                        <button
                            onClick={handleClearAll}
                            className="text-xs font-bold text-african-red hover:text-red-700 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                        >
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </svg>
                            Reset
                        </button>
                    </div>
                )}

                {/* ── Menu Content ── */}
                <div className="flex-1 pt-6 pb-32">
                    <AnimatePresence mode="wait">
                        {activeSection && activeSection.categories.length > 0 ? (
                            <motion.div
                                key={activeSection.name}
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -16 }}
                                transition={{ duration: 0.18 }}
                            >
                                {activeSection.categories.map(category => (
                                    <MenuCategory
                                        key={category.name}
                                        category={category}
                                        isSelected={isSelected}
                                        onToggle={toggleItem}
                                        onPreview={handleImagePreview}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20 px-8"
                            >
                                <p className="text-lg font-display text-stone-400 italic">
                                    No items found matching "{searchQuery}"
                                </p>
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="mt-4 text-brand-orange font-bold text-sm hover:underline"
                                >
                                    Clear Search
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* ── Floating View Selection Button ── */}
            <AnimatePresence>
                {selectedCount > 0 && (
                    <div className="fixed bottom-6 left-0 right-0 z-30 flex justify-center px-4 pointer-events-none">
                        <motion.button
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
                            onClick={() => setIsSelectionModalOpen(true)}
                            className="bg-brand-orange text-white px-6 py-4 rounded-2xl shadow-xl shadow-orange-900/20
                                       flex items-center gap-4 active:scale-95 transition-transform
                                       w-full max-w-sm pointer-events-auto"
                        >
                            <div className="bg-white/20 text-white min-w-[26px] h-[26px] rounded-full flex items-center justify-center text-xs font-bold">
                                {selectedCount}
                            </div>
                            <span className="flex-1 text-center font-bold tracking-wide text-sm">View Selection</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
