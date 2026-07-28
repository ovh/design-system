import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';

/* The snippet travels in the URL (?code=). LZ-string keeps shareable links
   short instead of a raw percent-encoded dump. */
const encodeSnippet = (code: string): string => compressToEncodedURIComponent(code);

const decodeSnippet = (param: string | null): string | undefined => {
  if (!param) {
    return undefined;
  }
  return decompressFromEncodedURIComponent(param) || undefined;
};

export { decodeSnippet, encodeSnippet };
