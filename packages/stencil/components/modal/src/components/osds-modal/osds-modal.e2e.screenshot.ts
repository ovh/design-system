import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsModalAttributes,
  OdsComponentAttributes2StringAttributes,
  odsModalDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsModalBaseAttributes } from '@ovhcloud/ods-testing';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming/src';

describe('e2e:osds-modal', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsModalAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsModalAttributes = OdsCreateAttributes(attributes, odsModalBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsModalAttributes>(minimalAttributes, odsModalDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-modal ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-modal>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-modal');

    await page.evaluate(() => {
      const wrapperElement = document.querySelector('osds-modal')?.shadowRoot?.querySelector('.wrapper') as HTMLElement;
      wrapperElement.style.setProperty('animation', 'none');
    });
  }

  const screenshotConfigurations = [
    { description: `empty`, html: `` },
    { description: `text`, html: `<osds-text color="text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
      </osds-text>` },
  ];

  const actionsConfigurations = [
    { description: `no button`, html: `` },
    { description: `single button`, html: `
      <osds-button slot="actions" color="primary" href="https://www.ovh.com/fr/" target="_blank">Acheter</osds-button>
    ` },
    { description: `two buttons`, html: `
      <osds-button slot="actions" color="default" href="https://www.ovh.com/fr/" target="_blank">En savoir plus</osds-button>
      <osds-button slot="actions" color="primary" href="https://www.ovh.com/fr/" target="_blank">Acheter</osds-button>
    ` },
  ];

  describe('screenshots', () => {
    screenshotConfigurations.forEach(( screenshotConfiguration ) => {
      actionsConfigurations.forEach(( actionsConfiguration ) => {
        OdsThemeColorIntentList.forEach((color) => {
          [true, false].forEach(( dismissible ) => {
            ['', 'Innovation for Freedom'].forEach(( headline ) => {
              [false, true].forEach(( masked ) => {

                it(`${color}, ${screenshotConfiguration.description}, ${actionsConfiguration.description}${headline.length > 0 ? ', headline' : ', no headline'}${dismissible ? ', dismissible' : ', not dismissible'}${masked ? ', masked' : ', not masked'}.`, async () => {
                  const html = `${actionsConfiguration.html}${screenshotConfiguration.html}`;
                  await setup({ attributes: { dismissible, headline, masked, color }, html });

                  await page.waitForChanges();

                  await page.evaluate(() => {
                    const element = document.querySelector('osds-modal') as HTMLElement;
                    return { width: element.clientWidth, height: element.clientHeight };
                  });

                  await page.setViewport({ width: 800, height: 600 });

                  const results = await page.compareScreenshot('modal', { fullPage: false, omitBackground: true });
                  expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
                });
              });
            });
          });
        });
      });
    });
  });
});
