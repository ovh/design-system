import { type ColorVariable } from './colorParser';

const THEME_CLASS_NAME = 'ods-custom-theme';

function forEachSameOriginIframeInContainer(
  container: HTMLElement,
  cb: (iframe: HTMLIFrameElement, iframeDoc: Document) => void,
): void {
  container.querySelectorAll('iframe').forEach((iframe) => {
    if (!(iframe instanceof HTMLIFrameElement)) {
      return;
    }
    const apply = () => {
      try {
        const iframeDoc = iframe.contentDocument;
        if (!iframeDoc) {
          return;
        }
        cb(iframe, iframeDoc);
      } catch {
        // Ignore cross-origin iframes
      }
    };
    if (iframe.contentDocument?.readyState === 'complete') {
      apply();
    }
    iframe.addEventListener('load', apply, { once: true });
  });
}

export function applyCustomTheme(colors: ColorVariable[], containerId: string = 'theme-preview-container'): void {
  let styleElement = document.getElementById('ods-custom-theme-styles') as HTMLStyleElement;
  
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'ods-custom-theme-styles';
    document.head.appendChild(styleElement);
  }

  const cssProperties = colors
    .map(color => `  ${color.name}: ${color.value};`)
    .join('\n');

  const cssRule = `
#${containerId}.${THEME_CLASS_NAME},
#${containerId} .${THEME_CLASS_NAME} {
${cssProperties}
}`;

  styleElement.textContent = cssRule;

  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  forEachSameOriginIframeInContainer(container, (_iframe, iframeDoc) => {
    let iframeStyle = iframeDoc.getElementById('ods-custom-theme-styles') as HTMLStyleElement | null;
    if (!iframeStyle) {
      iframeStyle = iframeDoc.createElement('style');
      iframeStyle.id = 'ods-custom-theme-styles';
      iframeDoc.head.appendChild(iframeStyle);
    }
    const iframeRule = `
html.${THEME_CLASS_NAME},
body.${THEME_CLASS_NAME} {
${cssProperties}
}`;
    iframeStyle.textContent = iframeRule;
  });
}

export function enableCustomTheme(containerId: string = 'theme-preview-container'): void {
  const container = document.getElementById(containerId);
  if (container) {
    container.classList.add(THEME_CLASS_NAME);
  }

  if (container) {
    forEachSameOriginIframeInContainer(container, (_iframe, iframeDoc) => {
      iframeDoc.documentElement.classList.add(THEME_CLASS_NAME);
      iframeDoc.body?.classList.add(THEME_CLASS_NAME);
    });
  }
}

export function disableCustomTheme(containerId: string = 'theme-preview-container'): void {
  const container = document.getElementById(containerId);
  if (container) {
    container.classList.remove(THEME_CLASS_NAME);
    forEachSameOriginIframeInContainer(container, (_iframe, iframeDoc) => {
      iframeDoc.documentElement.classList.remove(THEME_CLASS_NAME);
      iframeDoc.body?.classList.remove(THEME_CLASS_NAME);
    });
  }
}

export function clearCustomTheme(containerId: string = 'theme-preview-container'): void {
  const styleElement = document.getElementById('ods-custom-theme-styles');
  if (styleElement) {
    styleElement.remove();
  }
  disableCustomTheme(containerId);
}
