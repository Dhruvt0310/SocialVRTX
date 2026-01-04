import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ClientOnlyLoader from "@/components/layout/ClientOnlyLoader"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
