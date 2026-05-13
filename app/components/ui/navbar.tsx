"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Button from "../button";
import Logo from "../logo";

interface NavbarProps {
  initialTransparent?: boolean;
}

export default function Navbar({ initialTransparent = true }: NavbarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isWhiteBg = isScrolled || !initialTransparent;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isWhiteBg ? "bg-white shadow-md py-4" : "bg-transparent py-4"
      }`}
    >
      <nav className="flex items-center justify-between px-4 md:px-6 lg:px-20">
        {/* Logo */}
        <Logo
          textColor="text-[#048b7d]"
          color="text-[#048b7d]"
          className="text-gray-900"
        />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative pb-1 text-[15px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-[#048b7d]"
                    : "text-[#1E293B] hover:text-[#048b7d]"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#048b7d] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Button */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <Button text="Book Consultation" />
          </Link>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#048b7d]"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-lg px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`w-fit border-b-2 pb-1 text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-[#048b7d] border-[#048b7d]"
                    : "text-[#1E293B] border-transparent hover:text-[#048b7d]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link href="/contact">
              <Button text="Book Consultation" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
