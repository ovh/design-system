import { useCallback, useMemo, useSyncExternalStore } from 'react';

/* Whether a media query matches, kept in sync with the viewport. Null in the pre-rendered HTML and in
   the hydration render that has to match it, since a server knows no viewport: what differs with the
   viewport renders in both forms until then, and a CSS media query on the same value shows the one
   that fits, so that nothing moves once the scripts know. A boolean at once where the app renders
   without hydrating (the dev server, a ?p= link). Test it with === true or !== false: !value would
   take null for false. */
function useMediaQuery(query: string): boolean | null {
  // One MediaQueryList per query, for the snapshot and the subscription; none on the server, where
  // the server snapshot answers.
  const media = useMemo(() => (typeof window === 'undefined' ? null : window.matchMedia(query)), [query]);
  const subscribe = useCallback((onChange: () => void) => {
    media?.addEventListener('change', onChange);
    return () => media?.removeEventListener('change', onChange);
  }, [media]);
  return useSyncExternalStore(subscribe, () => media?.matches ?? false, () => null);
}

export { useMediaQuery };
