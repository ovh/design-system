import type { OdsInputAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_INPUT_TYPE } from './constants/input-type';

describe('e2e:osds-input', () => {
  const baseAttribute = {
    ariaLabel: null,
    defaultValue: '',
    disabled: false,
    error: false,
    forbiddenValues: [],
    name: '',
    type: ODS_INPUT_TYPE.text,
    value: '',
  };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsInputAttribute>, onPage?: ({ page }: { page: E2EPage }) => void } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsInputAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-input ${odsStringAttributes2Str(stringAttributes)}>
      </osds-input>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-input');
  }

  async function stopSpinnerAnimation(page: E2EPage): Promise<void> {
    await page.evaluate(() => {
      const spinnerEl = document.querySelector('osds-input')?.shadowRoot?.querySelector('osds-spinner')?.shadowRoot?.querySelector('.spinner > svg') as HTMLElement;
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
      // Will contrast the colors of the input
      action: (): void => el.setProperty('contrasted', true),
      actionDescription: 'contrasted',
    }, {
      // Will display the input with an icon
      action: (): void => el.setProperty('icon', 'ovh'),
      actionDescription: 'icon',
    }, {
      // Will display the input with an eye icon to show/hide the value and an icon
      action: (): void => {
        el.setProperty('clearable', true);
        el.setProperty('icon', 'ovh');
      },
      actionDescription: 'clearable & icon',
    }, {
      // Will display the input with its type date and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.date);
        el.setProperty('value', '1999-11-02');
      },
      actionDescription: 'type date & value',
    }, {
      // Will display the input with its type email and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.email);
        el.setProperty('value', 'ods@ovhcloud.com');
      },
      actionDescription: 'type email & value',
    }, {
      // Will display the input with its type number and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.number);
        el.setProperty('value', 42);
      },
      actionDescription: 'type number & value',
    }, {
      // Will display the input with its type password and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.password);
        el.setProperty('value', 'ods!!!');
      },
      actionDescription: 'type password & value',
    }, {
      // Will display the input with its type search and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.search);
        el.setProperty('value', 'Why is ODS so awesome?');
      },
      actionDescription: 'type search & value',
    }, {
      // Will display the input with its type tel and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.tel);
        el.setProperty('value', '0600000000');
      },
      actionDescription: 'type tel & value',
    }, {
      // Will display the input with its type text and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.text);
        el.setProperty('value', 'On Vous Héberge ?');
      },
      actionDescription: 'type text & value',
    }, {
      // Will display the input with its type time and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.time);
        el.setProperty('value', '09:00');
      },
      actionDescription: 'type time & value',
    }, {
      // Will display the input with its type url and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.url);
        el.setProperty('value', 'go/ods/');
      },
      actionDescription: 'type url & value',
    }, {
      // Will display the input with its type text and a value
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.text);
        el.setProperty('value', 'Just ODS being ahead');
        el.setProperty('masked', true);
      },
      actionDescription: 'value & masked',
    }, {
      // Will display the input with its type password and masked being true (so password should be visible)
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.password);
        el.setProperty('value', 'ods!!!');
        el.setProperty('masked', true);
      },
      actionDescription: 'password & masked',
    }, {
      // Will display the input with its type password and clearable being true (so password should be visible)
      action: (): void => {
        el.setProperty('type', ODS_INPUT_TYPE.password);
        el.setProperty('value', 'ods!!!');
        el.setProperty('clearable', true);
      },
      actionDescription: 'password & clearable',
    }, {
      // Will display the input with a spinner
      action: async(): Promise<void> => {
        el.setProperty('loading', true);
        await page.waitForChanges();
        await stopSpinnerAnimation(page);
      },
      actionDescription: 'loading',
    }, {
      // Will display the input with an icon and a spinner
      action: async(): Promise<void> => {
        el.setProperty('icon', 'ovh');
        el.setProperty('loading', true);
        await page.waitForChanges();
        await stopSpinnerAnimation(page);
      },
      actionDescription: 'loading & icon',
    }, {
      // Will display a disabled input with contrasted colors
      action: (): void => {
        el.setProperty('disabled', true);
      },
      actionDescription: 'disabled',
    }, {
      // Will display a disabled input with a spinner
      action: async(): Promise<void> => {
        el.setProperty('disabled', true);
        el.setProperty('loading', true);
        await page.waitForChanges();
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
        el.setProperty('icon', 'ovh');
      },
      actionDescription: 'disabled & icon',
    }, {
      // Will display a disabled input with contrasted colors
      action: (): void => {
        el.setProperty('disabled', true);
        el.setProperty('clearable', true);
      },
      actionDescription: 'disabled & clearable',
    }, {
      // Will display a disabled input with contrasted colors
      action: (): void => {
        el.setProperty('disabled', true);
        el.setProperty('type', ODS_INPUT_TYPE.text);
        el.setProperty('value', 'Just ODS being ahead');
      },
      actionDescription: 'disabled & value (type text)',
    }, {
      // Will display an input with an error
      action: (): void => el.setProperty('error', true),
      actionDescription: 'error',
    }, {
      // Will display an input with an error and an icon
      action: (): void => el.setProperty('placeholder', 'placeholder'),
      actionDescription: 'placeholder',
    },
    {
      // Will display an input with an error and an icon
      action: (): void => el.setProperty('prefixValue', 'prefix'),
      actionDescription: 'prefixValue',
    },
    {
      // Will display an input with an error and an icon
      action: (): void => {
        el.setProperty('prefixValue', 'prefix');
        el.setProperty('placeholder', 'placeholder');
      },
      actionDescription: 'prefixValue & placeholder',
    }, {
      // Will display an input with an error and an icon
      action: (): void => {
        el.setProperty('prefixValue', 'prefix');
        el.setProperty('value', 'value');
      },
      actionDescription: 'prefixValue & value',
    },
  ];

  const screenshotBehaviours = [
    {
      behaviour: (): Promise<string> => new Promise((resolve) => resolve('')),
      behaviourDescription: 'no behaviour',
    }, {
      behaviour: (): Promise<void> => el.focus(),
      behaviourDescription: 'focus',
    },
  ];

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      screenshotBehaviours.forEach(({ behaviourDescription, behaviour }) => {
        const name = [actionDescription, behaviourDescription].join(', ');
        it(name, async() => {
          await setup({
            attributes: {},
          });
          action();
          await behaviour();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-input') as HTMLElement;
            return { height: element.clientHeight, width: element.clientWidth };
          });
          await page.setViewport({ height: 600, width: 600 });

          const results = await page.compareScreenshot('input', { fullPage: false, omitBackground: true });

          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
