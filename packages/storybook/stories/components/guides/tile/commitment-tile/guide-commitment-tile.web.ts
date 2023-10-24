import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { defineCustomElements } from '@ovhcloud/ods-components/content-addon/loader';
import { defineCustomElements as tileCustomElements } from '@ovhcloud/ods-components/tile/loader';
import { OlesIpsumGeneration, olesIpsum } from '@ovhcloud/ods-common-core';

defineCustomElements();
tileCustomElements();

/* story parameters  */
export const storyParams = {};

const Template = (args: any) => html`
  <style>
    .tile_container {
      width: 848px;
      color: var(--ods-color-primary-800);
    }

    .start {
      text-decoration: line-through;

    }

    .bottom {
      text-align: right;
    }
  </style>

  <osds-tile class="tile_container" size="sm">
    <span slot='start'><osds-text level="subtitle" size="xs" color="primary">${unsafeHTML(args.tileContent || olesIpsum(OlesIpsumGeneration.words, 2))}</osds-text></span>
    <span slot='end'>${unsafeHTML(args.contentAddon)}</span>
  </osds-tile>

`;

export const CommitmentTileStory = Template.bind({});
CommitmentTileStory.args = {
  contentAddon: '<osds-content-addon ...=${getTagAttributes(args)}>\n'
    + '  <span slot="start" class="start"><osds-text level="caption" size="xs" color="primary">+ XXXX,XX ¤</osds-text></span>\n'
    + '  <span slot="main"><osds-text level="subtitle" color="promotion">XXXX,XX ¤</osds-text></span>\n'
    + '  <span slot="bottom" class="bottom"><osds-text level="caption" size="xs" color="primary">ex.VAT / month</osds-text></span>\n'
    + '</osds-content-addon>\n',
};
