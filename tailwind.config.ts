import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      // Viewport-responsive font sizes using clamp()
      fontSize: {
        'xs': ['clamp(0.65rem, 0.75vw, 0.75rem)', { lineHeight: '1rem' }],
        'sm': ['clamp(0.8rem, 0.875vw, 0.875rem)', { lineHeight: '1.25rem' }],
        'base': ['clamp(0.9rem, 1vw, 1rem)', { lineHeight: '1.5rem' }],
        'lg': ['clamp(1rem, 1.125vw, 1.125rem)', { lineHeight: '1.75rem' }],
        'xl': ['clamp(1.1rem, 1.25vw, 1.25rem)', { lineHeight: '1.75rem' }],
        '2xl': ['clamp(1.3rem, 1.5vw, 1.5rem)', { lineHeight: '2rem' }],
        '3xl': ['clamp(1.6rem, 1.875vw, 1.875rem)', { lineHeight: '2.25rem' }],
        '4xl': ['clamp(2rem, 2.25vw, 2.25rem)', { lineHeight: '2.5rem' }],
        '5xl': ['clamp(2.5rem, 3vw, 3rem)', { lineHeight: '1' }],
        '6xl': ['clamp(3rem, 3.75vw, 3.75rem)', { lineHeight: '1' }],
        '7xl': ['clamp(3.5rem, 4.5vw, 4.5rem)', { lineHeight: '1' }],
        '8xl': ['clamp(4.5rem, 6vw, 6rem)', { lineHeight: '1' }],
        '9xl': ['clamp(5.5rem, 8vw, 8rem)', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
export default config;
