import type { Product } from "@/types/product";

/**
 * TEMPORARY DATA SOURCE.
 *
 * This array is the entire product catalog for now. A developer adds a new
 * product by appending an object below — no other file needs to change.
 *
 * BACKEND MIGRATION POINT:
 * When a backend/API exists, this file is replaced by a fetch call inside
 * `lib/products.ts` (see the functions there). No component imports this
 * file directly — they all go through `lib/products.ts`, so swapping the
 * data source is a one-file change.
 */
export const products: Product[] = [
  {
    id: "prod-rm-onyx-hd",
    slug: "rm-onyx-hd-bazni-lak",
    name: "R-M Onyx HD bazni lak",
    brand: "rm",
    category: "baze",
    shortDescription:
      "Bazni lak visoke pokrivnosti za brzu i preciznu izradu nijanse.",
    description:
      "R-M Onyx HD je bazni lak razvijen za profesionalne radionice kojima je potrebna velika pokrivnost uz minimalan broj slojeva. Sistem je usklađen sa R-M bazom podataka boja, što olakšava preciznu izradu nijanse na različitim tipovima vozila.",
    image: {
      url: "/images/products/placeholder-product.svg",
      alt: "R-M Onyx HD bazni lak — limenka",
    },
    gallery: [],
    documents: [
      {
        label: "Tehnički list (PDF)",
        url: "/documents/placeholder-tds.pdf",
        type: "tds",
      },
    ],
    tags: ["bazni lak", "visoka pokrivnost", "r-m"],
    featured: true,
    order: 1,
    seoTitle: "R-M Onyx HD bazni lak | Carsystem RM Inđija",
    seoDescription:
      "R-M Onyx HD bazni lak visoke pokrivnosti — profesionalni refinish program u ponudi kod Carsystem RM Inđija.",
  },
  {
    id: "prod-rm-clear-900",
    slug: "rm-clear-900-zavrsni-lak",
    name: "R-M Clear 900 završni lak",
    brand: "rm",
    category: "lakovi",
    shortDescription:
      "Visokokvalitetan završni lak za dugotrajan sjaj i otpornost.",
    description:
      "R-M Clear 900 je dvokomponentni završni lak koji obezbeđuje izuzetan sjaj i dugotrajnu zaštitu farbane površine. Pogodan je za rad u radionicama svih veličina, sa dobrim odnosom brzine sušenja i kvaliteta završne obrade.",
    image: {
      url: "/images/products/placeholder-product.svg",
      alt: "R-M Clear 900 završni lak — limenka",
    },
    gallery: [],
    documents: [
      {
        label: "Tehnički list (PDF)",
        url: "/documents/placeholder-tds.pdf",
        type: "tds",
      },
      {
        label: "Sigurnosno-tehnički list (PDF)",
        url: "/documents/placeholder-msds.pdf",
        type: "msds",
      },
    ],
    tags: ["završni lak", "sjaj", "r-m"],
    featured: true,
    order: 2,
    seoTitle: "R-M Clear 900 završni lak | Carsystem RM Inđija",
    seoDescription:
      "R-M Clear 900 dvokomponentni završni lak — profesionalni refinish program kod Carsystem RM Inđija.",
  },
  {
    id: "prod-carsystem-cs-primer",
    slug: "carsystem-cs-primer-podloga",
    name: "Carsystem CS Primer podloga",
    brand: "carsystem",
    category: "priprema-povrsine",
    shortDescription:
      "Univerzalna podloga za pripremu površine pre nanošenja baznog laka.",
    description:
      "Carsystem CS Primer je univerzalna podloga namenjena pripremi metalnih i plastičnih površina pre nanošenja baznog laka. Dobro punjenje i jednostavna obrada čine ga pogodnim za svakodnevnu upotrebu u karoserijskim radionicama.",
    image: {
      url: "/images/products/placeholder-product.svg",
      alt: "Carsystem CS Primer podloga — limenka",
    },
    gallery: [],
    documents: [
      {
        label: "Tehnički list (PDF)",
        url: "/documents/placeholder-tds.pdf",
        type: "tds",
      },
    ],
    tags: ["podloga", "priprema površine", "carsystem"],
    featured: true,
    order: 1,
    seoTitle: "Carsystem CS Primer podloga | Carsystem RM Inđija",
    seoDescription:
      "Carsystem CS Primer univerzalna podloga za pripremu površine — u ponudi kod Carsystem RM Inđija.",
  },
  {
    id: "prod-carsystem-polish-pro",
    slug: "carsystem-polish-pro-pasta",
    name: "Carsystem Polish Pro pasta za poliranje",
    brand: "carsystem",
    category: "poliranje",
    shortDescription:
      "Profesionalna pasta za poliranje i otklanjanje sitnih nepravilnosti.",
    description:
      "Carsystem Polish Pro je pasta za poliranje namenjena finalnoj doradi lakirane površine. Efikasno otklanja sitne nepravilnosti i holograme, vraćajući površini ravnomeran, dubok sjaj.",
    image: {
      url: "/images/products/placeholder-product.svg",
      alt: "Carsystem Polish Pro pasta za poliranje — ambalaža",
    },
    gallery: [],
    documents: [],
    tags: ["poliranje", "finalna obrada", "carsystem"],
    featured: false,
    order: 1,
    seoTitle: "Carsystem Polish Pro pasta za poliranje | Carsystem RM Inđija",
    seoDescription:
      "Carsystem Polish Pro profesionalna pasta za poliranje — u ponudi kod Carsystem RM Inđija.",
  },
];
