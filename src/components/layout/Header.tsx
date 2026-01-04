"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AceternityButton } from "@/components/ui/aceternity-button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  <Image
    src="/SVLogo.png"
    alt="SocialVRTX Logo"
    width={125}
    height={125}
    className="object-contain"
    priority
  />

</Link> 
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-neutral-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            <AceternityButton
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Get Started
            </AceternityButton>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-neutral-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <AceternityButton
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white w-fit"
              >
                Get Started
              </AceternityButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
