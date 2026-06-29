import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Dokumentacija",
  description:
    "Tehnička i sigurnosno-tehnička dokumentacija za proizvode iz ponude Carsystem i R-M Inđija.",
  alternates: { canonical: "/preview/dokumentacija" },
};

export default function DocumentationPage() {
  const productsWithDocs = getAllProducts().filter(
    (p) => p.documents.length > 0
  );

  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Dokumentacija
      </h1>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground">
        Tehnički listovi i sigurnosno-tehnička dokumentacija za proizvode iz
        ponude. Za dokumentaciju koja nije navedena, kontaktirajte tehničku
        podršku.
      </p>

      <div className="mt-10 flex flex-col gap-3">
        {productsWithDocs.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h2 className="text-base font-semibold text-foreground">
              {product.name}
            </h2>
            <ul className="mt-2 flex flex-wrap gap-4">
              {product.documents.map((doc) => (
                <li key={doc.url}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    {doc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
