"use client";

import { useMemo, useState } from "react";
import type { Brand, Category, Product } from "@/types/product";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";

/**
 * Client-side catalog: search + brand/category/tag filters over a product
 * list passed in as a prop. The list itself is fetched server-side (via
 * `lib/products.ts`) in the page component — this component only filters
 * the already-loaded data in the browser, which is fine for a few thousand
 * products. If the catalog grows much larger, move filtering server-side
 * (query params + server component) instead of in this client component.
 */
export function ProductCatalog({
  products,
  brands,
  categories,
  tags,
}: {
  products: Product[];
  brands: Brand[];
  categories: Category[];
  tags: string[];
}) {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (brand && p.brand !== brand) return false;
      if (category && p.category !== category) return false;
      if (tag && !p.tags.includes(tag)) return false;
      if (q) {
        const haystack = [p.name, p.shortDescription, ...p.tags]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [products, query, brand, category, tag]);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      <ProductFilters
        brands={brands}
        categories={categories}
        tags={tags}
        query={query}
        onQueryChange={setQuery}
        selectedBrand={brand}
        onBrandChange={setBrand}
        selectedCategory={category}
        onCategoryChange={setCategory}
        selectedTag={tag}
        onTagChange={setTag}
      />
      <div className="flex-1">
        <p className="mb-4 text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "proizvod" : "proizvoda"}
        </p>
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
