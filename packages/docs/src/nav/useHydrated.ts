import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/* False in the pre-rendered HTML and in the hydration render that has to match it, true from the
   render after: what only the browser can render (a demo frame, a value read from the URL or the
   storage) waits for it, and the first paint keeps the HTML the reader already sees. */
function useHydrated(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export { useHydrated };
