"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
    // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //   isScrolled ? "bg-purple-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    // }`}
    >
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" aria-label="MT International Homepage">
            {/* Eagle Logo */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
              <Image
                src="/MT Internatioonal.png"
                alt="MT International Eagle Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                priority
              />
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">MT</span>
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-purple-200 leading-tight">INTERNATIONAL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200 relative group"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          {/* <div className="hidden md:flex items-center space-x-4"> */}
          {/* <Button variant="ghost" className="text-white hover:text-purple-200">
              Log In
            </Button> */}
          {/* <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Get Started
            </Button> */}
          {/* </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-purple-700/50">
            <nav className="flex flex-col space-y-4 mt-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-white hover:text-purple-200 justify-start">
                  Log In
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white justify-start">
                  Get Started
                </Button>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
