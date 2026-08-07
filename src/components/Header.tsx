"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiPhoneCall, FiX } from "react-icons/fi";
import { site } from "@/lib/site";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tariffs", href: "#tariffs" },
  { label: "Drivers", href: "#drivers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3 sm:py-4">
        <Link href="#home" className="flex items-center gap-2 shrink-0 min-w-0">
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-dark font-extrabold text-base sm:text-lg">
            C
          </span>
          <span className="text-white font-extrabold text-base sm:text-xl tracking-tight truncate">
            {site.shortName}
            <span className="text-brand"> Cab</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-3 text-white"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/15 text-brand">
              <FiPhoneCall size={18} />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] uppercase tracking-wider text-gray-400">
                Call Taxi Now
              </span>
              <span className="block font-bold">{site.phone}</span>
            </span>
          </a>
          <a href="#booking" className="btn-brand">
            Book Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white text-2xl lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark border-t border-white/10">
          <nav className="container-x flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center py-3 min-h-11 text-gray-200 hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="flex items-center py-3 min-h-11 font-bold text-brand"
            >
              Call {site.phone}
            </a>
            <a href="#booking" className="btn-brand mt-2 w-fit">
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
