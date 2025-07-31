// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 relative">
      <div className="flex items-center justify-between py-1 gap-6 container mx-auto lg:justify-center">
        {/* Logo + Brand */}
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="/artisan-logo.png"
            alt="Artisan Logo"
            width={40}
            height={40}
          />
          <span>Artisan Linkup</span>
        </Link>
        <div className="hidden lg:flex lg:gap-6 lg:items-center">
          {/* Dropdown */}
          <div className="relative" onMouseEnter={() => setIsOpen(true)}>
            <button>Categories</button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded">
                <li>
                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Auth Links */}
          <div className="flex gap-4">
            <Link href="/auth/option">Sign up</Link>
            <Link href="/auth/option">Log in</Link>
            <Link href="/auth/option">About Us</Link>
            <Link href="/auth/option">Contact Us</Link>
          </div>

          {/* Account Button */}
          <Link className="border p-3 rounded" href="/account">
            Account
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden cursor-pointer">
          <Image src="/list.svg" width={20} height={20} />
        </button>
      </div>
    </nav>
  );
}
