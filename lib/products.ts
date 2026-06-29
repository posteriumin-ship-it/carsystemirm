import { products } from "@/data/products";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import type { Brand, Category, Product } from "@/types/product";

/**
 * Data-access layer for the catalog.
 *
 * Every component/page must import from THIS file, never from `data/*.ts`
 * directly. That is the only rule that makes the backend swap painless:
 *
 *   BACKEND MIGRATION POINT — when an API/database exists, change the
 *   function bodies below to `await fetch(...)` / ORM calls and make the
 *   functions async (Next.js Server Components support async data fetching
 *   natively). No component code needs to change.
 *
 * All functions are synchronous today because the source is an in-memory
 * array; keep call sites written as if they could become async (e.g. call
 * them from Server Components, avoid using them in places that can't await)
 * to keep the future migration mechanical.
 */

function sortByOrder(a: Product, b: Product) {
  return a.order - b.order;
}

export function getAllProducts(): Product[] {
  return [...products].sort(sortByOrder);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brand === brandSlug).sort(sortByOrder);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug).sort(sortByOrder);
}

export function getFeaturedProducts(limit?: number): Product[] {
  const featured = products.filter((p) => p.featured).sort(sortByOrder);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  products.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter((p) => p.tags.includes(tag)).sort(sortByOrder);
}

/**
 * Client-side search across name, short description and tags.
 * Intentionally simple substring matching — fine for a few hundred/thousand
 * products held in memory. Replace with a real search index/service later
 * if the catalog grows large enough to need it.
 */
export function searchProducts(query: string, pool: Product[] = products): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [...pool].sort(sortByOrder);

  return pool
    .filter((p) => {
      const haystack = [p.name, p.shortDescription, ...p.tags].join(" ").toLowerCase();
      return haystack.includes(q);
    })
    .sort(sortByOrder);
}

// --- Brands -----------------------------------------------------------

export function getAllBrands(): Brand[] {
  return [...brands];
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

// --- Categories ---------------------------------------------------------

export function getAllCategories(): Category[] {
  return [...categories];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
