import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsInputAttributes,
  OdsInputSizeList,
  OdsInputType,
  odsInputDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsInputBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming/src';

describe('e2e:osds-input', () => {
  let page: E2EPage;
  let el: E2EElement;

  // let anotherInput: E2EElement;

  async function setup({
                         attributes = {},
                         onPage,
                       }: { attributes?: Partial<OdsInputAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsInputAttributes = OdsCreateAttributes(attributes, odsInputBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsInputAttributes>(minimalAttributes, odsInputDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-input ${OdsStringAttributes2Str(stringAttributes)}>
      </osds-input>
      <input id="anotherInput" style="visibility: hidden"/>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-input');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {
        // noop
      },
    }, {
      actionDescription: 'contrasted',
      action: () => el.setProperty('contrasted', true),
    }, {
      actionDescription: 'disabled',
      action: () => el.setProperty('disabled', true),
    }, {
      actionDescription: 'contrasted and disabled',
      action: () => {
        el.setProperty('contrasted', true);
        el.setProperty('disabled', true);
      },
    }, {
      actionDescription: 'error',
      action: () => el.setProperty('error', true),
    }, {
      actionDescription: 'placeholder',
      action: () => el.setProperty('placeholder', 'placeholder'),
    }, {
      actionDescription: 'type number and value',
      action: () => {
        el.setProperty('type', OdsInputType.number);
        el.setProperty('value', 42);
      },
    },
  ];

  const screenshotBehaviours = [
    {
      behaviourDescription: 'no behaviour',
      behaviour: () => new Promise(resolve => resolve('')),
    }/*, {
      behaviourDescription: 'hover',
      behaviour: () => el.hover(),
    }, {
      behaviourDescription: 'focus',
      behaviour: () => el.focus(),
    },*/
  ];

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      screenshotBehaviours.forEach(({ behaviourDescription, behaviour }) => {
        OdsThemeColorIntentList.forEach((color) => {
          OdsInputSizeList.forEach((size) => {
            const name = [color, size, actionDescription, behaviourDescription].join(', ');
            it(name, async () => {
              await setup({
                attributes: {
                  color,
                  size
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



