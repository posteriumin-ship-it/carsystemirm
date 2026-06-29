import type { Brand } from "@/types/product";

/**
 * Brand list. Add a new brand by appending an object here.
 * Logo files go in /public/images/brands/.
 */
export const brands: Brand[] = [
  {
    id: "brand-rm",
    slug: "rm",
    name: "R-M",
    logo: "/images/brands/rm-logo.svg",
    description:
      "Profesionalni refinish program za sve segmente automobilske industrije, sa fokusom na preciznost boje i efikasnost u radionici.",
    seoTitle: "R-M — brendovi u ponudi | Carsystem RM Inđija",
    seoDescription:
      "R-M profesionalni automobilski refinish program u ponudi kod Carsystem RM Inđija. Lakovi, baze i pratući materijali.",
  },
  {
    id: "brand-carsystem",
    slug: "carsystem",
    name: "Carsystem",
    logo: "/images/brands/carsystem-logo.svg",
    description:
      "Kompletan program proizvoda za pripremu, popravku i farbanje vozila, razvijen za profesionalnu karoserijsku i lakirersku radionicu.",
    seoTitle: "Carsystem — brendovi u ponudi | Carsystem RM Inđija",
    seoDescription:
      "Carsystem program proizvoda za karoserijske i lakirerske radionice, u ponudi kod Carsystem RM Inđija.",
  },
];
