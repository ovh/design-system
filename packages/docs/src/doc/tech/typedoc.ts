/* A dependency-free reader for the typedoc JSON that ships with ods-react
   (packages/ods-react/src/components/<name>/documentation/<name>.json).
   Ported from the old Storybook helpers (typedoc.ts + docgen.ts) so the
   technical specification is built from static data — no __docgenInfo, no
   Storybook runtime, no typedoc package as a dependency. */

/* typedoc ReflectionKind values we care about. */
const KIND = {
  enum: 8,
  enumMember: 16,
  variable: 32,
  interface: 256,
  typeAlias: 2097152,
} as const;

/* The raw JSON nodes are loosely typed on purpose — mirroring the whole
   typedoc schema would be more noise than value. */
type Node = {
  name?: string;
  kind?: number;
  flags?: { isConst?: boolean; isOptional?: boolean };
  children?: Node[];
  type?: RawType;
  comment?: { summary?: Part[]; blockTags?: BlockTag[] };
  typeParameters?: { name: string; kind?: number }[];
};
type Part = { text?: string };
type BlockTag = { tag: string; content?: Part[] };
type RawType = {
  type?: string;
  name?: string;
  value?: unknown;
  types?: RawType[];
  elementType?: RawType;
  declaration?: Node & { signatures?: Signature[] };
  typeArguments?: RawType[];
  operator?: string;
  target?: RawType;
};
type Signature = { parameters?: Node[]; typeParameters?: { name: string }[]; type?: RawType };

interface PropRow {
  default: string;
  deprecated: boolean;
  description: string;
  name: string;
  optional: boolean;
  type: string;
}

interface ComponentSpec {
  name: string;
  props: PropRow[];
}

interface EnumSpec {
  deprecated: boolean;
  members: { name: string; value: string }[];
  name: string;
}

interface TechnicalSpec {
  components: ComponentSpec[];
  enums: EnumSpec[];
  interfaces: { name: string; props: { name: string; type: string }[] }[];
  unions: { name: string; value: string }[];
}

const TAG = { defaultValue: '@default-value', deprecated: '@deprecated', internal: '@internal', type: '@type' };
const tagRegExp = /(@[\w-]+)=?([^\s<]+<[^>]*>|[\w${} '.]+)?/gi;

function summaryText(comment?: Node['comment']): string {
  return (comment?.summary ?? []).map((part) => part.text ?? '').join('');
}

function extractTags(str: string): Map<string, string | undefined> {
  return [...str.matchAll(tagRegExp)].reduce((map, match) => {
    map.set(match[1], match[2]);
    return map;
  }, new Map<string, string | undefined>());
}

function stripTags(str: string): string {
  return str.replace(tagRegExp, '').replace(/\s+/g, ' ').trim();
}

function blockTag(comment: Node['comment'], tag: string): string | undefined {
  const found = comment?.blockTags?.find((block) => block.tag === tag);
  return found ? (found.content ?? []).map((part) => part.text ?? '').join('').trim() : undefined;
}

function sortByName<T extends { name: string }>(array: T[]): T[] {
  return [...array].sort((a, b) => a.name.localeCompare(b.name));
}

/* Render a typedoc type node as a readable string (unions, arrays, function
   signatures, generic references…). */
function typeToString(type?: RawType): string {
  if (!type) {
    return '';
  }
  if (!type.type && (type.name || type.value !== undefined)) {
    return type.name ?? String(type.value);
  }

  switch (type.type) {
    case 'array': {
      const element = type.elementType;
      if (element?.type === 'reflection') {
        const children = (element.declaration?.children ?? []).map((child) => `${child.name}: ${typeToString(child.type)}`);
        return `{ ${children.join(', ')} }[]`;
      }
      return `${typeToString(element)}[]`;
    }
    case 'typeOperator':
      return `${type.operator} ${typeToString(type.target)}`;
    case 'union':
      return (type.types ?? [])
        .slice()
        .sort((a, b) => String(a.type).localeCompare(String(b.type)))
        .map(typeToString)
        .join(' | ');
    case 'reflection': {
      const signature = type.declaration?.signatures?.[0];
      if (signature) {
        const params = (signature.parameters ?? []).map((param) => `${param.name}: ${typeToString(param.type)}`).join(', ');
        const generics = (signature.typeParameters ?? []).map((param) => param.name).join(', ');
        return `${generics ? `<${generics}>` : ''}(${params}) => ${typeToString(signature.type)}`;
      }
      return 'object';
    }
    case 'reference': {
      const args = (type.typeArguments ?? [])
        .map((arg) => (arg.type === 'literal' ? `'${arg.value}'` : arg.name ?? ''))
        .filter(Boolean)
        .join(', ');
      return args ? `${type.name}<${args}>` : type.name ?? '';
    }
    case 'literal':
      return type.value === null ? 'null' : typeof type.value === 'string' ? `'${type.value}'` : String(type.value);
    case 'intrinsic':
    default:
      return type.name ?? (type.value !== undefined ? String(type.value) : '');
  }
}

function filterByKind(children: Node[] | undefined, kinds: number[]): Node[] {
  return (children ?? []).filter((child) => child.kind !== undefined && kinds.includes(child.kind));
}

function declarationName(node: Node): string {
  const param = node.typeParameters?.[0];
  return param ? `${node.name}<${param.name}>` : node.name ?? '';
}

/* The *Prop interfaces become the component prop tables. */
function getComponentProps(root: Node): ComponentSpec[] {
  const specs = (root.children ?? [])
    .filter((node) => /Props?$/.test(node.name ?? ''))
    .map((node) => {
      const children = node.children ?? node.type?.declaration?.children ?? [];
      const props = children.map((child) => {
        const summary = summaryText(child.comment);
        const tags = extractTags(summary);
        return {
          default: blockTag(child.comment, TAG.defaultValue) ?? tags.get(TAG.defaultValue) ?? 'undefined',
          deprecated: !!child.comment?.blockTags?.some((block) => block.tag === TAG.deprecated),
          description: stripTags(summary) || '-',
          name: child.name ?? '',
          optional: !!child.flags?.isOptional,
          type: tags.get(TAG.type) ?? typeToString(child.type) ?? '',
        };
      });
      return { name: (node.name ?? '').replace(/Props?$/, ''), props: sortByName(props) };
    });
  return specs;
}

/* Enums, plus the "fake enums" (const objects used as enums, e.g. BUTTON_COLOR). */
function getEnums(root: Node): EnumSpec[] {
  const real = filterByKind(root.children, [KIND.enum]).map((node) => ({
    deprecated: !!node.comment?.blockTags?.some((block) => block.tag === TAG.deprecated),
    name: node.name ?? '',
    members: filterByKind(node.children, [KIND.enumMember]).map((member) => ({
      name: member.name ?? '',
      value: String((member.type as RawType)?.value ?? ''),
    })),
  }));
  const fake = filterByKind(root.children, [KIND.variable])
    .filter((node) => node.flags?.isConst && node.type?.type === 'reflection')
    .map((node) => ({
      deprecated: false,
      name: node.name ?? '',
      members: filterByKind(node.type?.declaration?.children, [KIND.enumMember]).map((member) => ({
        name: member.name ?? '',
        value: String((member.type as RawType)?.value ?? ''),
      })),
    }))
    .filter((node) => node.members.length > 0);

  return sortByName(real.concat(fake).map((item) => ({ ...item, members: sortByName(item.members) })));
}

function getInterfaces(root: Node): TechnicalSpec['interfaces'] {
  return sortByName(
    filterByKind(root.children, [KIND.interface, KIND.typeAlias])
      .filter((node) => !/Props?$/.test(node.name ?? ''))
      .filter((node) => node.type?.type !== 'templateLiteral' && node.type?.type !== 'union')
      .map((node) => ({
        name: declarationName(node),
        props: (node.children ?? []).map((child) => ({
          name: `${child.name}${child.flags?.isOptional ? '?' : ''}`,
          type: typeToString(child.type),
        })),
      })),
  );
}

function getUnions(root: Node): TechnicalSpec['unions'] {
  return sortByName(
    filterByKind(root.children, [KIND.typeAlias])
      .filter((node) => node.type?.type === 'union')
      .map((node) => ({
        name: declarationName(node),
        value: (node.type?.types ?? []).map((item) => item.name ?? `"${String(item.value)}"`).join(' | '),
      })),
  );
}

/* Put the root component (its Prop name matches the folder) first, the
   subcomponents after, alphabetically. */
function parseTechnicalSpec(root: Node, mainComponent: string): TechnicalSpec {
  const components = getComponentProps(root).sort((a, b) => {
    if (a.name.toLowerCase() === mainComponent) {
      return -1;
    }
    if (b.name.toLowerCase() === mainComponent) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });
  return { components, enums: getEnums(root), interfaces: getInterfaces(root), unions: getUnions(root) };
}

export { parseTechnicalSpec, type ComponentSpec, type PropRow, type TechnicalSpec };
