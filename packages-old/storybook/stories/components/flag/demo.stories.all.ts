import { ODS_FLAG_ISO_CODES } from '@ovhcloud/ods-components';
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

const flagTemplate = (iso:string) => html`
  <span class='flag-block'>
    <osds-flag iso='${iso}' lazy='true' asset-path='flags/'></osds-flag>
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
  ${repeat(ODS_FLAG_ISO_CODES, (iso: string) => flagTemplate(iso))}
</div>
`;

export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
