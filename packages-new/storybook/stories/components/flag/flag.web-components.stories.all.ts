import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

const allFlagIsos = ['ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj',
  'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck',
  'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee',
  'eg', 'eh', 'er', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh',
  'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hn', 'hr', 'ht', 'hu', 'id', 'ie',
  'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz',
  'la', 'lb', 'lc', 'li', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml',
  'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng',
  'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt',
  'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl',
  'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm',
  'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'un', 'unia', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg',
  'vi', 'vn', 'vu', 'wf', 'ws', 'xk', 'ye', 'yt', 'za', 'zm'];

const flagTemplate = (iso:string) => html`
  <span class='flag-block'>
    <osds-flag iso='${iso}' lazy='true' asset-path='flags-4x3/'></osds-flag>
    ${iso}
  </span>
`;

// All flags
const TemplateAll = () => html`
<style>
  .flag-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    column-gap: .3em;
    row-gap: .3em;
  }
  .flag-container .flag-block {
    font-family: "Source Sans Pro", "Trebuchet MS", Arial, "Segoe UI", sans-serif;
    font-weight: bold;
    flex: 0 0 3em;
    text-align: center;
    padding: .5em;
  }
</style>
<div class='flag-container'>
  <span class='flag-block'>
    <osds-flag shadow></osds-flag>
    default
  </span>
  ${repeat(allFlagIsos, (iso) => flagTemplate(iso))}
</div>
`;

export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false }
};
