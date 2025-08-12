import { OVERRIDES_STORAGE_KEY, OVERRIDES_STYLE_ID } from '../constants/themeConstants';

export function ensureOverridesStyle(): HTMLStyleElement {
  let styleEl = document.getElementById(OVERRIDES_STYLE_ID) as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = OVERRIDES_STYLE_ID;
    styleEl.setAttribute('data-ods', 'theme-overrides');
    document.head.appendChild(styleEl);
  }
  return styleEl;
}

export function overridesMapToCssText(overrides: Record<string, string>): string {
  const body = Object.entries(overrides).map(([k, v]) => `${k}: ${v};`).join('\n');
  return `:root{\n${body}\n}`;
}

export function applyOverrides(overrides: Record<string, string>): void {
  const styleEl = ensureOverridesStyle();
  try {
    if (styleEl.parentNode === document.head) {
      document.head.appendChild(styleEl);
    }
  } catch {}
  styleEl.textContent = overridesMapToCssText(overrides);
}

export function applyOverridesFromStorage(storageKey: string = OVERRIDES_STORAGE_KEY): void {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return;
    const overrides = JSON.parse(raw) as Record<string, string>;
    applyOverrides(overrides);
  } catch {
  }
}

export function clearOverrides(): void {
  const styleEl = ensureOverridesStyle();
  styleEl.textContent = '';
}


