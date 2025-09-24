import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link href="/">
          <Image className="w-30" src={Logo} alt="Logo" />
        </Link>

        {/* Navbar links here */}
        <ul className="flex py-2.5 px-7 rounded-full space-x-3 z-10 text-sm font-medium ring-1 ring-[#7ae326]">
          <li>
            <Link
              className="p-1.5 hover:text-[#7ae326] transition duration-350"
              href="/"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="p-1.5 hover:text-[#7ae326] transition duration-350"
              href="/articles"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              className="p-1.5 hover:text-[#7ae326] transition duration-350"
              href="/community"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              className="p-1.5 hover:text-[#7ae326] transition duration-350"
              href="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="p-1.5 hover:text-[#7ae326] transition duration-350"
              href="/status"
            >
              Status
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="py-2 px-4 bg-[#7ae326] hover:cursor-pointer font-medium rounded-full transform transition active:scale-95"
        >
          Get started
        </button>
      </nav>
    </header>
  );
}
