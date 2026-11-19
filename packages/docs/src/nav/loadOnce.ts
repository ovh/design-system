import { type ComponentType, createElement, use } from 'react';

/* The lazy chunks of a page (its MDX, its stories, its typedoc data), loaded once per key and kept:
   the same promise on every render, and a page the reader comes back to renders at once. The key is
   a module-level value (a glob loader, a nav model loader): one made per render would load on
   every render. */
type Tracked<T> = Promise<T> & { reason?: unknown, status?: 'fulfilled' | 'rejected', value?: T };

const loads = new Map<unknown, Tracked<unknown>>();

function loadOnce<T>(key: unknown, load: () => Promise<T>): Promise<T> {
  let promise = loads.get(key) as Tracked<T> | undefined;
  if (!promise) {
    const loading: Tracked<T> = load();
    // A settled promise says so: use() then reads it without suspending. A page whose chunks were
    // loaded first (preloadRoute in routes.tsx) hydrates as its HTML is, where use() would suspend
    // once on a promise it has not seen, and show the skeleton for a frame.
    // A failed load is kept too: the page shows its error rather than load again on each render
    // (the browser keeps a failed module import anyway: a reload tries again).
    loading.then((value) => {
      loading.status = 'fulfilled';
      loading.value = value;
    }, (reason: unknown) => {
      loading.status = 'rejected';
      loading.reason = reason;
    });
    loads.set(key, loading);
    promise = loading;
  }
  return promise;
}

/* The loaded value: suspends the nearest Suspense boundary (its skeleton) while it loads, and
   hands a failed load to the router's errorElement. */
function useLoaded<T>(key: unknown, load: () => Promise<T>): T {
  return use(loadOnce(key, load));
}

const components = new Map<unknown, ComponentType>();

/* The default export of a lazily loaded module (an MDX page), read through useLoaded: React.lazy
   would suspend once even on a loaded module, and keep a failed load for good. */
function lazyOnce(key: unknown, load: () => Promise<unknown>): ComponentType {
  let component = components.get(key);
  if (!component) {
    component = function LazyOnce() {
      const { default: Content } = useLoaded(key, load as () => Promise<{ default: ComponentType }>);
      return createElement(Content);
    };
    components.set(key, component);
  }
  return component;
}

export { lazyOnce, loadOnce, useLoaded };
