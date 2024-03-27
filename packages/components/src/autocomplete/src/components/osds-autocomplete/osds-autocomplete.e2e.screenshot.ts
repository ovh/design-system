import type { OdsAutocompleteAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-autocomplete', () => {
  let page: E2EPage;
  let el: E2EElement;
  const baseAttribute = { ariaLabel: null, ariaLabelledby: '', clearable: false, defaultValue: '', disabled: false, error: false, icon: undefined, inline: false, minimumNumberOfCharacters: 0, name: undefined, opened: false, placeholder: '', required: false, value: '' };

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsAutocompleteAttribute>, html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsAutocompleteAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();

    await page.setContent(`
      <osds-autocomplete ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-autocomplete>
    `);
    el = await page.find('osds-autocomplete');
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));
  }

  const screenshotActions = [
    {
      action: (): void => {/* no action */},
      actionDescription: 'no action',
    },
    {
      action: (): Promise<void> => el.click(),
      actionDescription: 'surface visible',
    },
    {
      action: (): void => el.setProperty('disabled', true),
      actionDescription: 'disabled',
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async() => {
        await setup({
          html: `
            <osds-select-option value="FR">Bonjour</osds-select-option>
            <osds-select-option value="IT">Bongiorno</osds-select-option>
            <osds-select-option value="EN">Hello</osds-select-option>
          `,
        });
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-autocomplete') as HTMLElement;
          return { height: element.clientHeight, width: element.clientWidth };
        });
        await page.setViewport({ height:600, width: 600 });
        const results = await page.compareScreenshot('autocomplete', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
