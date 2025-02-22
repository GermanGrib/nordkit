"use client";
import { MenuItem } from "@/types/interfaces/wordpress/menus.interface";
import Link from "next/link";
import getPathFromUrl from "@/utils/getPathFromUrl";
import { usePathname } from "next/navigation";

interface NavigationProps {
  navData: MenuItem[] | null;
  variant?: "default" | "header" | "footer";
}

const navStyles = {
  default: "",
  header: "flex h-full flex-grow",
  footer: "",
};

const listStyles = {
  default: "",
  header:
    "flex flex-grow flex-wrap gap-x-4 text-sm xl:text-base xl:gap-x-10 gap-y-2",
  footer: "hidden md:flex gap-x-5 lg:gap-x-16",
};

const Navigation = ({ navData, variant = "default" }: NavigationProps) => {
  const pathname = usePathname();
  if (!navData) return null;

  return (
    <nav className={navStyles[variant]}>
      <ul className={listStyles[variant]}>
        {navData.map((item: MenuItem) => {
          const isActive = pathname === getPathFromUrl(item.url);
          return (
            <li key={item.title}>
              <Link
                className={`flex whitespace-nowrap leading-tight font-normal ${isActive ? "underline" : ""} transition hover:text-nk-main active:text-nk-main-active`}
                href={getPathFromUrl(item.url) || "/"}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
