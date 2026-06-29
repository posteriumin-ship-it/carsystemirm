import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Carsystem i R-M Inđija — profesionalni automobilski refinish program i partnerska mreža u Srbiji.",
  alternates: { canonical: "/preview/o-nama" },
};

export default function AboutPage() {
  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        O nama
      </h1>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          Carsystem i R-M Inđija d.o.o. okuplja profesionalni refinish program
          i partnersku mrežu prodavnica u Srbiji, sa fokusom na kvalitet,
          tehničku podršku i preciznost u radu sa karoserijskim i lakirerskim
          radionicama.
        </p>
        <p>
          Naš cilj je da krajnjim korisnicima i partnerskim radionicama
          obezbedimo pristup proverenim brendovima u ponudi, jasnim
          tehničkim informacijama i brzoj podršci, bez obzira na to gde se u
          Srbiji nalaze.
        </p>
        <p>
          Sadržaj ove stranice će biti dopunjen finalnim, odobrenim tekstom o
          firmi, timu i partnerskoj mreži.
        </p>
      </div>
    </Section>
  );
}
