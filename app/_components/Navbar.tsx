import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between py-4 px-20 relative font-sans select-none">
        <Link href="/">
          <Image className="w-30" src={Logo} alt="Logo" />
        </Link>

        {/* Navbar links here */}
        <ul className="flex py-2.5 px-7 rounded-full space-x-3 z-10 text-sm font-medium ring-1 ring-preply-green">
          <li>
            <Link
              href="/"
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

        <button
          type="button"
          className="py-2 px-4 bg-preply-green hover:cursor-pointer font-medium rounded-full transform transition active:scale-96"
        >
          Get started
        </button>
      </nav>
    </header>
  );
}
