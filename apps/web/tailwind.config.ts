import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Color Palette - Centralized Design Tokens
      colors: {
        background: {
          DEFAULT: "#09090b", // zinc-950
          secondary: "#18181b", // zinc-900
          tertiary: "#27272a", // zinc-800
          muted: "rgba(39, 39, 42, 0.4)", // zinc-800/40
        },
        foreground: {
          DEFAULT: "#fafafa", // zinc-50
          primary: "#f4f4f5", // zinc-100
          secondary: "#e4e4e7", // zinc-200
          muted: "#a1a1aa", // zinc-400
          mutedDarker: "#71717a", // zinc-500
        },
        border: {
          DEFAULT: "#27272a", // zinc-800
          hover: "#3f3f46", // zinc-700
          active: "#52525b", // zinc-600
        },
        accent: {
          DEFAULT: "#fafafa", // zinc-50
          hover: "#f4f4f5", // zinc-100
        },
      },
      // Animation Configuration
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
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
      },
      // Spacing (if you want custom spacing values)
      spacing: {
        // Add custom spacing here if needed
      },
      // Border Radius
      borderRadius: {
        DEFAULT: "0.5rem", // rounded-lg
        sm: "0.375rem", // rounded-md
        md: "0.5rem", // rounded-lg
        lg: "0.75rem", // rounded-xl
        xl: "1rem", // rounded-2xl
      },
    },
  },
  plugins: [],
};
export default config;
