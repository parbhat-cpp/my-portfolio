import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  },
  darkMode: "class",
  plugins: [nextui({
    // prefix: "nextui", // prefix for themes variables
    // addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    // defaultTheme: "dark", // default theme from the themes object
    // defaultExtendTheme: "dark", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {}, // light theme layout tokens
        colors: {
          bgPrimary: "#fff",
          bgSecondary: "#F9FAFB",
          navBtnBg: "#111827",
          navBtnTxt: "#F9FAFB",
          titleColor: "#111827",
          subtitleColor: "#4B5563",
          tagBg: "#E5E7EB",
          expCardBg: "#fff",
          expCardBg2: "#F9FAFB",
        }, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {
          bgPrimary: "#030712",
          bgSecondary: "#111827",
          navBtnBg: "#F9FAFB",
          navBtnTxt: "#111827",
          titleColor: "#F9FAFB",
          subtitleColor: "#D1D5DB",
          tagBg: "#374151",
          expCardBg: "#1F2937",
          expCardBg2: "#374151",
        }, // dark theme colors
      },
    },
  })],
}
