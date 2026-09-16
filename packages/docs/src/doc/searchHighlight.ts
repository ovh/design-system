/* Flash-highlights the searched terms on the page a palette hit lands on.
   Built on the CSS Custom Highlight API: ranges are painted by the browser
   (::highlight in doc.css) without touching the DOM React rendered — no
   wrapper elements, no reconciliation risk. No-op where unsupported. */

const HIGHLIGHT_NAME = 'ods-search';
const CLEAR_AFTER_MS = 2600;
const MAX_RANGES = 150;

function supported(): boolean {
  return typeof CSS !== 'undefined' && 'highlights' in CSS;
}

function collectRanges(container: HTMLElement, terms: string[]): Range[] {
  const ranges: Range[] = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node && ranges.length < MAX_RANGES; node = walker.nextNode()) {
    const text = node.textContent?.toLowerCase();
    if (!text) {
      continue;
    }
    for (const term of terms) {
      for (let at = text.indexOf(term); at >= 0 && ranges.length < MAX_RANGES; at = text.indexOf(term, at + term.length)) {
        const range = new Range();
        range.setStart(node, at);
        range.setEnd(node, at + term.length);
        ranges.push(range);
      }
    }
  }
  return ranges;
}

/* Returns the cleanup callback (also run automatically after the delay). */
function flashSearchTerms(container: HTMLElement, terms: string[]): () => void {
  if (!supported() || terms.length === 0) {
    return () => { /* unsupported: the scroll alone locates the section */ };
  }
  const ranges = collectRanges(container, terms.map((term) => term.toLowerCase()));
  if (ranges.length === 0) {
    return () => { /* nothing to paint */ };
  }
  CSS.highlights.set(HIGHLIGHT_NAME, new Highlight(...ranges));
  const timer = window.setTimeout(() => CSS.highlights.delete(HIGHLIGHT_NAME), CLEAR_AFTER_MS);
  return () => {
    window.clearTimeout(timer);
    CSS.highlights.delete(HIGHLIGHT_NAME);
  };
}

export { flashSearchTerms };
