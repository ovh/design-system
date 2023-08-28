import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-component-content-addon/loader';
import { defineCustomElements as tileCustomElements } from '@ovhcloud/ods-component-tile/loader';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';

defineCustomElements();
tileCustomElements();

/* story parameters  */
export const storyParams = {
  color: {
    category: 'General',
    options: ODS_THEME_COLOR_INTENTS,
    defaultValue: 'default',
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    options: ['horizontal', 'vertical'],
    defaultValue: 'vertical',
    control: { type: 'select' },
  },
  city: {
    category: 'Content',
    defaultValue: 'City'
  },
  country: {
    category: 'Content',
    defaultValue: 'Country'
  },
  info: {
    category: 'Content',
    defaultValue: 'Info'
  },
  iso: {
    category: 'Content',
    defaultValue: 'fr'
  },
};

const Template = (args: any) => html`
  <style>
  .location__content-vertical {
    display: grid;
    gap: 1em 0;
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
    grid-template-areas:
            "location__flag-wrapper"
            "location__text-wrapper";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 100%;
    text-align: center;
    width: 100%;
  }

  .location__content-horizontal {
      display: grid;
      gap: 0 1em;
      grid-auto-flow: row;
      grid-auto-rows: 1fr;
      grid-template-areas:
              "location__flag-wrapper location__text-wrapper";
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr;
      text-align: left;
      height: 100%;
      width: 100%;
  }

  .location__flag-wrapper {
      display: block;
      font-size: 0;
      grid-area: location__flag-wrapper;
      justify-self: center;
      align-self: center;
      min-width: var(--ods-size-02);
      max-width: 4rem;
      width: var(--ods-size-11);
  }

  .location__text-wrapper {
      display: grid;
      gap: 0;
      grid-area: location__text-wrapper;
      grid-auto-flow: row;
      grid-template-areas:
              "country"
              "city"
              "info";
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      place-content: center;

  }

  .location__text-country, .location__text-city {
      font-family: var(--ods-typography-heading-300-font-family);
      font-size: var(--ods-typography-heading-300-font-size);
      font-style: var(--ods-typography-heading-300-font-style);
      font-weight: var(--ods-typography-heading-300-font-weight);
      letter-spacing: var(--ods-typography-heading-300-letter-spacing);
      line-height: var(--ods-typography-heading-300-line-height);
  }

  .location__text-info {
      font-family: var(--ods-typography-heading-200-font-family);
      font-size: var(--ods-typography-heading-200-font-size);
      font-style: var(--ods-typography-heading-200-font-style);
      font-weight: var(--ods-typography-heading-200-font-weight);
      letter-spacing: var(--ods-typography-heading-200-letter-spacing);
      line-height: var(--ods-typography-heading-200-line-height);
  }
  .location__text-country {
      color: var(--ods-color-primary-800);
  }

  .location__text-city, .location__text-info {
      color: var(--ods-color-text-500);
  }

  </style>

  <osds-tile color="${args.color}">
    <div class="location__content-${args.variant}">
        <div class="location__flag-wrapper">
            <osds-flag iso="${args.iso}"></osds-flag>
        </div>
        <div class="location__text-wrapper">
            <span class="location__text-country">${args.country}</span>
            <span class="location__text-city">${args.city}</span>
            <span class="location__text-info">${args.info}</span>
        </div>
    </div>
  </osds-tile>
`;

export const LocationTileStory = Template.bind({});
