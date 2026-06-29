import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Carsystem i R-M Inđija za upite o proizvodima, partnerskoj mreži ili tehničkoj podršci.",
  alternates: { canonical: "/preview/kontakt" },
};

export default function ContactPage() {
  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Kontakt
      </h1>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground">
        Pošaljite upit ili nas kontaktirajte direktno.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold text-foreground">
            Carsystem i R-M Inđija d.o.o.
          </h2>
          <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
            Inđija, Srbija
            <br />
            Email:{" "}
            <a href="mailto:info@carsystem-rm.rs" className="text-accent hover:underline">
              info@carsystem-rm.rs
            </a>
          </address>
        </div>
      </div>
    </Section>
  );
}
