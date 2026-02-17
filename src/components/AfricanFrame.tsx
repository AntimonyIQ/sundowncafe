import type { ReactNode } from 'react';

interface AfricanFrameProps {
    children: ReactNode;
}

const KentePattern = () => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-20">
        <defs>
            <pattern id="kente" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="60" height="60" fill="#EAE2B7" />
                <path d="M0 0h30v30H0z" fill="#D62828" opacity="0.1" />
                <path d="M30 30h30v30H30z" fill="#F77F00" opacity="0.1" />
                <path d="M0 30h30v30H0z" fill="#003049" opacity="0.1" />
                <circle cx="15" cy="15" r="5" fill="#FCBF49" opacity="0.2" />
                <circle cx="45" cy="45" r="5" fill="#4CAF50" opacity="0.2" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kente)" />
    </svg>
);

const AfricanFrame = ({ children }: AfricanFrameProps) => {
    return (
        <div className="relative h-screen w-screen overflow-hidden bg-african-cream font-sans flex flex-col">

            {/* --- Fixed Frame Borders --- */}

            {/* Top Frame */}
            <div className="h-4 sm:h-6 w-full bg-african-brown border-b-4 border-african-gold z-50 shrink-0 shadow-lg relative">
                <div className="absolute inset-0 bg-pattern-stripes opacity-30"></div>
            </div>

            <div className="flex-1 flex overflow-hidden relative z-0">

                {/* Left Frame */}
                <div className="w-3 sm:w-6 bg-african-brown border-r-4 border-african-gold z-40 h-full shrink-0 flex flex-col items-center justify-center overflow-hidden shadow-lg relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-50"></div>
                    <div className="h-full w-1/2 bg-african-red opacity-20"></div>
                </div>

                {/* Main Scrollable Content Area */}
                <main className="flex-1 relative overflow-y-auto overflow-x-hidden scroll-smooth bg-white/50">
                    {/* Background Pattern */}
                    <div className="fixed inset-0 pointer-events-none z-[-1]">
                        <KentePattern />
                    </div>

                    {/* Content Container - No extra card wrapper, just the content */}
                    <div className="min-h-full px-4 py-8 sm:px-8 sm:py-12 max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>

                {/* Right Frame */}
                <div className="w-3 sm:w-6 bg-african-brown border-l-4 border-african-gold z-40 h-full shrink-0 flex flex-col items-center justify-center overflow-hidden shadow-lg relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-50"></div>
                    <div className="h-full w-1/2 bg-african-green opacity-20"></div>
                </div>
            </div>

            {/* Bottom Frame */}
            <div className="h-4 sm:h-6 w-full bg-african-brown border-t-4 border-african-gold z-50 shrink-0 shadow-[0_-5px_15px_rgba(0,0,0,0.3)] relative">
                <div className="absolute inset-0 bg-pattern-stripes opacity-30"></div>
            </div>

            {/* --- Decorative Corner Accents (Fixed on top of everything) --- */}
            <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 z-50 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                    <path d="M0 0 L100 0 L0 100 Z" fill="#D62828" />
                    <path d="M0 0 L70 0 L0 70 Z" fill="#FCBF49" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 z-50 pointer-events-none rotate-90">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                    <path d="M0 0 L100 0 L0 100 Z" fill="#D62828" />
                    <path d="M0 0 L70 0 L0 70 Z" fill="#FCBF49" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 z-50 pointer-events-none -rotate-90">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                    <path d="M0 0 L100 0 L0 100 Z" fill="#D62828" />
                    <path d="M0 0 L70 0 L0 70 Z" fill="#FCBF49" />
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 z-50 pointer-events-none rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                    <path d="M0 0 L100 0 L0 100 Z" fill="#D62828" />
                    <path d="M0 0 L70 0 L0 70 Z" fill="#FCBF49" />
                </svg>
            </div>

        </div>
    );
};

export default AfricanFrame;
