/* Extracts each story's render body from the RAW CSF file — the single
   source of truth: the exact code that composeStories executes is the code
   shown under the demo and emitted to the llms output (R2). Pure string
   parsing (balanced braces, string literals and comments skipped), usable
   both in the browser and at build time. */

/* Prose apostrophes in single-line JSX text (Don't, l'utilisateur) must not
   open a string: a single quote directly preceded by a letter or digit reads
   as text, not as a delimiter. */
function opensString(source: string, quoteIndex: number): boolean {
  return !(source[quoteIndex] === "'" && /[A-Za-z0-9]/.test(source[quoteIndex - 1] ?? ''));
}

/* A '/' begins a regex literal (not a division) when the previous significant
   token cannot end an expression — the usual scanner heuristic. '<' and '>'
   are deliberately NOT triggers (JSX closing tags `</p>` and tag-then-text
   `<code>/path`); an arrow's '>' is recognized via its '=>' pair. */
function opensRegex(source: string, slashIndex: number): boolean {
  let i = slashIndex - 1;
  while (i >= 0 && /\s/.test(source[i])) {
    i -= 1;
  }
  if (i < 0 || /[(,=:[!&|?{;+\-*%~^]/.test(source[i]) || (source[i] === '>' && source[i - 1] === '=')) {
    return true;
  }
  const word = source.slice(0, i + 1).match(/[A-Za-z_$]+$/)?.[0];
  return !!word && ['case', 'delete', 'do', 'else', 'in', 'instanceof', 'new', 'of', 'return', 'typeof', 'void'].includes(word);
}

/* Returns the index of the regex literal's closing slash ('/' inside a […]
   class does not close it). Bails at end of line as a safety net. */
function skipRegex(source: string, slashIndex: number): number {
  let inClass = false;
  for (let i = slashIndex + 1; i < source.length; i++) {
    const char = source[i];
    if (char === '\\') {
      i += 1;
    } else if (char === '\n') {
      return i;
    } else if (char === '[') {
      inClass = true;
    } else if (char === ']') {
      inClass = false;
    } else if (char === '/' && !inClass) {
      return i;
    }
  }
  return source.length - 1;
}

/* Returns the index of the literal's closing quote. Template literals
   recurse into their ${…} expressions so an interpolated bracket or nested
   string cannot close the literal early. */
function skipString(source: string, quoteIndex: number): number {
  const quote = source[quoteIndex];
  for (let i = quoteIndex + 1; i < source.length; i++) {
    const char = source[i];
    if (char === '\\') {
      i += 1;
    } else if (char === quote || (quote !== '`' && char === '\n')) {
      return i;
    } else if (quote === '`' && char === '$' && source[i + 1] === '{') {
      let depth = 1;
      i += 2;
      while (i < source.length && depth > 0) {
        const c = source[i];
        if (c === '\\') {
          i += 1;
        } else if ((c === "'" || c === '"' || c === '`') && opensString(source, i)) {
          i = skipString(source, i);
        } else if (c === '{') {
          depth += 1;
        } else if (c === '}') {
          depth -= 1;
        }
        i += 1;
      }
      i -= 1;
    }
  }
  return source.length - 1;
}

/* Brackets inside strings, template literals and comments never count. A
   single depth counter still covers both bracket types: the compiler already
   guarantees the stories are well-formed, so they close in matching order. */
function sliceBalanced(source: string, openIndex: number): string {
  let depth = 0;
  for (let i = openIndex; i < source.length; i++) {
    const char = source[i];
    if ((char === "'" || char === '"' || char === '`') && opensString(source, i)) {
      i = skipString(source, i);
    } else if (char === '/' && source[i + 1] === '/') {
      const eol = source.indexOf('\n', i);
      i = eol === -1 ? source.length : eol;
    } else if (char === '/' && source[i + 1] === '*') {
      const end = source.indexOf('*/', i + 2);
      i = end === -1 ? source.length : end + 1;
    } else if (char === '/' && opensRegex(source, i)) {
      i = skipRegex(source, i);
    } else if (char === '{' || char === '(') {
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

/* Layout-only stories used by the old docs (AnatomyTech, Overview grids,
   ThemeGenerator fixtures) are not demos: both the Examples tab and the llms
   emission skip them, from this single list. */
const EXCLUDED_STORIES = new Set(['AnatomyTech', 'Overview', 'ThemeGenerator', 'Demo']);

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

export { EXCLUDED_STORIES, extractStorySources };
