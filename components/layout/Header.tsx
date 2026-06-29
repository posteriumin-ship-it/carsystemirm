import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const NAV_LINKS = [
  { href: "/preview/o-nama", label: "O nama" },
  { href: "/preview/brendovi", label: "Brendovi" },
  { href: "/preview/proizvodi", label: "Proizvodi" },
  { href: "/preview/dokumentacija", label: "Dokumentacija" },
  { href: "/preview/edukacija", label: "Edukacija" },
  { href: "/preview/kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/preview"
          className="text-base font-bold uppercase tracking-wide text-foreground"
        >
          Carsystem <span className="text-accent">RM</span>
        </Link>

        <nav
          aria-label="Glavna navigacija"
          className="hidden items-center gap-6 text-sm font-medium md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/preview/#prodavnice"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Pronađi najbližu prodavnicu
          </Link>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary
        className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-border text-foreground"
        aria-label="Otvori meni"
      >
        <span aria-hidden="true">☰</span>
      </summary>
      <nav
        aria-label="Mobilna navigacija"
        className="absolute right-0 top-12 w-56 rounded-xl border border-border bg-surface p-2 shadow-lg"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-muted"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/preview/#prodavnice"
              className="mt-1 block rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground"
            >
              Pronađi najbližu prodavnicu
            </Link>
          </li>
        </ul>
      </nav>
    </details>
  );
}
