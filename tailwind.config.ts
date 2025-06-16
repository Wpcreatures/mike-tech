import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors based on the specified color scheme
        blue: {
          50: "#ebf5ff",
          100: "#e1efff",
          200: "#c3dfff",
          300: "#a4cfff",
          400: "#86bfff",
          500: "#3898ff",
          600: "#0a7fff",
          700: "#0064cc",
          800: "#0050a3",
          900: "#003b7a",
          950: "#00254d",
        },
        cyan: {
          50: "#ecfcff",
          100: "#d8f9ff",
          200: "#b1f3ff",
          300: "#8aecff",
          400: "#63e6ff",
          500: "#3cdfff",
          600: "#00c7ef",
          700: "#00a3c4",
          800: "#00829d",
          900: "#006276",
          950: "#00414f",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        "wave-slow": {
          "0%": { transform: "translateX(-25%) translateY(0)" },
          "50%": { transform: "translateX(-15%) translateY(10px)" },
          "100%": { transform: "translateX(-25%) translateY(0)" },
        },
        "wave-fast": {
          "0%": { transform: "translateX(-15%) translateY(0)" },
          "50%": { transform: "translateX(-25%) translateY(15px)" },
          "100%": { transform: "translateX(-15%) translateY(0)" },
        },
        bubble: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translateY(-100px) scale(1.2)", opacity: "0.6" },
          "100%": { transform: "translateY(-200px) scale(0.8)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 8s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        "wave-slow": "wave-slow 15s ease-in-out infinite",
        "wave-fast": "wave-fast 10s ease-in-out infinite",
        bubble: "bubble 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
