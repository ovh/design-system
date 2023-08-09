import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

/**
 * This function generates the "Examples" template page with categories
 */
export default function generateExamples(categories) {
  return html`
  <style>
    :root {
      --width: fit-content;
    }
    .card-container {
      display: flex;
      gap: 2em;
      flex-flow: row wrap;
    }
    .card {
      display: inline-flex;
      width: 30%;
    }
    .card__inner {
      display: flex;
      flex-flow: column;
    }
    .code-snippet {
      font-size: .7em; 
      line-height: 1.6em;
    }
    .code-snippet__inner {
      display:inline-flex; 
      flex-flow: wrap;
    }
  </style>
  
  ${Object.entries(categories).map(([key, value]) => html`
    <osds-text level="heading" size="500" color="primary" hue="800">${key}</osds-text>
    <osds-divider separator></osds-divider>
    <span class="card-container">
      ${value.map(({title, template}) => html`
        <osds-tile class='card' variant="hollow">
          <span class='card__inner'>
            <osds-text level="heading" size="300" color="primary">${title}</osds-text>
            <osds-divider size="4"></osds-divider>
            ${unsafeHTML(template)}
            <osds-divider></osds-divider>
            <osds-code class="code-snippet">
              <osds-button slot="copy" title="copy text" tabindex="0" color="default" contrasted="" size="sm" type="button" variant="ghost" >
                <osds-icon contrasted name="copy" size="xs"></osds-icon>
              </osds-button>
              <span class="code-snippet__inner">
                ${unsafeHTML(Prism.highlight(template, Prism.languages.html))}
              </span>
            </osds-code>
          </span>   
        </osds-tile>
      `)}
    </span>
    <osds-divider></osds-divider>
  `)}
  `
}
