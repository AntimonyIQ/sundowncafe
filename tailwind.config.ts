import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-orange': '#FF6B35',
                'brand-black': '#1A1A1A',
                'brand-green': '#4CAF50',
                'african-red': '#D62828',
                'african-yellow': '#F77F00',
                'african-gold': '#FCBF49',
                'african-brown': '#7F5539',
                'african-dark-brown': '#3E2723',
                'african-cream': '#EAE2B7',
                'african-blue': '#003049',
                'african-orange': '#E76F51',
                'african-green': '#2A9D8F',
            },
            fontFamily: {
                sans: ['Lato', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
        },
    },
    plugins: [],
} satisfies Config
