import type { OdsTextareaAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-textarea', () => {
  const baseAttribute = { ariaLabel: null, defaultValue: null, disabled: false, error: false, name: '', spellcheck: false, value: null };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsTextareaAttribute>, onPage?: ({ page }: { page: E2EPage }) => void } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextareaAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-textarea ${odsStringAttributes2Str(stringAttributes)}>
      </osds-textarea>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-textarea');
  }

  const screenshotActions = [
    {
      action: (): void => {},
      actionDescription: 'no action',
    }, {
      action: (): void => el.setProperty('disabled', true),
      actionDescription: 'disabled',
    }, {
      action: (): void => el.setProperty('error', true),
      actionDescription: 'error',
    }, {
      action: (): void => el.setProperty('placeholder', 'placeholder'),
      actionDescription: 'placeholder',
    },
  ];

  const screenshotBehaviours = [
    {
      behaviour: (): void => {},
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
    screenshotActions.forEach(({ actionDescription, action }) => {
      screenshotBehaviours.forEach(({ behaviourDescription, behaviour }) => {
        it([actionDescription, behaviourDescription].join(', '), async() => {
          await setup();
          action();
          behaviour();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-textarea') as HTMLElement;
            return { height: element.clientHeight, width: element.clientWidth };
          });
          await page.setViewport({ height:600, width: 600 });
          const results = await page.compareScreenshot('textarea', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
