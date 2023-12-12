import type { OdsInputAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_COMMON_FIELD_SIZE, ODS_COMMON_INPUT_TYPE } from '@ovhcloud/ods-common-core';



describe('e2e:osds-input', () => {
  const baseAttribute = { ariaLabel: null, defaultValue: '', forbiddenValues: [], type: ODS_COMMON_INPUT_TYPE.text, value: '' };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsInputAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
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

  const stopSpinnerAnimation = async(page: E2EPage) => {
    await page.evaluate(() => {
      const spinnerEl = document.querySelector('osds-input')?.shadowRoot?.querySelector('osds-spinner')?.shadowRoot?.querySelector('.spinner > svg') as HTMLElement;
      spinnerEl.style.setProperty('animation', 'none');
    });
  };

  const screenshotActions = [
    {
      // Will display the default input
      actionDescription: 'no action',
      action: () => {
        // nothing
      },
    }, {
      // Will display the input with a cross icon to clear the input
      actionDescription: 'clearable',
      action: () => el.setProperty('clearable', true),
    }, {
      // Will contrast the colors of the input
      actionDescription: 'contrasted',
      action: () => el.setProperty('contrasted', true),
    }, {
      // Will display the input with an icon
      actionDescription: 'icon',
      action: () => el.setProperty('icon', 'ovh'),
    }, {
      // Will display the input with an eye icon to show/hide the value and an icon
      actionDescription: 'clearable & icon',
      action: () => {
        el.setProperty('clearable', true);
        el.setProperty('icon', 'ovh');
      },
    }, {
      // Will display the input with its type date and a value
      actionDescription: 'type date & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.date);
        el.setProperty('value', '1999-11-02');
      },
    }, {
      // Will display the input with its type email and a value
      actionDescription: 'type email & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.email);
        el.setProperty('value', 'ods@ovhcloud.com');
      },
    }, {
      // Will display the input with its type number and a value
      actionDescription: 'type number & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.number);
        el.setProperty('value', 42);
      },
    }, {
      // Will display the input with its type password and a value
      actionDescription: 'type password & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.password);
        el.setProperty('value', 'ods!!!');
      },
    }, {
      // Will display the input with its type search and a value
      actionDescription: 'type search & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.search);
        el.setProperty('value', 'Why is ODS so awesome?');
      },
    }, {
      // Will display the input with its type tel and a value
      actionDescription: 'type tel & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.tel);
        el.setProperty('value', '0600000000');
      },
    }, {
      // Will display the input with its type text and a value
      actionDescription: 'type text & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.text);
        el.setProperty('value', 'On Vous Héberge ?');
      },
    }, {
      // Will display the input with its type time and a value
      actionDescription: 'type time & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.time);
        el.setProperty('value', '09:00');
      },
    }, {
      // Will display the input with its type url and a value
      actionDescription: 'type url & value',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.url);
        el.setProperty('value', 'go/ods/');
      },
    }, {
      // Will display the input with its type text and a value
      actionDescription: 'value & masked',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.text);
        el.setProperty('value', 'Just ODS being ahead');
        el.setProperty('masked', true);
      },
    }, {
      // Will display the input with its type password and masked being true (so password should be visible)
      actionDescription: 'password & masked',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.password);
        el.setProperty('value', 'ods!!!');
        el.setProperty('masked', true);
      },
    }, {
      // Will display the input with its type password and clearable being true (so password should be visible)
      actionDescription: 'password & clearable',
      action: () => {
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.password);
        el.setProperty('value', 'ods!!!');
        el.setProperty('clearable', true);
      },
    }, {
      // Will display the input with a spinner
      actionDescription: 'loading',
      action: async() => {
        await Promise.all([
          el.setProperty('loading', true),
          page.waitForChanges(),
        ]);

        await stopSpinnerAnimation(page);
      },
    }, {
      // Will display the input with an icon and a spinner
      actionDescription: 'loading & icon',
      action: async() => {
        await Promise.all([
          el.setProperty('icon', 'ovh'),
          el.setProperty('loading', true),
          page.waitForChanges(),
        ]);

        await stopSpinnerAnimation(page);
      },
    }, {
      // Will display a disabled input with contrasted colors
      actionDescription: 'disabled',
      action: () => {
        el.setProperty('disabled', true);
      },
    }, {
      // Will display a disabled input with a spinner
      actionDescription: 'loading & disabled',
      action: async() => {
        await Promise.all([
          el.setProperty('disabled', true),
          el.setProperty('loading', true),
          page.waitForChanges(),
        ]);

        await stopSpinnerAnimation(page);
      },
    }, {
      // Will display a disabled input with contrasted colors
      actionDescription: 'contrasted & disabled',
      action: () => {
        el.setProperty('contrasted', true);
        el.setProperty('disabled', true);
      },
    }, {
      // Will display a disabled input with contrasted colors
      actionDescription: 'disabled & icon',
      action: () => {
        el.setProperty('disabled', true);
        el.setProperty('icon', 'ovh');
      },
    }, {
      // Will display a disabled input with contrasted colors
      actionDescription: 'disabled & clearable',
      action: () => {
        el.setProperty('disabled', true);
        el.setProperty('clearable', true);
      },
    }, {
      // Will display a disabled input with contrasted colors
      actionDescription: 'disabled & value (type text)',
      action: () => {
        el.setProperty('disabled', true);
        el.setProperty('type', ODS_COMMON_INPUT_TYPE.text);
        el.setProperty('value', 'Just ODS being ahead');
      },
    }, {
      // Will display an input with an error
      actionDescription: 'error',
      action: () => el.setProperty('error', true),
    }, {
      // Will display an input with an error and an icon
      actionDescription: 'placeholder',
      action: () => el.setProperty('placeholder', 'placeholder'),
    },
    {
      // Will display an input with an error and an icon
      actionDescription: 'prefixValue',
      action: () => el.setProperty('prefixValue', 'prefix'),
    },
    {
      // Will display an input with an error and an icon
      actionDescription: 'prefixValue & placeholder',
      action: () => {
        el.setProperty('prefixValue', 'prefix');
        el.setProperty('placeholder', 'placeholder');
      },
    }, {
      // Will display an input with an error and an icon
      actionDescription: 'prefixValue & value',
      action: () => {
        el.setProperty('prefixValue', 'prefix');
        el.setProperty('value', 'value');
      },
    },
  ];

  const screenshotBehaviours = [
    {
      behaviourDescription: 'no behaviour',
      behaviour: () => new Promise((resolve) => resolve('')),
    }, {
      behaviourDescription: 'focus',
      behaviour: () => el.focus(),
    },
  ];

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      screenshotBehaviours.forEach(({ behaviourDescription, behaviour }) => {
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          ODS_COMMON_FIELD_SIZE.forEach((size) => {
            const name = [color, size, actionDescription, behaviourDescription].join(', ');
            it(name, async() => {
              await setup({
                attributes: {
                  color,
                  size,
                },
              });
              action();
              await behaviour();
              await page.waitForChanges();

              await page.evaluate(() => {
                const element = document.querySelector('osds-input') as HTMLElement;
                return { width: element.clientWidth, height: element.clientHeight };
              });
              await page.setViewport({ width: 600, height:600 });

              const results = await page.compareScreenshot('input', { fullPage: false, omitBackground: true });

              expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
            });
          });
        });
      });
    });
  });
});
