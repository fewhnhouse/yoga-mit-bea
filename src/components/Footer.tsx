"use client";

import Link from "next/link";
import { useSite } from "@/context/SiteContext";

export default function Footer() {
  const { currentSite, isYoga, footerServiceLinks, footerInfoLinks } = useSite();

  const primaryColorClass = isYoga ? "text-sage-dark" : "text-terracotta";
  const hoverColorClass = isYoga ? "hover:text-sage-dark" : "hover:text-terracotta";
  const gradientClass = isYoga ? "via-sage/30" : "via-terracotta/30";

  return (
    <footer className="bg-cream border-t border-sand/50">
      {/* Decorative top border */}
      <div className={`h-1 bg-gradient-to-r from-transparent ${gradientClass} to-transparent`} />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <span className={`font-display text-2xl font-semibold ${primaryColorClass} block leading-tight`}>
                {currentSite.name}
              </span>
            </Link>
            <p className="text-charcoal-light text-sm leading-relaxed mb-6 italic">
              &bdquo;{currentSite.tagline}&ldquo;
            </p>
          </div>

          {/* Services Links */}
          {footerServiceLinks.length > 0 && (
            <div>
              <h4 className={`font-display text-lg font-semibold ${primaryColorClass} mb-6`}>
                Angebote
              </h4>
              <ul className="space-y-3">
                {footerServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-charcoal-light ${hoverColorClass} transition-colors text-sm`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Info Links */}
          <div>
            <h4 className={`font-display text-lg font-semibold ${primaryColorClass} mb-6`}>
              Information
            </h4>
            <ul className="space-y-3">
              {footerInfoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-charcoal-light ${hoverColorClass} transition-colors text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-display text-lg font-semibold ${primaryColorClass} mb-6`}>
              Kontakt
            </h4>
            <ul className="space-y-4 text-sm text-charcoal-light">
              <li className="flex items-start gap-3">
                <svg
                  className={`w-5 h-5 ${isYoga ? "text-sage" : "text-terracotta"} mt-0.5 flex-shrink-0`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:info@${currentSite.domain}`}
                  className={`${hoverColorClass} transition-colors`}
                >
                  info@{currentSite.domain}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sand/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-charcoal-light">
          <p>© {new Date().getFullYear()} {currentSite.name}. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-2">
            Mit{" "}
            <svg
              className={`w-4 h-4 ${isYoga ? "text-sage" : "text-terracotta"}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>{" "}
            gestaltet
          </p>
        </div>
      </div>
    </footer>
  );
}
