import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import {
  getAllBrands,
  getAllCategories,
  getAllProducts,
  getAllTags,
} from "@/lib/products";

export const metadata: Metadata = {
  title: "Proizvodi",
  description:
    "Pregled profesionalnog refinish programa Carsystem i R-M Inđija — lakovi, baze, podloge i pribor za poliranje.",
  alternates: { canonical: "/preview/proizvodi" },
};

export default function ProductsPage() {
  const products = getAllProducts();
  const brands = getAllBrands();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Proizvodi
      </h1>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground">
        Kompletan profesionalni refinish program u ponudi kod Carsystem i R-M
        Inđija. Filtrirajte po brendu, kategoriji ili tagu.
      </p>

      <div className="mt-10">
        <ProductCatalog
          products={products}
          brands={brands}
          categories={categories}
          tags={tags}
        />
      </div>
    </Section>
  );
}
