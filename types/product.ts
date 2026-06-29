/**
 * Core domain types for the public catalog.
 *
 * These types are intentionally backend-agnostic: they describe the shape of
 * data the UI consumes, not how it is stored. Today the data comes from a
 * static file (`data/products.ts`); later it can come from a database/API
 * behind `lib/products.ts` without changing these types or any component.
 */

export interface ProductDocument {
  /** Human-readable label, e.g. "Tehnički list (PDF)". */
  label: string;
  /** Path under /public, e.g. "/documents/rm-onyx-hd-tds.pdf". */
  url: string;
  /** Optional document kind for icons/filtering later (TDS, MSDS, certificate...). */
  type?: "tds" | "msds" | "certificate" | "other";
}

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Brand slug, references Brand.slug. */
  brand: string;
  /** Category slug, references Category.slug. */
  category: string;
  shortDescription: string;
  description: string;
  /** Primary product image. */
  image: ProductImage;
  /** Additional gallery images (can be empty). */
  gallery: ProductImage[];
  documents: ProductDocument[];
  tags: string[];
  /** Show in featured sections (homepage, brand pages). */
  featured: boolean;
  /** Manual sort order within a category/listing; lower shows first. */
  order: number;
  seoTitle?: string;
  seoDescription?: string;
}
