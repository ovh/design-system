import type {E2EElement, E2EPage} from '@stencil/core/testing';
import type {OdsSelectOptionAttribute} from './interfaces/attributes';
import {newE2EPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

describe('e2e:osds-select-option', () => {
  const baseAttribute = {value: ''};
  let page: E2EPage;
  let el: E2EElement;

  async function setup({attributes = {}, onPage}: { attributes?: Partial<OdsSelectOptionAttribute>, html?: string, onPage?: ({page}: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSelectOptionAttribute>({...baseAttribute, ...attributes}, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({page});

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
      actionDescription: 'no action',
      action: () => {
        // noop
      },
    }, {
      actionDescription: 'value',
      action: () => {
        el.setProperty('value', 42);
      },
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
        it([actionDescription, behaviourDescription].join(', '), async() => {
          await setup({});
          action();
          await behaviour();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-select-option') as HTMLElement;
            return {width: element.clientWidth, height: element.clientHeight};
          });
          await page.setViewport({width: 600, height:600});
          const results = await page.compareScreenshot('select-option', {fullPage: false, omitBackground: true});
          expect(results).toMatchScreenshot({allowableMismatchedRatio: 0});
        });
      });
    });
  });
});
