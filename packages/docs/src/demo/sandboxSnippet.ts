/* Wraps an extracted story source into a self-contained sandbox program.
   The source shape varies with how the story was authored:
   - a JSX expression (object story with an expression render) → returned as-is;
   - a braced function body with hooks (`{ const [x] = useState(); return … }`)
     → becomes Demo's body;
   - a full function (`() => …` / `function …`) → assigned then exported.
   Pure module: the app (DemoCanvas) and the offline snippet audit
   (tests/snippets.mjs) must share this exact logic. */
function buildSandboxSnippet(source: string, imports?: string): string {
  const header = imports?.trim() || `import { } from '@ovhcloud/ods-react';`;
  const body = source.trim();

  if (body.startsWith('<')) {
    return `${header}\n\nexport default function Demo() {\n  return (\n${body}\n  );\n}\n`;
  }
  if (body.startsWith('{') && /\breturn\b/.test(body)) {
    return `${header}\n\nexport default function Demo() ${body}\n`;
  }
  if (body.startsWith('(') || body.startsWith('function')) {
    return `${header}\n\nconst Demo = ${body};\n\nexport default Demo;\n`;
  }
  return `${header}\n\nexport default function Demo() {\n  return ${body};\n}\n`;
}

export { buildSandboxSnippet };
