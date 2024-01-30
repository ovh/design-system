import type { OdsSelectOptionAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-select-option', () => {
  const baseAttribute = { value: '' };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsSelectOptionAttribute>, onPage?: ({ page }: { page: E2EPage }) => void } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSelectOptionAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-select-option ${odsStringAttributes2Str(stringAttributes)}>
        My-option
      </osds-select-option>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-select-option');
  }

  const screenshotActions = [
    {
      action: (): void => {
        // noop
      },
      actionDescription: 'no action',
    }, {
      action: (): void => {
        el.setProperty('value', 42);
      },
      actionDescription: 'value',
    },
  ];

  const screenshotBehaviours = [
    {
      behaviour: (): void => {
        // noop
      },
      behaviourDescription: 'no behaviour',
    }, {
      behaviour: (): Promise<void> => el.hover(),
      behaviourDescription: 'hover',
    }, {
      behaviour: (): Promise<void> => el.focus(),
      behaviourDescription: 'focus',
    },
  ];

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      screenshotBehaviours.forEach(({ behaviourDescription, behaviour }) => {
        it([actionDescription, behaviourDescription].join(', '), async() => {
          await setup({});
          action();
          await behaviour();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-select-option') as HTMLElement;
            return { height: element.clientHeight, width: element.clientWidth };
          });
          await page.setViewport({ height:600, width: 600 });
          const results = await page.compareScreenshot('select-option', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
