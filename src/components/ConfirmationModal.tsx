import { motion, AnimatePresence } from 'framer-motion'

interface ConfirmationModalProps {
    isOpen: boolean
    title: string
    message: string
    onConfirm: () => void
    onCancel: () => void
    confirmText?: string
    cancelText?: string
    isDestructive?: boolean
}

export default function ConfirmationModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = "Confirm",
    cancelText = "Cancel",
    isDestructive = false
}: ConfirmationModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
                            className="bg-white w-full max-w-sm rounded-4xl shadow-2xl pointer-events-auto overflow-hidden relative"
                        >
                            {/* Decorative Header */}
                            <div className="h-3 w-full bg-linear-to-r from-african-red via-african-yellow to-african-green"></div>

                            <div className="p-8 pt-10 text-center">
                                <div className={`mb-6 mx-auto w-16 h-16 rounded-full flex items-center justify-center
                                    ${isDestructive ? 'bg-red-50 text-african-red' : 'bg-orange-50 text-brand-orange'}
                                `}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-display font-bold text-stone-900 mb-3">
                                    {title}
                                </h3>
                                <p className="text-stone-500 text-lg leading-relaxed mb-8">
                                    {message}
                                </p>

                                <div className="space-y-3">
                                    <button
                                        onClick={onConfirm}
                                        className={`w-full py-4 rounded-xl font-bold text-lg tracking-wide transition-all active:scale-[0.98] shadow-lg 
                                            ${isDestructive
                                                ? 'bg-african-red text-white hover:bg-red-700 shadow-red-100/50'
                                                : 'bg-brand-orange text-white hover:bg-orange-600 shadow-orange-100/50'
                                            }
                                        `}
                                    >
                                        {confirmText}
                                    </button>
                                    <button
                                        onClick={onCancel}
                                        className="w-full py-4 rounded-xl font-bold text-lg text-stone-400 hover:text-stone-600 hover:bg-stone-50 transition-colors"
                                    >
                                        {cancelText}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
