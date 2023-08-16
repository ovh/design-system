import { odsGetDefinedAttributes } from './ods-get-defined-attributes';
import { odsFormatTestName } from '../utils/ods-format-test-name';

/**
 * Create HTML container for test results
 * @param item - The HTML element to be used in a containter
 * @param attributesKeys - All item key attributes
 */
function odsCreateHTMLContainer(item: HTMLElement, attributesKeys: string[]): string {
  const attributes = odsGetDefinedAttributes(item, attributesKeys);

  // Create container
  const container = document.createElement('div');
  container.classList.add('container');
  attributes.contrasted ? container.classList.add('contrasted') : null;

  // Create label
  const label = document.createElement('p');
  label.classList.add('label');
  const code = document.createElement('code');
  code.innerHTML = odsFormatTestName(attributes);
  label.innerHTML = code.outerHTML;

  container.innerHTML = [label.outerHTML, item.outerHTML].join('');
  return container.outerHTML;
}

function odsCreatePageStyle(): HTMLStyleElement {
  const style = document.createElement('style');
  style.innerHTML = `
      .container {
        align-items: center;
        display: inline-flex;
        flex-flow: column;
        font-size: initial;
        gap: .5em;
        min-height: 6em;
        padding: 1em;
        text-align: center;
        width: clamp(10em, 15vw, 50em);
      }
      .container.contrasted {
        background: #333;
        color: white;
      }
      .label {
        margin: 0;
        font-size: .7em;
      }
    `;
  return style;
}

export {
  odsCreateHTMLContainer,
  odsCreatePageStyle
}
