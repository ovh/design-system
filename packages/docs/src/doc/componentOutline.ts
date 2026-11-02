import { createProcessor } from '@mdx-js/mdx';

interface OutlineHeading {
  label: string,
  level: number,
}

interface ComponentOutline {
  hasIdentityCard: boolean,
  headings: OutlineHeading[],
}

interface MdxNode {
  attributes?: { name?: string, type: string, value?: unknown }[],
  children?: MdxNode[],
  name?: string | null,
  type: string,
}

const processor = createProcessor();

function attribute(node: MdxNode, name: string): string | undefined {
  const value = node.attributes?.find((attr) => attr.type === 'mdxJsxAttribute' && attr.name === name)?.value;
  if (typeof value === 'string') {
    return value;
  }
  // An expression value, such as level={ 2 }: its source.
  return (value as { value?: string } | undefined)?.value?.trim();
}

/* The <Heading> and <IdentityCard> elements a component page renders, read from its MDX tree:
   code blocks (in a list or a blockquote too) and MDX comments are nodes of their own, so a
   heading written inside one is not counted. */
function componentOutline(mdx: string): ComponentOutline {
  const outline: ComponentOutline = { hasIdentityCard: false, headings: [] };
  const visit = (node: MdxNode) => {
    if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
      if (node.name === 'IdentityCard') {
        outline.hasIdentityCard = true;
      }
      const label = node.name === 'Heading' ? attribute(node, 'label') : undefined;
      if (label) {
        outline.headings.push({ label, level: Number(attribute(node, 'level')) });
      }
    }
    node.children?.forEach(visit);
  };
  visit(processor.parse(mdx) as MdxNode);
  return outline;
}

export { type ComponentOutline, componentOutline };
