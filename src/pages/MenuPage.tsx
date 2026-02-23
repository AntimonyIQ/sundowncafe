import { useSearchParams } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { menuData } from '../data/menu'
import type { MenuSection as MenuSectionType, MenuItem } from '../data/menu'
import { useMenuSelection } from '../hooks/useMenuSelection'
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
    const [searchParams] = useSearchParams()
    const seatParam = searchParams.get('seat')
    const { isSelected, toggleItem, clearAll, selectedCount, selectedIds } = useMenuSelection()
    const [isClearModalOpen, setIsClearModalOpen] = useState(false)
    const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false)
    const [previewItem, setPreviewItem] = useState<MenuItem | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [activeTab, setActiveTab] = useState(menuData[0].name)

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

    return (
        <div className="h-screen w-full relative overflow-hidden flex items-center justify-center font-sans">
            {/* Page Background Image */}
            <img
                src="/cardbg.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Dimming overlay if needed for readability */}
            <div className="absolute inset-0 bg-black/50 z-0" />

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


            {/* Main Card Container */}
            <div className="max-w-2xl w-full mx-auto relative z-10 h-[92vh] md:h-[96vh] flex flex-col my-4">

                {/* SVG Border Frame - Absolute Positioned */}
                <img
                    src="/1210514.svg"
                    alt="Menu Frame"
                    className="absolute inset-0 w-full h-full pointer-events-none select-none z-20"
                    style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))' }}
                />

                {/* Content Container - Padded to fit inside the frame */}
                <div className="relative z-30 flex flex-col w-full h-full bg-white/95 backdrop-blur-sm overflow-hidden" style={{ margin: '20px', width: 'calc(100% - 40px)', height: 'calc(100% - 40px)' }}>

                    {/* Header Section */}
                    <div className="p-6 md:p-8 space-y-6 flex-none bg-transparent relative z-20">
                        <div className="text-center space-y-2">
                            <h1 className="text-4xl font-display font-bold text-stone-900 tracking-wider">
                                <span className='text-african-yellow'>SUNDOWN</span> MENU
                            </h1>
                            {seatParam && (
                                <div className="inline-block bg-african-cream/30 text-african-brown text-xs font-bold px-3 py-1 uppercase tracking-widest border border-african-cream">
                                    {seatParam.includes('-') ? `Table ${seatParam}` : `Seat ${seatParam}`}
                                </div>
                            )}
                        </div>

                        {/* Search Bar */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="SEARCH FLAVORS..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-12 pr-4 py-4 bg-white border border-stone-300 focus:border-brand-orange
                                           rounded-none text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-0
                                           font-sans text-sm tracking-wide uppercase transition-colors"
                            />
                        </div>

                        {/* Tabs */}
                        <div className="flex w-full space-x-4 border-b border-stone-200">
                            {menuData.map((section) => (
                                <button
                                    key={section.name}
                                    onClick={() => setActiveTab(section.name)}
                                    className={`
                                        flex-1 pb-3 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors relative
                                        ${activeTab === section.name
                                            ? 'text-brand-orange'
                                            : 'text-stone-400 hover:text-stone-600'}
                                    `}
                                >
                                    {section.name}
                                    {activeTab === section.name && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Reset Button */}
                        {selectedCount > 0 && (
                            <div className="flex justify-end">
                                <button
                                    onClick={handleClearAll}
                                    className="text-xs font-bold text-african-red hover:text-red-700 uppercase tracking-widest transition-colors flex items-center gap-2"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                    RESET SELECTION ({selectedCount})
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Content Container with Tunnel Effect */}
                    <div className="flex-1 relative overflow-hidden flex flex-col px-6 md:px-8">
                        {/* Tunnel Gradients */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-b from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

                        {/* Scrollable List */}
                        <div className="flex-1 overflow-y-auto pb-32 pt-4 scrollbar-hide">
                            <AnimatePresence mode="wait">
                                {activeSection && activeSection.categories.length > 0 ? (
                                    <motion.div 
                                        key={activeSection.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
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
                                    <p className="text-xl font-display text-stone-400 italic">
                                        No flavors found matching "{searchQuery}"
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
                </div>
            </div>

            {/* Floating Selection Button */}
            <AnimatePresence>
                {selectedCount > 0 && (
                    <div className="fixed bottom-6 left-0 right-0 z-30 flex justify-center px-4 pointer-events-none">
                        <motion.button
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            onClick={() => setIsSelectionModalOpen(true)}
                            className="bg-brand-orange text-white px-8 py-4 shadow-xl shadow-stone-900/20 flex items-center gap-4 active:scale-95 transition-all w-full max-w-xs pointer-events-auto border border-stone-900/10 rounded-none uppercase tracking-widest font-bold text-sm"
                        >
                            <div className="bg-white text-brand-orange px-2 py-0.5 text-xs font-bold">
                                {selectedCount}
                            </div>
                            <span className="flex-1 text-center">View Selection</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
