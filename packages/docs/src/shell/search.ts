import { APP_ROOT } from '../appBase';

/* Client side of the full-text search: the index is emitted at build time
   (dist/search-index.json, ~hundreds of KB) and only fetched on the first
   real query, so the palette costs nothing until someone actually types. */

interface SearchEntry {
  b: string; // plain-text body
  r: string; // app route
  s: string; // context label
  t: string; // page title
}

interface SearchHit {
  route: string;
  section: string;
  snippet: string;
  title: string;
}

let indexPromise: Promise<SearchEntry[]> | undefined;

function loadSearchIndex(): Promise<SearchEntry[]> {
  // A failed load (network error OR non-2xx answer) must not kill full-text
  // search for the whole session: forget the attempt so the next keystroke
  // retries.
  const forget = (): SearchEntry[] => {
    indexPromise = undefined;
    return [];
  };
  indexPromise ??= fetch(new URL('search-index.json', APP_ROOT))
    .then((res) => (res.ok ? res.json() as Promise<SearchEntry[]> : forget()))
    .catch(forget);
  return indexPromise;
}

/* Shared with the palette's term highlighting and hit navigation: if their
   tokenization diverged from the scoring's, the bolded terms would not be the
   matched ones. Accents are folded first, as the build-time index does
   (vite-plugin-llms.ts searchText): "modèle" still yields "modele". */
const tokenize = (query: string): string[] => query
  .normalize('NFD')
  .replace(/\p{M}/gu, '')
  .toLowerCase()
  .split(/[^a-z0-9]+/)
  .filter((term) => term.length >= 2);

function snippetAround(body: string, at: number): string {
  const start = Math.max(0, at - 40);
  const end = Math.min(body.length, at + 110);
  const raw = body.slice(start, end).trim();
  return `${start > 0 ? '…' : ''}${raw}${end < body.length ? '…' : ''}`;
}

/* Every term must appear (title or body); title hits dominate the ranking so
   "button" still puts the Button page first even though half the corpus
   mentions the word. When the strict pass finds nothing (typically a partly
   French query over the English corpus — "validation formulaire"), a second
   pass keeps the entries matching ANY term instead of returning an empty
   palette. */
function searchDocs(entries: SearchEntry[], query: string): SearchHit[] {
  const terms = tokenize(query);
  if (terms.length === 0) {
    return [];
  }
  const strict = rank(entries, terms, true);
  if (strict.length > 0) {
    return strict;
  }
  // Substring matching makes short terms pure noise in any-term mode ("de" is
  // inside "default", the FR stopwords "les"/"des" match nearly every entry):
  // the fallback only keeps discriminating terms of 4+ characters.
  const discriminating = terms.filter((term) => term.length >= 4);
  return discriminating.length > 0 ? rank(entries, discriminating, false) : [];
}

function rank(entries: SearchEntry[], terms: string[], requireAll: boolean): SearchHit[] {
  const hits: (SearchHit & { score: number })[] = [];
  for (const entry of entries) {
    const title = entry.t.toLowerCase();
    const body = entry.b.toLowerCase();
    let score = 0;
    let snippetAt = -1;
    let snippetTermLength = 0;
    let matched = 0;

    for (const term of terms) {
      const inTitle = title.includes(term);
      const at = body.indexOf(term);
      if (!inTitle && at < 0) {
        if (requireAll) {
          matched = 0;
          break;
        }
        continue;
      }
      matched += 1;
      // 20 > 5 (the body-count cap): one title hit outranks any body density.
      if (inTitle) {
        score += 20;
      }
      if (at >= 0) {
        score += Math.min(body.split(term).length - 1, 5);
        // Snippet around the longest matched term: "aria-describedby" splits
        // into [aria, describedby] and the long half locates the real subject.
        if (term.length > snippetTermLength) {
          snippetTermLength = term.length;
          snippetAt = at;
        }
      }
    }
    if (matched === 0) {
      continue;
    }
    hits.push({
      route: entry.r,
      score,
      section: entry.s,
      snippet: snippetAt >= 0 ? snippetAround(entry.b, snippetAt) : '',
      title: entry.t,
    });
  }

  hits.sort((a, b) => b.score - a.score);
  // Entries are per SECTION: without a cap, one dense page floods the top 8.
  const perPage = new Map<string, number>();
  const top: typeof hits = [];
  for (const hit of hits) {
    const pathname = hit.route.split('#')[0];
    const seen = perPage.get(pathname) ?? 0;
    if (seen < 2) {
      perPage.set(pathname, seen + 1);
      top.push(hit);
    }
    if (top.length === 8) {
      break;
    }
  }
  return top;
}

export { loadSearchIndex, searchDocs, type SearchHit, tokenize };
