import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Inter,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});
