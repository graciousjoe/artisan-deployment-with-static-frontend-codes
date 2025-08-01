// components/Navbar.tsx

"use client";
import React, { useRef } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 fixed w-full z-50 shadow-md">
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
        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src="/list.svg" width={20} height={20} alt="open menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed flex flex-col top-0 bottom-0 right-0 w-64 bg-white transition-transform duration-500 px-10
          gap-6 py-16 h-screen ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div
          className="absolute top-6 right-10 "
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/close.svg"
            width={20}
            height={20}
            className="cursor-pointer"
            alt="Close Menu"
          />
        </div>
        <li>
          <Link href="/auth/option">Sign up</Link>
        </li>
        <li>
          <Link href="/auth/option">Log in</Link>
        </li>
        <li>
          <Link href="/auth/option">About Us</Link>
        </li>
        <li>
          <Link href="/auth/option">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
