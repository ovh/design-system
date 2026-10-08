/* Heading id scheme, shared by the rendered headings (DocComponents,
   TechnicalSpecification) and the build-time search index (vite-plugin-llms):
   a palette hit's `#slug` therefore always lands on the rendered heading. */
const slugify = (label: string): string => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export { slugify };
