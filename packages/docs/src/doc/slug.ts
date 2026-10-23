/* Heading id scheme, shared by the rendered headings (DocComponents,
   TechnicalSpecification) and the build-time search index (vite-plugin-llms):
   a palette hit's `#slug` therefore always lands on the rendered heading. */
const slugify = (label: string): string => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/* A page can repeat a heading label ("Related Sources" under each section): in
   document order, the second occurrence of a slug gets "-2", the third "-3", so
   every anchor stays unique and stable. One instance per page. */
const createUniqueSlugs = (): ((slug: string) => string) => {
  const seen = new Map<string, number>();
  return (slug: string): string => {
    const count = (seen.get(slug) ?? 0) + 1;
    seen.set(slug, count);
    return count === 1 ? slug : `${slug}-${count}`;
  };
};

export { createUniqueSlugs, slugify };
