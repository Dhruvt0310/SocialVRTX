import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ClientOnlyLoader from "@/components/layout/ClientOnlyLoader"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Social Vortex - Digital Marketing That Drives Results",
  description:
    "Transform your business with Social Vortex's cutting-edge marketing solutions. We help brands grow through data-driven strategies and exceptional digital experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* ✅ Client-only to prevent hydration mismatch */}
        <ClientOnlyLoader />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
