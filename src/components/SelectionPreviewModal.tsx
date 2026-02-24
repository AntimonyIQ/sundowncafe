import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MenuItem } from '../data/menu'
import { SHOW_PRICE } from '../data/menu'
import { formatNairaFromKobo } from '../utils/formatCurrency'
import defaultFoodImage from '../assets/images/rice-bowl.png'
import { generateShareUrl } from '../utils/shareSelection'

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
    const totalKobo: number = selectedItems.reduce((sum, item) => sum + item.price, 0)
    const [shareToast, setShareToast] = useState<'copied' | 'shared' | null>(null)

    const handleShare = async () => {
        const ids = selectedItems.map(item => item.id)
        const url = generateShareUrl(ids)

        if (navigator.share) {
            try {
                await navigator.share({ title: 'Sundown Cafe Selection', url })
                setShareToast('shared')
            } catch {
                // User cancelled or API failed — fall through to clipboard
                await copyToClipboard(url)
            }
        } else {
            await copyToClipboard(url)
        }
    }

    const copyToClipboard = async (url: string) => {
        try {
            await navigator.clipboard.writeText(url)
            setShareToast('copied')
        } catch {
            // Fallback for environments without Clipboard API
            try {
                const input = document.createElement('input')
                input.value = url
                document.body.appendChild(input)
                input.select()
                document.execCommand('copy')
                document.body.removeChild(input)
                setShareToast('copied')
            } catch {
                // If all copy methods fail, open the URL in a prompt so the user can copy manually
                window.prompt('Copy this link to share your selection:', url)
            }
        }
    }

    useEffect(() => {
        if (!shareToast) return
        const timer = setTimeout(() => setShareToast(null), 2500)
        return () => clearTimeout(timer)
    }, [shareToast])

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
                        className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
                    />

                    {/* Side Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold text-stone-900 font-luxury">Your Selection</h2>
                                <p className="text-xs text-stone-400 mt-0.5">
                                    {selectedItems.length} {selectedItems.length === 1 ? 'item' : 'items'} selected
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-700"
                                aria-label="Close"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Item List */}
                        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-3" style={{ overscrollBehavior: 'contain' }}>
                            {selectedItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-stone-400 space-y-4 py-20">
                                    <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                            <line x1="3" y1="6" x2="21" y2="6" />
                                            <path d="M16 10a4 4 0 0 1-8 0" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-600 text-sm">Your plate is empty</p>
                                        <p className="text-xs text-stone-400 mt-1">Add items from the menu to get started</p>
                                    </div>
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
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        key={item.id}
                                        className="bg-stone-50 rounded-xl border border-stone-100 flex gap-3 items-center p-3 group"
                                    >
                                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-stone-200 shrink-0">
                                            <img
                                                src={item.image || defaultFoodImage}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-stone-800 text-sm leading-snug line-clamp-2">
                                                {item.name}
                                            </h4>
                                            {SHOW_PRICE && (
                                                <div className="text-brand-orange font-bold text-xs mt-0.5">
                                                    {formatNairaFromKobo(item.price)}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => onRemoveItem(item.id)}
                                            className="p-2 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
                                            title="Remove item"
                                            aria-label={`Remove ${item.name}`}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                            </svg>
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Sticky Footer */}
                        {selectedItems.length > 0 && (
                            <div className="px-5 py-4 border-t border-stone-100 bg-white">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-stone-500">
                                        {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
                                    </span>
                                    {SHOW_PRICE && (
                                        <span className="text-base font-bold text-stone-900 font-luxury">
                                            {formatNairaFromKobo(totalKobo)}
                                        </span>
                                    )}
                                </div>
                                <button
                                    onClick={handleShare}
                                    className="w-full py-3 mb-2 bg-stone-100 text-stone-700 rounded-xl font-bold text-sm
                                               hover:bg-stone-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    {shareToast ? (
                                        <>
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {shareToast === 'shared' ? 'Shared!' : 'Link Copied!'}
                                        </>
                                    ) : (
                                        <>
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                            </svg>
                                            Share Selection
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={onClose}
                                    className="w-full py-3.5 bg-brand-orange text-white rounded-xl font-bold text-sm
                                               shadow-lg shadow-orange-200 hover:bg-orange-600 active:scale-[0.98] transition-all"
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
