import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MenuItem } from '../data/menu'
import defaultFoodImage from '../assets/images/rice-bowl.png'

interface ImagePreviewModalProps {
    item: MenuItem | null
    isOpen: boolean
    onClose: () => void
    onToggleSelection: (id: string) => void
    isSelected: (id: string) => boolean
}

export default function ImagePreviewModal({
    item,
    isOpen,
    onClose,
    onToggleSelection,
    isSelected
}: ImagePreviewModalProps) {
    // Push a dummy history entry when the preview opens so that browser
    // back gestures (iOS swipe-back, Android back button) close the preview
    // instead of navigating away to a previous page.
    const didPushHistoryRef = useRef(false)

    // Keep a stable ref to onClose so the useEffect doesn't re-run (and
    // trigger history.back()) just because the parent passed a new inline
    // arrow function on each render.
    const onCloseRef = useRef(onClose)
    useEffect(() => {
        onCloseRef.current = onClose
    })

    useEffect(() => {
        if (!isOpen) return

        history.pushState({ imagePreviewOverlay: true }, '', window.location.href)
        didPushHistoryRef.current = true

        const handlePopState = () => {
            if (!didPushHistoryRef.current) return
            didPushHistoryRef.current = false
            onCloseRef.current()
        }

        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('popstate', handlePopState)
            // Overlay was closed via a button (not via browser back).
            // Pop the dummy history entry we pushed so the history stack stays clean.
            if (didPushHistoryRef.current) {
                didPushHistoryRef.current = false
                history.back()
            }
        }
    }, [isOpen])

    // Return early if no item is selected for preview
    if (!item) return null

    const isItemSelected = isSelected(item.id)

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
                        className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="relative w-full max-w-lg pointer-events-auto flex flex-col items-center">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            {/* Image Container */}
                            <div className="bg-transparent rounded-3xl overflow-hidden shadow-2xl relative w-full aspect-square md:aspect-video group">
                                <img
                                    src={item.image || defaultFoodImage}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white space-y-4">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 drop-shadow-lg text-shadow-brand-orange">
                                            {item.name}
                                        </h3>
                                        {item.description && (
                                            <p className="text-white/90 font-sans text-sm md:text-base max-w-sm mx-auto drop-shadow-md leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>

                                    {/*
                                    <div className="flex items-center justify-center gap-4 pt-2">
                                        <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full font-bold font-display text-2xl text-white border border-white/20">
                                            ₦{item.price?.toLocaleString()}
                                        </div>
                                    </div>
                                    */}

                                    {/* Action Button */}
                                    <button
                                        onClick={() => { onToggleSelection(item.id); onClose(); }}
                                        className={`mt-4 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${isItemSelected
                                                ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                                                : 'bg-white text-brand-orange hover:bg-brand-orange hover:text-white'
                                            }`}
                                    >
                                        {isItemSelected ? (
                                            <>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                Selected
                                            </>
                                        ) : (
                                            <>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                Add to Selection
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
