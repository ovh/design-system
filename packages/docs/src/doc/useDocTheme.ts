import { useSyncExternalStore } from 'react';

type DocTheme = 'dark' | 'light';

const read = (): DocTheme => (document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.body, { attributeFilter: ['data-theme'], attributes: true });
  return () => observer.disconnect();
};

/* The active docs theme, driven by the body data-theme attribute that
   themeStyles.ts sets (ThemeMenu picks the scheme). Observed (not read once): code blocks re-highlight
   live when the user flips the theme. The pre-rendered HTML holds the light
   one. */
function useDocTheme(): DocTheme {
  return useSyncExternalStore(subscribe, read, () => 'light');
}

export { useDocTheme, type DocTheme };
