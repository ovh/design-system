import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { APP_ROOT } from '../appBase';

/* The snippet travels in the URL (?code=). LZ-string keeps shareable links
   short instead of a raw percent-encoded dump. */
const encodeSnippet = (code: string): string => compressToEncodedURIComponent(code);

const decodeSnippet = (param: string | null): string | undefined => {
  if (!param) {
    return undefined;
  }
  return decompressFromEncodedURIComponent(param) || undefined;
};

/* The sandbox holding a snippet: its pre-rendered page (the folder, the host need not redirect),
   which drops the trailing slash once loaded. Read in the browser only: APP_ROOT has its origin there. */
const sandboxUrl = (code: string): string => `${new URL('tools/sandbox/', APP_ROOT).href}?code=${encodeSnippet(code)}`;

export { decodeSnippet, encodeSnippet, sandboxUrl };
