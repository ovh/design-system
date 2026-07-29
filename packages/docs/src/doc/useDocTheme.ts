import { useEffect, useState } from 'react';

type DocTheme = 'dark' | 'light';

/* The active docs theme, driven by the body data-theme attribute that the
   shell ThemeSelect owns. Observed (not read once): code blocks re-highlight
   live when the user flips the theme. */
function useDocTheme(): DocTheme {
  const [theme, setTheme] = useState<DocTheme>(() => (document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'));

  useEffect(() => {
    const read = (): DocTheme => (document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    // Re-sync on attach: data-theme may have been set between the first render
    // and this effect, and that change would be missed by the observer.
    setTheme(read());
    const observer = new MutationObserver(() => setTheme(read()));
    observer.observe(document.body, { attributeFilter: ['data-theme'], attributes: true });
    return () => observer.disconnect();
  }, []);

  return theme;
}

export { useDocTheme, type DocTheme };
