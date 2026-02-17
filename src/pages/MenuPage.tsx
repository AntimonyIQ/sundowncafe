import { useSearchParams } from 'react-router-dom'
import { menuData } from '../data/menu'
import { useMenuSelection } from '../hooks/useMenuSelection'
import MenuSection from '../components/MenuSection'
import { motion } from 'framer-motion'

export default function MenuPage() {
    const [searchParams] = useSearchParams()
    const seatParam = searchParams.get('seat')
    const { isSelected, toggleItem, clearAll, selectedCount } = useMenuSelection()

    const handleClearAll = () => {
        if (selectedCount > 0) {
            if (
                window.confirm(
                    `Are you sure you want to clear all ${selectedCount} selected items?`
                )
            ) {
                clearAll()
            }
        }
    }

    return (
        <div className="min-h-screen cafe-pattern-bg py-12 px-4 sm:px-6 lg:px-8 font-sans text-brand-black">
            {/* Sticky Top Bar */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm"
            >
                <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        {seatParam && (
                            <div className="bg-stone-800 text-stone-100 px-4 py-1.5 rounded-full font-display text-sm tracking-wide shadow-sm">
                                {seatParam.includes('-') || seatParam.match(/[A-Z]/)
                                    ? `TABLE ${seatParam}`
                                    : `SEAT ${seatParam}`}
                            </div>
                        )}
                        {selectedCount > 0 && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-brand-orange text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-md"
                            >
                                {selectedCount} items
                            </motion.div>
                        )}
                    </div>

                    <button
                        onClick={handleClearAll}
                        disabled={selectedCount === 0}
                        className={`
                            text-sm uppercase tracking-wider font-bold py-2 px-4 rounded-lg transition-all
                            ${selectedCount > 0
                                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                                : 'text-gray-300 cursor-not-allowed'
                            }
                        `}
                    >
                        Reset
                    </button>
                </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="max-w-3xl mx-auto pt-16">

                {/* Header Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-t-xl shadow-xl p-12 text-center border-t-8 border-brand-orange relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-yellow-400 to-brand-green opacity-50"></div>

                    <h1 className="text-5xl md:text-6xl font-display font-black text-stone-800 mb-4 tracking-tight">
                        Sundown<span className="text-brand-orange">.</span>
                    </h1>
                    <p className="text-xl text-stone-500 font-display italic">
                        Taste the authentic flavors
                    </p>
                </motion.div>

                {/* Menu Sections */}
                <div className="bg-white shadow-xl rounded-b-xl overflow-hidden min-h-[50vh] px-8 pb-12">
                    {menuData.map((section, index) => (
                        <div key={section.name} className={index !== 0 ? "border-t border-dashed border-stone-200 mt-12 py-12" : "pb-12"}>
                            <MenuSection
                                section={section}
                                isSelected={isSelected}
                                onToggle={toggleItem}
                            />
                        </div>
                    ))}
                </div>
                {/* Footer */}
                <div className="text-center text-stone-400 text-sm py-12 font-display italic">
                    © {new Date().getFullYear()} Sundown Cafe
                </div>
            </div>
        </div>
    )
}
