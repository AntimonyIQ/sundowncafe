import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Icons will be imported here (assuming you have access to a library or use SVGs, 
// using simple text/svg placeholders for now if no library is ready, or lucid-react)
// I will use simple SVG icons for this implementation to keep dependencies low.

// Import the video - assuming it's in public or src. 
import bgVideo from '../assets/videos/bg1.mp4';


const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
)

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)

/* If we want to add a phone icon for contact, we can use something like this:
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)
*/


export default function HomePage() {
    return (
        <div className="relative w-full h-dvh overflow-hidden font-sans text-white">

            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-full scale-105"
                    style={{ filter: "brightness(0.35) contrast(1.1)" }}
                    ref={video => { if (video) video.playbackRate = 0.5 }}
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
            </div>

            {/* Main Content Layer - Full Screen Grid */}
            <div className="relative z-20 h-full w-full p-6 md:p-12 flex flex-col items-center justify-center bg-black/20">

                {/* Top Left - Brand */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-6 left-6 md:top-10 md:left-10"
                >
                    <h1 className="text-xl md:text-2xl font-luxury font-bold tracking-[0.3em] text-white/90">
                        SUNDOWN CAFE
                    </h1>
                </motion.div>

                {/* Top Right - Social/Contact Icon */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-6 right-6 md:top-10 md:right-10 flex gap-6"
                >
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-all hover:scale-110 opacity-80 hover:opacity-100">
                        <InstagramIcon />
                    </a>
                </motion.div>


                {/* CENTER HERO */}
                <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <p className="text-brand-orange font-luxury text-sm md:text-base tracking-[0.4em] mb-6 uppercase">
                            Est. 2024
                        </p>
                        <h2 className="text-5xl md:text-7xl lg:text-9xl font-luxury font-medium leading-none tracking-widest text-white drop-shadow-2xl mb-8">
                            ARTISAN<br />FLAVORS
                        </h2>

                        <p className="text-sm md:text-lg text-gray-200 font-light tracking-[0.2em] max-w-lg mx-auto uppercase leading-relaxed hidden md:block drop-shadow-md">
                            Coffee • Cuisine • Atmosphere
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <Link
                            to="/menu" 
                            className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-luxury text-sm font-medium tracking-[0.2em] text-white transition-all duration-500 border border-white/20 hover:border-brand-orange hover:text-brand-orange focus:outline-none backdrop-blur-sm bg-white/5 hover:bg-white/10"
                        >
                            <span className="uppercase">Explore Menu</span>
                        </Link>
                    </motion.div>
                </div>


                {/* Bottom Left - Location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-xs md:text-sm font-light tracking-widest text-gray-400 group cursor-pointer hover:text-brand-orange transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <MapPinIcon />
                        <div className="flex flex-col">
                            <span className="font-luxury text-white group-hover:text-brand-orange transition-colors">VICTORIA ISLAND</span>
                            <span className="opacity-70">LAGOS, NIGERIA</span>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Right - Reservation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right"
                >
                    <a href="tel:+2348123456789" className="text-xs md:text-sm font-light tracking-widest text-gray-400 hover:text-brand-orange transition-colors group flex flex-col items-end">
                        <span className="font-luxury text-white group-hover:text-brand-orange transition-colors">RESERVATIONS</span>
                        <span className="opacity-70">+234 812 345 6789</span>
                    </a>
                </motion.div>

            </div>
        </div>
    )
}
