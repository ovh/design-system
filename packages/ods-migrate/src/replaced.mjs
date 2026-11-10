import { attributeText } from './shared.mjs';

/*
 * A removed component that v20 replaces by another one (mapping `replacedBy`): `<Switch>` written with
 * its `<SwitchItem>`s becomes `<Tabs variant="switch">`, a `<TabList>` around its items, each item a
 * `<Tab>`. The codemod and the lint rule describe the element with plain ranges (each from its own
 * syntax tree) and apply the edits planned here, so both write the same text.
 *
 * A range is { start, end } (character offsets). A tag is { start, end, name: range, attributes },
 * an attribute { name, start, end, text } (`name` null for a spread).
 */

const lineStartOf = (source, index) => source.lastIndexOf('\n', index - 1) + 1;
const indentOf = (source, index) => source.slice(lineStartOf(source, index)).match(/^[ \t]*/)[0];
const startsLine = (source, index) => /^[ \t]*$/.test(source.slice(lineStartOf(source, index), index));

/**
 * The edits that replace one element, or `{ blocked }` when its shape is not one ods-migrate rewrites
 * (the element keeps its marker).
 *
 * - `element`: { opening: tag, closing: { start, name: range } }
 * - `items`: the parts of this element (`<SwitchItem>`, `<Switch.Item>`), at any depth but not inside
 *   another element of the same component: [{ opening: tag, closingName: range | null, to }] (`to`: the local name of the v20 part)
 * - `literals`: the string and template literals inside the element (their lines are not re-indented)
 * - `names`: { element, wrap }, the local names of the v20 element and of its wrapper
 */
function planReplacement({ source, element, items, literals, names, replacement }) {
  const eol = source.includes('\r\n') ? '\r\n' : '\n';
  const { opening, closing } = element;
  const byName = new Map(opening.attributes.filter((attribute) => attribute.name).map((attribute) => [attribute.name, attribute]));
  const spread = opening.attributes.some((attribute) => attribute.name === null);
  // Props of the v19 element that each v20 part takes instead (`disabled`: Tabs has none, each Tab has one).
  const moved = (replacement.moveToParts ?? []).map((name) => byName.get(name)).filter(Boolean);
  if (items.length === 0) {
    return { blocked: 'items' };
  }
  // An item that sets its own value of a moved prop: the two combined (`disabled` of the Switch or of the item) are written by hand.
  if (items.some((item) => item.opening.attributes.some((attribute) => moved.some((prop) => prop.name === attribute.name)))) {
    return { blocked: 'moved' };
  }

  const edits = [];
  const insert = (index, text) => edits.push({ end: index, start: index, text });
  // The children of an element whose tags open and close their own lines are re-indented inside the wrapper.
  const multiline = /^[ \t]*\r?\n/.test(source.slice(opening.end)) && startsLine(source, closing.start) && lineStartOf(source, closing.start) > opening.end;

  // Attributes added after the last attribute kept, on a line of their own when that one is.
  const append = (tag, texts, skipped, shift) => {
    const kept = tag.attributes.filter((attribute) => !skipped.includes(attribute));
    const anchor = kept.at(-1) ?? tag.name;
    const ownLine = kept.length > 0 && startsLine(source, anchor.start) && source.slice(tag.start, anchor.start).includes('\n');
    insert(anchor.end, texts.map((text) => (ownLine ? `${eol}${indentOf(source, anchor.start)}${shift}${text}` : ` ${text}`)).join(''));
  };

  edits.push({ end: opening.name.end, start: opening.name.start, text: names.element });
  edits.push({ end: closing.name.end, start: closing.name.start, text: names.element });
  for (const attribute of moved) {
    const index = opening.attributes.indexOf(attribute);
    const from = index > 0 ? opening.attributes[index - 1].end : opening.name.end;
    // A comment between the previous attribute and this one stays: only this attribute goes, with its
    // line when it is alone on it.
    if (/\/\/|\/\*/.test(source.slice(from, attribute.start))) {
      const lineStart = lineStartOf(source, attribute.start);
      const alone = startsLine(source, attribute.start) && /^[ \t]*(\r?\n|$)/.test(source.slice(attribute.end));
      const after = source.slice(attribute.end).match(/^[ \t]*/)[0].length;
      edits.push({ end: attribute.end + after, start: alone ? lineStart - (source[lineStart - 2] === '\r' ? 2 : 1) : attribute.start, text: '' });
      continue;
    }
    edits.push({ end: attribute.end, start: from, text: '' });
  }
  const added = Object.entries(replacement.add ?? {}).filter(([name]) => !byName.has(name)).map(([name, value]) => attributeText(name, value));
  if (added.length > 0) {
    append(opening, added, moved, '');
  }

  for (const item of items) {
    edits.push({ end: item.opening.name.end, start: item.opening.name.start, text: item.to });
    if (item.closingName) {
      edits.push({ end: item.closingName.end, start: item.closingName.start, text: item.to });
    }
    if (moved.length > 0) {
      append(item.opening, moved.map((attribute) => attribute.text), [], multiline ? '  ' : '');
    }
  }

  if (multiline) {
    const base = indentOf(source, closing.start);
    insert(opening.end, `${eol}${base}  <${names.wrap}>`);
    const last = lineStartOf(source, closing.start);
    for (let index = source.indexOf('\n', opening.end) + 1; index > 0 && index < last; index = source.indexOf('\n', index) + 1) {
      const end = source.indexOf('\n', index);
      if (/^[ \t\r]*$/.test(source.slice(index, end)) || literals.some((literal) => literal.start < index && index < literal.end)) {
        continue;
      }
      insert(index, '  ');
    }
    insert(closing.start, `  </${names.wrap}>${eol}${base}`);
  } else {
    insert(opening.end, `<${names.wrap}>`);
    insert(closing.start, `</${names.wrap}>`);
  }

  // Points to check: valid v20 code, that may not do what the page did.
  const notes = [];
  const absent = replacement.whenAbsent;
  if (absent && !spread && !absent.unless.some((name) => byName.has(name))) {
    notes.push(absent.note);
  }
  if (spread && replacement.moveToParts?.length) {
    notes.push(`if the object passed here with {...} holds ${replacement.moveToParts.join(' or ')}, set it on each <${Object.values(replacement.parts)[0]}> instead: <${replacement.element}> does not take it`);
  }
  return { edits, notes };
}

/** The v20 parts a replacement imports, in order: the element, its wrapper, the parts of its items. */
const replacementParts = (replacement) => [...new Set([replacement.element, replacement.wrap, ...Object.values(replacement.parts ?? {})].filter(Boolean))];

export { planReplacement, replacementParts };
