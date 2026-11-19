import { useCallback, useMemo, useSyncExternalStore } from 'react';

/* Whether a media query matches, kept in sync with the viewport. The pre-rendered HTML knows no
   viewport: it holds the wide layout (false), which hydration renders first before switching. */
function useMediaQuery(query: string): boolean {
  // One list per query, read and watched alike. Never read on the server: the snapshot below is.
  const media = useMemo(() => (typeof window === 'undefined' ? null : window.matchMedia(query)), [query]);
  const subscribe = useCallback((onChange: () => void) => {
    media?.addEventListener('change', onChange);
    return () => media?.removeEventListener('change', onChange);
  }, [media]);
  return useSyncExternalStore(subscribe, () => media?.matches ?? false, () => false);
}

export { useMediaQuery };
