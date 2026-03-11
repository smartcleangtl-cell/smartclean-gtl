/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'technical-bg': '#0B0F14',
                'blueprint-bg': '#0B0F14', // Keeping it for now but adding technical-bg
                'blueprint-surface': '#1B2128',
                'blueprint-text': '#F6F7F8',
                'blueprint-accent': '#4F6DFF',
                'blueprint-silver': '#D1D5D9',
                'blueprint-grey': '#A6AFB7',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                outfit: ['Inter', 'sans-serif'], // Redirecting outfit to inter for consistent engineering feel
            },
            spacing: {
                'xs': '8px',
                'sm': '16px',
                'md': '24px',
                'lg': '40px',
                'xl': '64px',
                'xxl': '96px',
                'hero': '140px',
                'section': '180px',
            },
            borderRadius: {
                'button': '12px',
            },
            transitionDuration: {
                '80': '80ms',
                '120': '120ms',
                '140': '140ms',
                '450': '450ms',
            },
            transitionTimingFunction: {
                'blueprint': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            animation: {
                'micro-drift': 'drift 5s ease-in-out infinite',
            },
            keyframes: {
                drift: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-4px)' },
                }
            }
        },
    },
    plugins: [],
}
