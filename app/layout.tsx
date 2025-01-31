import { libreFranklin, jetbrainsMono, poppins } from "./fonts"
import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "Stride by Marlow | Premium Sneakers",
  description: "Discover the latest and greatest in sneaker fashion at Stride by Marlow.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${libreFranklin.variable} ${jetbrainsMono.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

