/* Extracts each story's render body from the RAW CSF file — the single
   source of truth: the exact code that composeStories executes is the code
   shown under the demo and emitted to the llms output (R2). Pure string
   parsing (balanced braces), usable both in the browser and at build time. */

function sliceBalanced(source: string, openIndex: number): string {
  let depth = 0;
  for (let i = openIndex; i < source.length; i++) {
    const char = source[i];
    if (char === '{' || char === '(') {
      depth += 1;
    } else if (char === '}' || char === ')') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(openIndex, i + 1);
      }
    }
  }
  return source.slice(openIndex);
}

function dedent(code: string): string {
  const lines = code.split('\n');
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)![0].length);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(min)).join('\n').trim();
}

function extractStorySources(fileSource: string): Record<string, string> {
  const sources: Record<string, string> = {};
  const storyRe = /export const (\w+)(?::[^=]+)?=\s*(?:{|\()/g;
  let match: RegExpExecArray | null;

  while ((match = storyRe.exec(fileSource)) !== null) {
    const name = match[1];
    const openIndex = fileSource.indexOf(fileSource[match[0].length - 1] === '(' ? '(' : '{', match.index + match[0].length - 1);
    const block = sliceBalanced(fileSource, openIndex);

    // Object story with a render arrow: show the render body.
    const renderIndex = block.search(/render:\s*\([^)]*\)\s*=>\s*/);
    if (renderIndex !== -1) {
      const arrowEnd = block.indexOf('=>', renderIndex) + 2;
      const rest = block.slice(arrowEnd).replace(/^\s*/, '');
      const body = rest[0] === '(' || rest[0] === '{'
        ? sliceBalanced(block, arrowEnd + block.slice(arrowEnd).indexOf(rest[0]))
        : rest;
      const trimmed = body.replace(/^\(\n?/, '').replace(/\n?\s*\)$/, '');
      sources[name] = dedent(trimmed);
    } else {
      // Function story or object without render: show the whole block.
      sources[name] = dedent(block);
    }
  }
  return sources;
}

export { extractStorySources };
