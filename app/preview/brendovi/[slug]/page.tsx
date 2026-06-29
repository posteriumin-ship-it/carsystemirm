import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getAllBrands, getBrandBySlug, getProductsByBrand } from "@/lib/products";

type BrandPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBrands().map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return {
    title: brand.seoTitle ?? brand.name,
    description: brand.seoDescription ?? brand.description,
    alternates: { canonical: `/preview/brendovi/${brand.slug}` },
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const products = getProductsByBrand(brand.slug);

  return (
    <Section>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="relative h-16 w-40 shrink-0">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            sizes="160px"
            className="object-contain object-left"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {brand.name}
          </h1>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            {brand.description}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <ProductGrid products={products} />
      </div>
    </Section>
  );
}
