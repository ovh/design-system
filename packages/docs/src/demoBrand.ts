/*
 * Demo switch for the "forest" brand.
 *
 * `?brand=forest` turns it on, `?brand=default` turns it off. The choice is kept in
 * localStorage so it survives navigation, since the router drops unknown query params.
 *
 * All it does is stamp `data-ods-brand` on the root element. That is the whole consumer-facing
 * mechanism: the brand stylesheet rebinds the tier-1 ramps under that attribute, and every role
 * token that goes through var() follows. Role tokens compiled to a frozen literal do not, which
 * is exactly what this demo is here to show.
 */
const STORAGE_KEY = 'ods-demo-brand';

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    // Safari private mode throws on access rather than returning null.
    return null;
  }
}

function applyDemoBrand(): void {
  const requested = new URLSearchParams(window.location.search).get('brand');

  if (requested) {
    try {
      localStorage.setItem(STORAGE_KEY, requested);
    } catch {
      // Not persisting is harmless: the param still applies for this page load.
    }
  }

  const brand = requested ?? readStored();

  if (brand && brand !== 'default') {
    document.documentElement.setAttribute('data-ods-brand', brand);
  } else {
    document.documentElement.removeAttribute('data-ods-brand');
  }
}

applyDemoBrand();

export {
  applyDemoBrand,
};
