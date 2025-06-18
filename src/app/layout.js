import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harvest Brokerage - Natural & Specialty Trade Specialists",
  description: "Texas food brokerage specializing in natural and specialty grocery products. Back to basics approach serving major retailers and distributors.",
  keywords: "food brokerage, Texas, natural foods, specialty trade, grocery, HEB, Kroger, Whole Foods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
