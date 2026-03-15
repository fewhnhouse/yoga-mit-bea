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
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<Record<string, boolean>>({});

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

  const isGroupActive = (href?: string, subLinks?: { href: string }[]) => {
    if (href && isActiveLink(href)) {
      return true;
    }

    return subLinks?.some((subLink) => isActiveLink(subLink.href)) ?? false;
  };

  const getMobileSubmenuKey = (label: string, index: number) => `${label}-${index}`;

  const toggleMobileSubmenu = (key: string) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenus({});
  };

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
          {navLinks.map((link, index) => {
            const hasSubLinks = (link.subLinks?.length ?? 0) > 0;
            const isActive = isGroupActive(link.href, link.subLinks);

            if (hasSubLinks) {
              return (
                <li key={`${link.label}-${index}`} className="relative group">
                  <button
                    type="button"
                    aria-haspopup="true"
                    className={`font-body transition-colors relative group flex items-center gap-1 ${
                      isActive ? "text-primary-dark" : "text-charcoal hover:text-primary-dark"
                    }`}
                  >
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full group-focus-within:w-full"
                      }`}
                    />
                  </button>

                  <ul className="absolute left-0 top-full mt-3 min-w-[14rem] rounded-xl border border-sand/60 bg-warm-white/98 p-2 shadow-lg opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
                    {link.subLinks?.map((subLink) => {
                      const isSubLinkActive = isActiveLink(subLink.href);

                      return (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                              isSubLinkActive
                                ? "bg-primary/10 text-primary-dark"
                                : "text-charcoal hover:bg-primary/5 hover:text-primary-dark"
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }

            if (!link.href) {
              return null;
            }

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
            onClick={() => {
              if (isMobileMenuOpen) {
                closeMobileMenu();
              } else {
                setIsMobileMenuOpen(true);
              }
            }}
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
          {navLinks.map((link, index) => {
            const hasSubLinks = (link.subLinks?.length ?? 0) > 0;
            const isActive = isGroupActive(link.href, link.subLinks);

            if (hasSubLinks) {
              const submenuKey = getMobileSubmenuKey(link.label, index);
              const isSubmenuOpen = openMobileSubmenus[submenuKey] ?? false;

              return (
                <li key={submenuKey}>
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between font-body text-lg py-2 transition-colors ${
                      isActive ? "text-primary-dark" : "text-charcoal hover:text-primary"
                    }`}
                    onClick={() => toggleMobileSubmenu(submenuKey)}
                    aria-expanded={isSubmenuOpen}
                  >
                    <span>{link.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isSubmenuOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  <ul
                    className={`ml-4 overflow-hidden transition-all duration-300 ${
                      isSubmenuOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    {link.subLinks?.map((subLink) => {
                      const isSubLinkActive = isActiveLink(subLink.href);

                      return (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            className={`block py-2 text-base transition-colors ${
                              isSubLinkActive
                                ? "text-primary-dark border-l-2 border-primary pl-3"
                                : "text-charcoal hover:text-primary pl-3"
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }

            if (!link.href) {
              return null;
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block font-body text-lg py-2 transition-colors ${
                    isActive
                      ? "text-primary-dark border-l-2 border-primary pl-3"
                      : "text-charcoal hover:text-primary"
                  }`}
                  onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
