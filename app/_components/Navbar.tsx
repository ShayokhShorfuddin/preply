"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import close from "@/public/close.svg";
import logo from "@/public/logo.svg";
import menu from "@/public/menu.svg";

export default function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when user clicks outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        closeMenuButtonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !closeMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="flex items-center justify-between py-4 px-[1.2rem] lg:px-[3rem] relative font-sans select-none">
        <Link href="/">
          <Image className="w-22 xs:w-26 sm:w-30" src={logo} alt="Logo" />
        </Link>

        {/* Navbar links here */}
        <ul className="hidden md:flex py-2.5 px-7 rounded-full space-x-3 z-10 text-sm font-medium ring-1 ring-preply-green">
          <li>
            <Link
              href="/products"
              className="p-1.5 hover:text-preply-green transition duration-350"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className="p-1.5 hover:text-preply-green transition duration-350"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="p-1.5 hover:text-preply-green transition duration-350"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="p-1.5 hover:text-preply-green transition duration-350"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/status"
              className="p-1.5 hover:text-preply-green transition duration-350"
            >
              Status
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-x-2">
          <button
            type="button"
            className="py-1 sm:py-2 px-3 sm:px-4 text-sm sm:text-base bg-preply-green hover:cursor-pointer font-medium rounded-full transform transition active:scale-96"
          >
            Get started
          </button>

          {isMenuOpen ? (
            <button
              type="button"
              className="hover:cursor-pointer md:hidden py-2 pl-2"
              aria-label="Close menu"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              ref={closeMenuButtonRef}
            >
              <Image src={close} alt="Close menu" className="size-[18px]" />
            </button>
          ) : (
            <button
              type="button"
              className="hover:cursor-pointer md:hidden py-2 pl-2"
              aria-label="Open menu"
              onClick={() => {
                setIsMenuOpen(true);
              }}
            >
              <Image src={menu} alt="Open menu" className="size-[18px]" />
            </button>
          )}
        </div>

        {/* Mobile navigation dropdown */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden absolute top-14 xs:top-16 right-0 mr-2 z-50`}
          ref={dropdownRef}
        >
          <NavigationDropdown />
        </div>
      </nav>
    </header>
  );
}

// Navigation dropdown for mobile devices
function NavigationDropdown() {
  return (
    <div className="bg-white border border-lime-500 rounded-xl px-4 py-3 w-min">
      <ul className="space-y-2.5">
        <li>
          <Link href="/products" className="text-sm text-nowrap">
            Products
          </Link>
        </li>
        <li>
          <Link href="/articles" className="text-sm text-nowrap">
            Articles
          </Link>
        </li>
        <li>
          <Link href="/community" className="text-sm text-nowrap">
            Community
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="text-sm text-nowrap">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/status" className="text-sm text-nowrap">
            Status
          </Link>
        </li>
      </ul>
    </div>
  );
}
