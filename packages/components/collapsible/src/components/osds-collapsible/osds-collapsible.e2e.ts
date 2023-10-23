import type {E2EElement, E2EPage} from '@stencil/core/testing';
import type {OdsCollapsibleAttribute} from './interfaces/attributes';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {newE2EPage} from '@stencil/core/testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';

describe('e2e:osds-collapsible', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({attributes = {}, html = ''}: { attributes?: Partial<OdsCollapsibleAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCollapsibleAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-collapsible ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-collapsible>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-collapsible');
  }

  it('should render', async() => {
    await setup({attributes: {}});
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('toggle', () => {
    it('should sync opened property opened attribute', async() => {
      let componentOpened: boolean;
      await setup({attributes: {opened: false}});

      componentOpened = await el.getProperty('opened');
      expect(componentOpened).toBe(false);

      el.setProperty('opened', true);
      await page.waitForChanges();

      componentOpened = await el.getProperty('opened');
      expect(componentOpened).toBe(true);
    });
  });
});
