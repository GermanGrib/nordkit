import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "18px",
        sm: "18px",
        md: "18px",
        lg: "18px",
        xl: "20px",
        "2xl": "20px",
      },
      screens: {
        DEFAULT: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        "nk-main": "#2491EB",
        "nk-main-hover": "#42A9FF",
        "nk-main-active": "#2B55C0",
        "nk-main-inactive": "#DDDDDD",
        "nk-secondary": "#F6F6F6",
        "nk-accent": "#C11111",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "nk-box-shadow": "1px 1px 8px 8px rgba(230, 230, 230, .4)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        s: "550px",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
