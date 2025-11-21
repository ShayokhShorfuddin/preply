"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import chevron_left from "@/public/chevron-left.svg";
import chevron_right from "@/public/chevron-right.svg";
import home from "@/public/home.svg";
import logo_mark from "@/public/logomark.svg";
import { authClient } from "@/utils/auth-client";
import { SidebarContext } from "../layout";

type SidebarProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

// Array of navigation links for easier mapping
const navLinks: Array<{ name: string; href: string; icon: React.ReactNode }> = [
  {
    name: "Home",
    href: "/home",
    icon: <Image src={home} alt="Home" className="size-5 stroke-neutral-400" />,
  },
];

export default function Sidebar() {
  const pathName = usePathname();
  const router = useRouter();
  const { expanded, toggle } = useContext(SidebarContext);

  // Get user session and first name
  const { data: session, isPending } = authClient.useSession();
  const userName = session?.user.name || "Guest";
  const firstName = userName.split(" ")[0];

  return (
    <aside>
      <nav className="flex flex-col justify-between h-full px-2 py-2 font-sans">
        {/* Top logo and retract button */}
        <div>
          <div className="flex justify-between items-center">
            <Image
              src={logo_mark}
              alt="Icon"
              className={expanded ? "block w-6" : "hidden"}
            />

            <button
              className="p-1 hover:cursor-pointer hover:bg-neutral-200 rounded-lg transition-colors duration-200"
              type="button"
              onClick={toggle}
            >
              <Image
                src={expanded ? chevron_left : chevron_right}
                alt="Toggle"
                className="size-5"
              />
            </button>
          </div>

          {/* Navigation links */}
          <ul className="flex-1 flex flex-col gap-y-1 mt-2">
            {navLinks.map((data) => (
              <li key={data.name}>
                <SidebarLink
                  expanded={expanded}
                  pathName={pathName}
                  data={data}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom profile */}
        <button
          type="button"
          onClick={() => {
            router.push("/home/profile");
          }}
        >
          <div className="flex items-center gap-x-2 mt-auto hover:cursor-pointer">
            <div className="size-8 bg-neutral-200 rounded-full flex items-center justify-center">
              <p className="text-md font-semibold text-neutral-400">
                {isPending ? "G" : firstName[0].toUpperCase()}
              </p>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${expanded ? "block" : "hidden"}`}
            >
              <p className="text-neutral-800 text-sm font-semibold">
                {isPending ? "Guest" : firstName}
              </p>
            </div>
          </div>
        </button>
      </nav>
    </aside>
  );
}

function SidebarLink({
  data,
  pathName,
  expanded,
}: {
  data: SidebarProps;
  pathName: string;
  expanded: boolean;
}) {
  const { name, href, icon } = data;

  return (
    <Link
      className={`relative flex items-center p-2 gap-x-2 cursor-pointer text-nowrap rounded-lg w-full ${pathName === data.href ? "bg-neutral-200" : ""} hover:bg-neutral-200`}
      href={href}
    >
      {icon}

      <span
        className={`text-sm text-nowrap font-medium ${expanded ? "block" : "hidden"}`}
      >
        {name}
      </span>
    </Link>
  );
}
