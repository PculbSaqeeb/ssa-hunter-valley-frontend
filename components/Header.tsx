"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About us", href: "#about" },
  { label: "Matches", href: "#matches" },
  { label: "Programs", href: "#programs" },
  { label: "Coaches", href: "#coaches" },
  { label: "Amenities", href: "#amenities" },
  { label: "Events", href: "#events" },
  { label: "News", href: "#news" },
  { label: "Blogs", href: "#blogs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const headerHeight = window.innerWidth >= 1024 ? 83 : 60;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    setOpen(false);
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full h-[60px] lg:h-[83px] transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-4 py-3 lg:px-10 lg:py-4 h-full max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src={scrolled ? "/images/footer-logo.svg" : "/images/header-logo.svg"} 
            alt="SSA Logo" 
            width={110}
            height={40}
            className="w-[70px] md:w-[90px] lg:w-[110px] h-auto object-contain transition-all" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm 2xl:text-base font-medium transition-colors ${scrolled ? "text-black/90 hover:text-[#99B81B]" : "text-white/90 hover:text-[#99B81B]"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center hide-in-mockup">
          <Link href="/mockup" className="rounded-full bg-[#99B81B] text-white px-6 py-2.5 text-sm 2xl:text-base font-semibold transition-transform hover:scale-105">
            Mockup View
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col justify-center items-center w-8 h-8 xl:hidden"
        >
          {open ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-7 h-7 transition-colors ${scrolled ? "text-black" : "text-white"}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-6 transition-colors ${scrolled ? "bg-black" : "bg-white"}`} />
              <span className={`h-0.5 w-6 transition-colors ${scrolled ? "bg-black" : "bg-white"}`} />
              <span className={`h-0.5 w-6 transition-colors ${scrolled ? "bg-black" : "bg-white"}`} />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="flex flex-col gap-6 bg-black/95 px-6 py-8 absolute top-[60px] lg:top-[83px] left-0 w-full xl:hidden shadow-lg border-t border-white/10 h-[calc(100vh-60px)] lg:h-[calc(100vh-83px)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-white"
            >
              {link.label}
            </a>
          ))}
          <Link 
            href="/mockup"
            onClick={() => setOpen(false)}
            className="hide-in-mockup mt-4 w-full rounded-full border-2 border-[#99B81B] bg-transparent py-3.5 text-center text-base font-semibold text-white transition-transform active:scale-95"
          >
            Mockup View
          </Link>
        </nav>
      )}
    </header>
  );
}


