import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Edukacija",
  description:
    "Edukativni sadržaj o automobilskom refinish programu — saveti, tehnike i smernice za radionice.",
  alternates: { canonical: "/preview/edukacija" },
};

export default function EducationPage() {
  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Edukacija
      </h1>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground">
        Edukativni sadržaj za karoserijske i lakirerske radionice je u
        pripremi. Ovde će se kasnije objavljivati stručni tekstovi o izboru
        proizvoda, tehnikama rada i dobrim praksama u refinish programu.
      </p>
    </Section>
  );
}
