"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            Agency
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Button>Get Started</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button className="w-full">Get Started</Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}