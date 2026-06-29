import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-base font-bold uppercase tracking-wide text-foreground">
            Carsystem <span className="text-accent">RM</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Profesionalni refinish program i partnerska mreža u Srbiji.
          </p>
        </div>

        <FooterColumn
          title="Navigacija"
          links={[
            { href: "/preview/o-nama", label: "O nama" },
            { href: "/preview/brendovi", label: "Brendovi" },
            { href: "/preview/proizvodi", label: "Proizvodi" },
            { href: "/preview/kontakt", label: "Kontakt" },
          ]}
        />

        <FooterColumn
          title="Resursi"
          links={[
            { href: "/preview/dokumentacija", label: "Dokumentacija" },
            { href: "/preview/edukacija", label: "Edukacija" },
          ]}
        />

        <div>
          <p className="text-sm font-semibold text-foreground">Kontakt</p>
          <address className="mt-3 text-sm not-italic text-muted-foreground">
            Carsystem i R-M Inđija d.o.o.
            <br />
            Inđija, Srbija
          </address>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Carsystem i R-M Inđija d.o.o. Sva prava
        zadržana. Izrada: Studio One.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
