import type { OdsFormFieldAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


describe('e2e:osds-form-field', () => {
  let page: E2EPage;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsFormFieldAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFormFieldAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-form-field ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-form-field>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  const screenshotConfigurations = [
    { description: 'no configuration', html: '' },
    { description: 'label', html: `
      <osds-text slot="label" level='heading' color="primary">Description</osds-text>
    ` },
    { description: 'visual-hint', html: `
      <osds-text slot="visual-hint">150/200</osds-text>
    ` },
    { description: 'tooltip', html: `
      <osds-tooltip slot="visual-hint">
        <osds-tooltip-content slot="tooltip-content">Lorem ipsum...</osds-tooltip-content>
        <osds-text level='caption' color="primary">Need help?</osds-text>
      </osds-tooltip>
    ` },
    { description: 'helper', html: `
      <osds-text slot="helper">Write a few sentences about you</osds-text>
    ` },
    { description: 'label & visual-hint', html: `
      <osds-text slot="label" level='heading' color="primary">Description</osds-text>
      <osds-text slot="visual-hint">150/200</osds-text>
    ` },
    { description: 'label & tooltip', html: `
      <osds-text slot="label" level='heading' color="primary">Description</osds-text>
      <osds-tooltip slot="visual-hint">
        <osds-tooltip-content slot="tooltip-content">Lorem ipsum...</osds-tooltip-content>
        <osds-text level='caption' color="primary">Need help?</osds-text>
      </osds-tooltip>
    ` },
    { description: 'label & helper', html: `
      <osds-text slot="label" level='heading' color="primary">Description</osds-text>
      <osds-text slot="helper">Write a few sentences about you</osds-text>
    ` },
    { description: 'visual-hint & helper', html: `
      <osds-text slot="visual-hint">150/200</osds-text>
      <osds-text slot="helper">Write a few sentences about you</osds-text>
    ` },
    { description: 'tooltip & helper', html: `
      <osds-tooltip slot="visual-hint">
        <osds-tooltip-content slot="tooltip-content">Lorem ipsum...</osds-tooltip-content>
        <osds-text level='caption' color="primary">Need help?</osds-text>
      </osds-tooltip>
      <osds-text slot="helper">Write a few sentences about you</osds-text>
    ` },
    { description: 'label & visual-hint & helper', html: `
      <osds-text slot="label" level='heading' color="primary">Description</osds-text>
      <osds-text slot="visual-hint">150/200</osds-text>
      <osds-text slot="helper">Write a few sentences about you</osds-text>
    ` },
    { description: 'label & tooltip & helper', html: `
      <osds-text slot="label" level='heading' color="primary">Description</osds-text>
      <osds-tooltip slot="visual-hint">
        <osds-tooltip-content slot="tooltip-content">Lorem ipsum...</osds-tooltip-content>
        <osds-text level='caption' color="primary">Need help?</osds-text>
      </osds-tooltip>
      <osds-text slot="helper">Write a few sentences about you</osds-text>
    ` },
  ];

  const slotConfigurations = [
    { description: 'no slot', html: '' },
    { description: 'single input', html: `
      <osds-input type="text" value="Hello, ODS!"></osds-input>
    ` },
    { description: 'single textarea', html: `
      <osds-textarea></osds-textarea>
    ` },
    { description: 'input & textarea', html: `
      <osds-input type="text" value="Hello, ODS!"></osds-input>
      <osds-textarea></osds-textarea>
    ` },
  ];

  const attributeConfigurations = [
    {},
    { flex: true },
    { error: 'An error occured.' },
    { flex: true, error: 'An error occured.' },
  ];

  describe('screenshots', () => {
    screenshotConfigurations.forEach(( screenshotConfiguration ) => {
      slotConfigurations.forEach(( slotConfiguration ) => {
        attributeConfigurations.forEach(( attributes ) => {
          const attributeDescription = Object.keys(attributes).join(' & ');

          it(`${slotConfiguration.description} with ${screenshotConfiguration.description} and ${attributeDescription}`, async() => {
            const html = `${slotConfiguration.html}${screenshotConfiguration.html}`;
            await setup({ attributes, html });

            await page.waitForChanges();

            await page.evaluate(() => {
              const element = document.querySelector('osds-form-field') as HTMLElement;
              return { width: element.clientWidth, height: element.clientHeight };
            });

            await page.setViewport({ width: 600, height:600 });

            const results = await page.compareScreenshot('form-field', { fullPage: false, omitBackground: true });
            expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
          });
        });
      });
    });
  });
});
