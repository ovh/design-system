import type {E2EElement, E2EPage} from '@stencil/core/testing';
import type {OdsTextAreaAttribute} from './interfaces/attributes';
import {newE2EPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {ODS_THEME_COLOR_INTENTS} from '@ovhcloud/ods-common-theming';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

describe('e2e:osds-textarea', () => {
  const baseAttribute = {ariaLabel: null, hasFocus: false, spellcheck: false, value: ''};
  let page: E2EPage;
  let el: E2EElement;

  async function setup({attributes = {}, onPage}: { attributes?: Partial<OdsTextAreaAttribute>, html?: string, onPage?: ({page}: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextAreaAttribute>({...baseAttribute, ...attributes}, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({page});

    await page.setContent(`
      <osds-textarea ${odsStringAttributes2Str(stringAttributes)}>
      </osds-textarea>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-textarea');
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
    },
  ];

  const screenshotBehaviours = [
    {
      behaviourDescription: 'no behaviour',
      behaviour: () => {
        // noop
      },
    }, {
      behaviourDescription: 'hover',
      behaviour: () => el.hover(),
    }, {
      behaviourDescription: 'focus',
      behaviour: () => el.focus(),
    },
  ];

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({actionDescription, action}) => {
      screenshotBehaviours.forEach(({behaviourDescription, behaviour}) => {
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          it([color, actionDescription, behaviourDescription].join(', '), async() => {
            await setup({
              attributes: {
                color,
              },
            });
            action();
            behaviour();
            await page.waitForChanges();

            await page.evaluate(() => {
              const element = document.querySelector('osds-textarea') as HTMLElement;
              return {width: element.clientWidth, height: element.clientHeight};
            });
            await page.setViewport({width: 600, height:600});
            const results = await page.compareScreenshot('textarea', {fullPage: false, omitBackground: true});
            expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
          });
        });
      });
    });
  });
});



