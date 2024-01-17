import type { OdsPasswordAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-password', () => {
  const baseAttribute = { ariaLabel: '', forbiddenValues: [], value: '' };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsPasswordAttribute>, onPage?: ({ page }: { page: E2EPage }) => void } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPasswordAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`<osds-password ${odsStringAttributes2Str(stringAttributes)}></osds-password>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-password');
  }

  async function stopSpinnerAnimation(page: E2EPage): Promise<void> {
    await page.evaluate(() => {
      const spinnerEl = document.querySelector('osds-password')?.shadowRoot?.querySelector('osds-input')?.shadowRoot?.querySelector('osds-spinner')?.shadowRoot?.querySelector('.spinner > svg') as HTMLElement;
      spinnerEl.style.setProperty('animation', 'none');
    });
  }

  const screenshotActions = [
    {
      // Will display the default input
      action: (): void => {
        // nothing
      },
      actionDescription: 'no action',
    }, {
      // Will display the input with a cross icon to clear the input
      action: (): void => el.setProperty('clearable', true),
      actionDescription: 'clearable',
    }, {
      // Will display the input taking full width
      action: (): void => el.setProperty('flex', true),
      actionDescription: 'flex',
    }, {
      // Will contrast the colors of the input
      action: (): void => el.setProperty('contrasted', true),
      actionDescription: 'contrasted',
    }, {
      // Will display the input with its type password
      action: (): void => el.setProperty('masked', true),
      actionDescription: 'masked',
    }, {
      // Will display the input with its text
      action: (): void => el.setProperty('masked', false),
      actionDescription: 'not masked',
    }, {
      // Will display the input with a spinner
      action: async(): Promise<void> => {
        await Promise.all([
          el.setProperty('loading', true),
          page.waitForChanges(),
        ]);

        await stopSpinnerAnimation(page);
      },
      actionDescription: 'loading',
    }, {
      // Will display a disabled input with contrasted colors
      action: (): void => el.setProperty('disabled', true),
      actionDescription: 'disabled',
    }, {
      // Will display a disabled input with a spinner
      action: async(): Promise<void> => {
        await Promise.all([
          el.setProperty('disabled', true),
          el.setProperty('loading', true),
          page.waitForChanges(),
        ]);

        await stopSpinnerAnimation(page);
      },
      actionDescription: 'loading & disabled',
    }, {
      // Will display a disabled input with contrasted colors
      action: (): void => {
        el.setProperty('contrasted', true);
        el.setProperty('disabled', true);
      },
      actionDescription: 'contrasted & disabled',
    }, {
      // Will display a disabled input with contrasted colors
      action: (): void => {
        el.setProperty('disabled', true);
        el.setProperty('clearable', true);
      },
      actionDescription: 'disabled & clearable',
    }, {
      // Will display an input with an error and an icon
      action: (): void => el.setProperty('placeholder', 'placeholder'),
      actionDescription: 'placeholder',
    },
  ];

  describe('screenshots', () => {
    screenshotActions.forEach(({ action, actionDescription }) => {
      const name = [actionDescription].join(', ');
      it(name, async() => {
        await setup({
          attributes: {},
        });
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-password') as HTMLElement;
          return { height: element.clientHeight, width: element.clientWidth };
        });
        await page.setViewport({ height:600, width: 600 });

        const results = await page.compareScreenshot('password', { fullPage: false, omitBackground: true });

        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
