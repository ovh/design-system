import odsRecipeJson from '@ovhcloud/ods-recipes/json';
import Markdown from 'markdown-to-jsx';
import { Children, type ReactNode, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { flattenPages } from '../../../nav/model';
import { Link } from '../../../ods';
import { DocArticle } from '../../DocArticle';
import { BestPractices } from '../../DocComponents';
import { Heading } from '../../Heading';
import { type Recipe, RecipePreview, RecipeSource } from './RecipeCard';
import styles from './recipePage.module.css';

const COMPONENT_PAGES = flattenPages().filter((page) => page.kind === 'component');

/* "ClipboardTrigger" belongs to the page whose PascalCase title is its longest prefix ("Clipboard").
   Types and constants (BUTTON_SIZE, type Foo) are not components. */
const componentPagesOf = (names: string[]): typeof COMPONENT_PAGES => {
  const pages = names
    .filter((name) => !name.startsWith('type ') && !/^[A-Z0-9_]+$/.test(name))
    .map((name) => COMPONENT_PAGES
      .filter((page) => name.startsWith(page.title.replace(/\s+/g, '')))
      .sort((a, b) => b.title.length - a.title.length)[0])
    .filter(Boolean);
  return [...new Set(pages)].sort((a, b) => a.title.localeCompare(b.title));
};

const textOf = (children: ReactNode): string => Children.toArray(children).map((child) => (typeof child === 'string' ? child : '')).join('');

/* The README's own "# Title" repeats the page title, and its sections nest one level below the
   page's "Overview" heading. */
const README_OVERRIDES = {
  h1: () => null,
  h2: ({ children }: { children?: ReactNode }) => <Heading label={ textOf(children) } level={ 3 } />,
  h3: ({ children }: { children?: ReactNode }) => <Heading label={ textOf(children) } level={ 4 } />,
};

interface ReadmeParts {
  after: string;
  before: string;
  donts: string[];
  dos: string[];
}

/* A README's "## Do's & don'ts" section (with its "### Do" and "### Don't" lists) is shown like the
   component specs show theirs: two columns, not plain Markdown. Returns null when it has none. */
const splitDosDonts = (readme: string): ReadmeParts | null => {
  const start = /^## +Do'?s +& +Don'?ts? *$/im.exec(readme);
  if (!start) {
    return null;
  }
  const rest = readme.slice(start.index + start[0].length);
  const end = rest.search(/^## /m);
  const block = end === -1 ? rest : rest.slice(0, end);
  const itemsAfter = (title: RegExp): string[] => {
    const heading = new RegExp(`^### +${title.source} *$`, 'im').exec(block);
    if (!heading) {
      return [];
    }
    const section = block.slice(heading.index + heading[0].length);
    const next = section.search(/^### /m);
    return (next === -1 ? section : section.slice(0, next)).split('\n').filter((line) => /^\s*- /.test(line)).map((line) => line.trim());
  };
  const dos = itemsAfter(/Do/);
  const donts = itemsAfter(/Don'?t/);
  if (!dos.length && !donts.length) {
    return null;
  }
  return { after: end === -1 ? '' : rest.slice(end), before: readme.slice(0, start.index), donts, dos };
};

/* Placeholder READMEs ("TODO") say nothing: the page behaves as if there were none. */
const hasContent = (readme: string): boolean => /\S/.test(readme.replace(/^#.*$/gm, '').replace(/\bTODO\b/gi, ''));

/* The one-line summary shown above the preview, like the intro line of a component page: the first
   sentence of the paragraph right under the README's title (recipes carry no description of their
   own). It leaves the Overview (all of the paragraph, or just the sentence when the paragraph goes
   on) so the text is not said twice. */
const summaryOf = (readme: string): { readme: string, summary: string } => {
  if (!hasContent(readme)) {
    return { readme: '', summary: '' };
  }
  const lines = readme.split('\n');
  const first = lines.findIndex((line, at) => at > 0 && line.trim() !== '' && !/^(#|-|\||```)/.test(line.trim()));
  if (first === -1) {
    return { readme, summary: '' };
  }
  let last = first;
  while (last + 1 < lines.length && lines[last + 1].trim() !== '') {
    last += 1;
  }
  const paragraph = lines.slice(first, last + 1).join(' ').replace(/\s+/g, ' ').trim();
  const sentence = /^(.+?[.!?])(?:\s+(.*))?$/.exec(paragraph);
  const summary = sentence?.[1] ?? paragraph;
  const rest = sentence?.[2]?.trim() ?? '';
  const previous = lines.slice(0, first).reverse().find((line) => line.trim() !== '') ?? '';
  // A paragraph under a sub-heading ("### Information") describes that section, not the recipe.
  if (!/^# /.test(previous)) {
    return { readme, summary: '' };
  }
  return { readme: [...lines.slice(0, first), ...(rest ? [rest] : []), ...lines.slice(last + 1)].join('\n'), summary };
};

/* Bolds the key words of a recipe's prose, as the component pages do: the recipe's own name and the
   ODS components it names. Code spans and already-bold text are left alone. */
const emphasize = (markdown: string, keywords: string[]): string => {
  const escaped = [...new Set(keywords)].filter(Boolean).sort((a, b) => b.length - a.length).map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (!escaped.length) {
    return markdown;
  }
  const pattern = new RegExp(`\\b(${escaped.join('|')})(s?)\\b`, 'g');
  return markdown
    .split('\n')
    .map((line) => (/^\s*(#|\||```)/.test(line)
      ? line
      : line.split(/(`[^`]*`|\*\*[^*]+\*\*)/).map((part, at) => (at % 2 ? part : part.replace(pattern, '**$1$2**'))).join('')))
    .join('\n');
};

/* A recipe as a full documentation page, laid out like a component page: a one-line summary, the live
   preview, the ODS components it is built from, the README as overview, and the source. */
const RecipePage = ({ recipeKey }: { recipeKey: string }) => {
  const recipe = (odsRecipeJson.component as Record<string, Recipe>)[recipeKey];
  const components = useMemo(() => componentPagesOf(recipe?.odsComponents ?? []), [recipe]);

  if (!recipe) {
    return null;
  }

  const { readme, summary } = summaryOf((recipe.source as unknown as Record<string, string>)['README.md'] ?? '');
  const parts = splitDosDonts(readme);
  const keywords = [recipe.name, ...components.map((page) => page.title)];
  const prose = (markdown: string) => <Markdown options={{ overrides: README_OVERRIDES }}>{ emphasize(markdown, keywords) }</Markdown>;

  return (
    <DocArticle>
      { summary && <p><em><Markdown options={{ forceInline: true }}>{ emphasize(summary, keywords) }</Markdown></em></p> }

      <div className={ styles['recipe-page__block'] }>
        <RecipePreview recipe={ recipe } />
      </div>

      { components.length > 0 && (
        <>
          <Heading label="Components Used" level={ 2 } />
          <ul className={ styles['recipe-page__components'] }>
            { components.map((page) => (
              <li key={ page.id }><Link as={ RouterLink } to={ page.path }>{ page.title }</Link></li>
            )) }
          </ul>
        </>
      ) }

      { hasContent(readme) && (
        <>
          <Heading label="Overview" level={ 2 } />
          { parts ? (
            <>
              { prose(parts.before) }
              <Heading label="Dos & Don'ts" level={ 3 } />
              <BestPractices donts={ parts.donts } dos={ parts.dos } />
              { prose(parts.after) }
            </>
          ) : prose(readme) }
        </>
      ) }

      <Heading label="Source code" level={ 2 } />
      <div className={ styles['recipe-page__block'] }>
        <RecipeSource recipe={ recipe } />
      </div>
    </DocArticle>
  );
};

export { RecipePage };
