// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 text-black p-4 relative">
      <div className="flex justify-center items-center py-3 gap-6 container mx-auto">
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
                  About
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
        </div>

        {/* Account Button */}
        <Link className="border p-3 rounded" href="/account">
          Account
        </Link>
      </div>
    </nav>
  );
}
