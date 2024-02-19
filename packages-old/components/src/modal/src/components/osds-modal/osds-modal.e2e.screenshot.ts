import type { OdsModalAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-modal', () => {
  const baseAttribute = { color: ODS_THEME_COLOR_INTENT.info, dismissible: true, headline: '', masked: false };
  let page: E2EPage;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsModalAttribute>, html?: string } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsModalAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-modal ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-modal>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    await page.evaluate(() => {
      const modalElement = document.querySelector('osds-modal')?.shadowRoot?.querySelector('.wrapper') as HTMLDialogElement;
      modalElement.style.setProperty('animation', 'none');
    });
  }

  const screenshotConfigurations = [
    { description: 'empty', html: '' },
    { description: 'text', html: `<osds-text color="text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
    </osds-text>` },
    { description: 'a lot of content', html: `<div style="display: flex; flex-direction: column; gap: 10px;">
      <osds-text color="text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </osds-text>
      <osds-select class="w-20" id="select7">
        <span slot="placeholder"><i>Select</i> something</span>
        <osds-select-group>Group title</osds-select-group>
        <osds-select-option value="1">This is the <strong>Value 1</strong></osds-select-option>
        <osds-select-option value="2">A value way toooooooooooooooooooo long for a select</osds-select-option>
        <osds-select-option value="3">Value 3</osds-select-option>
      </osds-select>
      <osds-input inline type="text" value="Need a Host?" clearable></osds-input>
      <osds-text color="text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </osds-text>
      <osds-input inline type="text" value="Need a Host?" clearable></osds-input>
      <osds-text color="text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </osds-text>
      <osds-input inline type="text" value="Need a Host?" clearable></osds-input>
      <osds-text color="text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </osds-text>
      <osds-input inline type="text" value="Need a Host?" clearable></osds-input>
    </div>` },
  ];

  const actionsConfigurations = [
    { description: 'no button', html: '' },
    { description: 'single button', html: `
      <osds-button slot="actions" color="primary" href="https://www.ovh.com/fr/" target="_blank">Acheter</osds-button>
    ` },
    { description: 'two buttons', html: `
      <osds-button slot="actions" color="default" href="https://www.ovh.com/fr/" target="_blank">En savoir plus</osds-button>
      <osds-button slot="actions" color="primary" href="https://www.ovh.com/fr/" target="_blank">Acheter</osds-button>
    ` },
  ];

  describe('screenshots', () => {
    screenshotConfigurations.forEach(( screenshotConfiguration ) => {
      actionsConfigurations.forEach(( actionsConfiguration ) => {
        ODS_THEME_COLOR_INTENTS.forEach((color) => {
          [true, false].forEach(( dismissible ) => {
            ['', 'Innovation for Freedom'].forEach(( headline ) => {
              [false, true].forEach(( masked ) => {

                it(`${color}, ${screenshotConfiguration.description}, ${actionsConfiguration.description}${headline.length > 0 ? ', headline' : ', no headline'}${dismissible ? ', dismissible' : ', not dismissible'}${masked ? ', masked' : ', not masked'}.`, async() => {
                  const html = `${actionsConfiguration.html}${screenshotConfiguration.html}`;
                  await setup({ attributes: { color, dismissible, headline, masked }, html });

                  await page.waitForChanges();

                  await page.evaluate(() => {
                    const element = document.querySelector('osds-modal') as HTMLElement;
                    return { height: element.clientHeight , width: element.clientWidth };
                  });

                  await page.setViewport({ height: 600, width: 800 });

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
