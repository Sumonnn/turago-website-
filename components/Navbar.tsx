
"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Turago", href: "#why-us" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-5">
            <nav className="relative max-w-[1200px] w-full mx-auto bg-white/95 backdrop-blur-xl border border-[#17221D]/10 rounded-2xl shadow-[0_8px_35px_rgba(23,34,29,0.07)]">

                {/* Desktop Navbar */}
                <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center min-h-[82px] px-7 xl:px-9">

                    {/* Logo */}
                    <a
                        href="#home"
                        className="justify-self-start flex items-center"
                        aria-label="Turago Home"
                    >
                        <Image
                            src="/logo.png"
                            alt="Turago"
                            width={150}
                            height={55}
                            priority
                            className="w-auto h-12 object-contain"
                        />
                    </a>

                    {/* Center Navigation */}
                    <div className="flex items-center justify-center gap-7 xl:gap-9">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative py-2 text-[14px] font-semibold tracking-wide text-[#17221D]/75 hover:text-[#12A66A] transition-colors duration-300 whitespace-nowrap group"
                            >
                                {link.name}

                                <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full bg-[#12A66A] group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Right CTA */}
                    <a
                        href="#download"
                        className="justify-self-end flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-[#12A66A] text-white text-sm font-bold hover:bg-[#0E925B] hover:shadow-lg hover:shadow-[#12A66A]/20 transition-all duration-300 group"
                    >
                        Download App

                        <span className="w-10 h-10 rounded-full bg-[#CFF36B] text-[#17221D] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                            <ArrowUpRight size={20} />
                        </span>
                    </a>
                </div>

                {/* Mobile / Tablet Navbar */}
                <div className="lg:hidden flex items-center justify-between min-h-[72px] px-5 sm:px-7">

                    <a href="#home" aria-label="Turago Home">
                        <Image
                            src="/logo.png"
                            alt="Turago"
                            width={140}
                            height={50}
                            priority
                            className="w-auto h-11 object-contain"
                        />
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F1F5EF] text-[#17221D] hover:bg-[#CFF36B] transition-colors"
                        aria-label={isOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden border-t border-[#17221D]/10 px-5 sm:px-7 py-5">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 rounded-xl text-[15px] font-semibold text-[#17221D] hover:bg-[#F1F5EF] hover:text-[#12A66A] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <a
                            href="#download"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 flex items-center justify-between w-full pl-5 pr-2 py-2 rounded-full bg-[#12A66A] text-white font-bold"
                        >
                            Download Turago App

                            <span className="w-10 h-10 rounded-full bg-[#CFF36B] text-[#17221D] flex items-center justify-center">
                                <ArrowUpRight size={20} />
                            </span>
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
