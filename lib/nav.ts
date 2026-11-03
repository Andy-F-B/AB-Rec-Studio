export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/musicians", label: "Musicians" },
  { href: "/background", label: "Background" },
  { href: "/festival", label: "Festival" },
  { href: "/contact", label: "Contact" },
];

export function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
