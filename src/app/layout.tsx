import type { Metadata } from "next";
import { Fleur_De_Leah, Red_Hat_Display } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";

// Elegant cursive for headings
const fleurDeLeah = Fleur_De_Leah({
  subsets: ['latin'],
  weight: ['400'], // Only one available
  variable: '--font-fleur-de-leah',
})

// Clean serif for body text
const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular + Bold
  variable: '--font-red-hat-display',
})

export const metadata: Metadata = {
  title: "Morgan + Noah",
  description: "Morgan + Noah wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fleurDeLeah.variable} ${redHatDisplay.variable} antialiased`}
      >
        <div className="min-h-screen w-screen relative">
          {/* Blurred background layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs"
          />
          {/* Content overlay */}
          <div className="relative z-10">
            <div className="w-full">
              <Header />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
