import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '@ovhcloud/ods-component-button';
import { defineCustomElements } from '@ovhcloud/ods-component-button/loader';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { extractNewArgTypes, extractNewStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();

const storyParams = {
  'General': [
    {
      name: 'color',
      defaultValue: OdsThemeColorIntent.default,
      options: Object.values(OdsThemeColorIntent),
    },
    {
      name: 'size',
      defaultValue: ODS_BUTTON_SIZE.md,
      options: Object.values(ODS_BUTTON_SIZE),
    },
    {
      name: 'variant',
      defaultValue: ODS_BUTTON_VARIANT.flat,
      options: Object.values(ODS_BUTTON_VARIANT),
    },
  ],
  'Slots': [
    {
      name: 'start',
    },
    {
      name: 'main',
    },
    {
      name: 'end',
    },
  ],
  'Misc': [
    {
      name: 'contrasted',
      defaultValue: false,
    },
    {
      name: 'disabled',
      defaultValue: false,
    },
    {
      name: 'inline',
      defaultValue: false,
    },
    {
      name: 'circle',
      defaultValue: false,
    }
  ],
  'Link': [
    {
      name: 'href'
    },
    {
      name: 'rel',
      options: Object.values(OdsHTMLAnchorElementRel),
    },
    {
      name: 'target',
      options: Object.values(OdsHTMLAnchorElementTarget),
    },
    {
      name: 'download'
    },
  ],
};

export default {
  title: 'UI Components/Button️ [atom]',
  id: 'button',
  argTypes: extractNewArgTypes(storyParams),
  args: extractNewStoryParams(storyParams),
};

export const WebComponent = (args: any) => html`
  <osds-button ...=${getTagAttributes(args)}>
    <span slot="start">${unsafeHTML(args.start)}</span>
    ${unsafeHTML(args.buttonContent || 'Button')}
    <span slot="end">${unsafeHTML(args.end)}</span>
  </osds-button>
`;
