import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MenuItem } from '../data/menu'
import defaultFoodImage from '../assets/images/rice-bowl.png'

interface SelectionPreviewModalProps {
    isOpen: boolean
    onClose: () => void
    selectedItems: MenuItem[]
    onRemoveItem: (id: string) => void
}

export default function SelectionPreviewModal({
    isOpen,
    onClose,
    selectedItems,
    onRemoveItem
}: SelectionPreviewModalProps) {
    // const total = selectedItems.reduce((sum, item) => sum + (item.price || 0), 0)

    // Push a dummy history entry when the overlay opens so that browser
    // back gestures (iOS swipe-back, Android back button) close the overlay
    // instead of navigating away to a previous page.
    const didPushHistoryRef = useRef(false)

    useEffect(() => {
        if (!isOpen) return

        history.pushState({ selectionOverlay: true }, '', window.location.href)
        didPushHistoryRef.current = true

        const handlePopState = () => {
            if (!didPushHistoryRef.current) return
            didPushHistoryRef.current = false
            onClose()
        }

        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('popstate', handlePopState)
            // Overlay was closed via the X button (not via browser back).
            // Pop the dummy history entry we pushed so the history stack stays clean.
            if (didPushHistoryRef.current) {
                didPushHistoryRef.current = false
                history.back()
            }
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                    />

                    {/* Side Drawer / Modal */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-african-cream shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 bg-white border-b border-stone-200 flex justify-between items-center shadow-sm">
                            <div>
                                <h2 className="text-2xl font-luxury font-bold text-african-dark-brown">Your Selection</h2>
                                <p className="text-stone-500 text-sm font-sans">{selectedItems.length} items selected</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-600"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ overscrollBehavior: 'contain' }}>
                            {selectedItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-stone-400 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                                        </svg>
                                    </div>
                                    <p className="font-display text-lg">Your plate is empty</p>
                                    <button
                                        onClick={onClose}
                                        className="text-brand-orange font-bold text-sm hover:underline"
                                    >
                                        Browse Menu
                                    </button>
                                </div>
                            ) : (
                                selectedItems.map(item => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        key={item.id}
                                        className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 flex gap-3 items-center group"
                                    >
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                                            <img src={item.image || defaultFoodImage} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-display font-bold text-stone-800 text-sm truncate">{item.name}</h4>
                                            {/*
                                            {item.price && (
                                                <div className="text-brand-orange font-bold text-sm">
                                                    ₦{item.price.toLocaleString()}
                                                </div>
                                            )}
                                            */}
                                        </div>
                                        <button
                                            onClick={() => onRemoveItem(item.id)}
                                            className="p-2 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors focus:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                                            title="Remove item"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {/*
                        {selectedItems.length > 0 && (
                            <div className="p-6 bg-white border-t border-stone-200">
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-stone-500 font-sans font-medium">Total Estimate</span>
                                    <span className="text-3xl font-luxury font-bold text-african-dark-brown">
                                        ₦{total.toLocaleString()}
                                    </span>
                                </div>
                                <button className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold font-sans text-lg shadow-lg shadow-orange-200 hover:bg-orange-600 active:scale-[0.98] transition-all">
                                    Place Order
                                </button>
                            </div>
                        )}
                        */}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
