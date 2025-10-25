import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Agency</h3>
                        <p className="text-gray-300 mb-4 max-w-md">
                            We create exceptional digital experiences that drive results for your business.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                            <li><Link href="/work" className="text-gray-300 hover:text-white">Our Work</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                            <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                <span className="text-gray-300">hello@agency.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                <span className="text-gray-300">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-gray-300">New York, NY</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 Agency. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}