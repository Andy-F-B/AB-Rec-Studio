export type NavItem = { href: string; label: string; highlight?: boolean };

// Background and Contact are hidden for now (content kept in /content).
export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/festival", label: "Festival at the Oasis", highlight: true },
];

export function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
