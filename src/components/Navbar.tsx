"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSite } from "@/context/SiteContext";

export default function Navbar() {
  const { currentSite, navLinks } = useSite();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if a link is active (exact match or starts with for nested routes)
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-semibold text-primary-dark tracking-wide hover:text-primary transition-colors"
        >
          {currentSite.name}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body transition-colors relative group ${
                    isActive ? "text-primary-dark" : "text-charcoal hover:text-primary-dark"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side: CTA (desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/kontakt"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile/Tablet: Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            className="p-2 text-charcoal hover:text-primary-dark transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-warm-white/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container mx-auto px-6 py-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block font-body text-lg py-2 transition-colors ${
                    isActive
                      ? "text-primary-dark border-l-2 border-primary pl-3"
                      : "text-charcoal hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-4">
            <Link
              href="/kontakt"
              className="bg-primary hover:bg-primary-dark text-white block text-center px-6 py-3 rounded-full font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
