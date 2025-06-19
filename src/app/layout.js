import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Texas Food Broker | Natural Foods Brokerage | Harvest Brokerage",
  description: "Leading Texas food broker specializing in natural foods brokerage. Serving HEB, Kroger, Whole Foods & major retailers across Texas since 2003.",
  keywords: "texas food broker, natural foods brokerage, food brokerage texas, natural food broker, specialty food broker texas, grocery brokerage",
  authors: [{ name: "Harvest Brokerage" }],
  creator: "Harvest Brokerage",
  publisher: "Harvest Brokerage",
  robots: "index, follow",
  openGraph: {
    title: "Texas Food Broker | Natural Foods Brokerage | Harvest Brokerage",
    description: "Leading Texas food broker specializing in natural foods brokerage. Serving major retailers across Texas since 2003.",
    url: "https://harvestbrokerage.com",
    siteName: "Harvest Brokerage",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Food Broker | Natural Foods Brokerage",
    description: "Leading Texas food broker specializing in natural foods brokerage.",
  },
  alternates: {
    canonical: "https://harvestbrokerage.com",
  },
  metadataBase: new URL("https://harvestbrokerage.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
