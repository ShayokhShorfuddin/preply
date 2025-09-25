import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar font-sans">
        <Link href="/">
          <Image className="w-30" src={Logo} alt="Logo" />
        </Link>

        {/* Navbar links here */}
        <ul>
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/status">Status</Link>
          </li>
        </ul>

        <button type="button" className="navbar-get-started-button">
          Get started
        </button>
      </nav>
    </header>
  );
}
