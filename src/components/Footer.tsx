"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-black uppercase tracking-tighter text-white">
                                MetaData
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            Premium 3D keyboards for the modern enthusiast. Elevate your typing experience.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-[#01A7E1] transition-colors">
                                <FaFacebook className="size-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#01A7E1] transition-colors">
                                <FaTwitter className="size-6" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#01A7E1] transition-colors">
                                <FaInstagram className="size-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#01A7E1] transition-colors">
                                <FaLinkedin className="size-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold uppercase tracking-wider">Shop</h3>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Keyboards
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Switches
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Keycaps
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Accessories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold uppercase tracking-wider">Support</h3>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Warranty
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold uppercase tracking-wider">Legal</h3>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#01A7E1] transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MetaData. All rights reserved.</p>
                    <p className="mt-2">
                        Developed by <span className="text-white">GoharAbbas</span> |{" "}
                        <a href="mailto:GoharAbbas2122804@gmail.com" className="hover:text-[#01A7E1] transition-colors">
                            GoharAbbas2122804@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
