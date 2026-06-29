"use client";

import type { Brand, Category } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  brands: Brand[];
  categories: Category[];
  tags: string[];
  query: string;
  onQueryChange: (value: string) => void;
  selectedBrand: string | null;
  onBrandChange: (value: string | null) => void;
  selectedCategory: string | null;
  onCategoryChange: (value: string | null) => void;
  selectedTag: string | null;
  onTagChange: (value: string | null) => void;
}

export function ProductFilters({
  brands,
  categories,
  tags,
  query,
  onQueryChange,
  selectedBrand,
  onBrandChange,
  selectedCategory,
  onCategoryChange,
  selectedTag,
  onTagChange,
}: ProductFiltersProps) {
  return (
    <aside className="w-full shrink-0 lg:w-64" aria-label="Filteri proizvoda">
      <label htmlFor="product-search" className="text-sm font-semibold text-foreground">
        Pretraga
      </label>
      <input
        id="product-search"
        type="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Pretraži proizvode..."
        className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground"
      />

      <FilterGroup
        title="Brend"
        options={brands.map((b) => ({ value: b.slug, label: b.name }))}
        selected={selectedBrand}
        onChange={onBrandChange}
      />

      <FilterGroup
        title="Kategorija"
        options={categories.map((c) => ({ value: c.slug, label: c.name }))}
        selected={selectedCategory}
        onChange={onCategoryChange}
      />

      <FilterGroup
        title="Tagovi"
        options={tags.map((t) => ({ value: t, label: t }))}
        selected={selectedTag}
        onChange={onTagChange}
      />
    </aside>
  );
}

function FilterGroup({
  title,
  options,
  selected,
  onChange,
}: {
  title: string;
  options: { value: string; label: string }[];
  selected: string | null;
  onChange: (value: string | null) => void;
}) {
  return (
    <fieldset className="mt-6">
      <legend className="text-sm font-semibold text-foreground">{title}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        <FilterPill
          label="Sve"
          active={selected === null}
          onClick={() => onChange(null)}
        />
        {options.map((option) => (
          <FilterPill
            key={option.value}
            label={option.label}
            active={selected === option.value}
            onClick={() => onChange(option.value)}
          />
        ))}
      </div>
    </fieldset>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border bg-surface text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
