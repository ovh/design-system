import { type DependencyList, useEffect, useState } from 'react';

/* Resolves a lazy loader into its value: undefined while the load is in
   flight (or when there is no loader), reset whenever deps change. A rejected
   load rethrows from the state updater so it surfaces on the router's
   errorElement instead of an eternal skeleton. */
function useAsyncValue<T>(load: (() => Promise<T>) | undefined, deps: DependencyList): T | undefined {
  const [value, setValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    setValue(undefined);
    if (!load) {
      return undefined;
    }
    let active = true;
    load().then((loaded) => {
      if (active) {
        // Updater form: never call a loaded value that happens to be a function.
        setValue(() => loaded);
      }
    }).catch((error: unknown) => {
      if (active) {
        setValue(() => {
          throw error;
        });
      }
    });
    return () => {
      active = false;
    };
    // The load identity is governed by the caller-provided deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return value;
}

export { useAsyncValue };
