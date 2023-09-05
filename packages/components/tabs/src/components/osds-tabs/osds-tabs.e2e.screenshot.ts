import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsTabsAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-tabs', () => {
  let page: E2EPage;
  let el: E2EElement;
  let itemRiseElement: E2EElement;
  let itemAdvanceElement: E2EElement;

  function getContent(panel: string, contrasted = false, testSpacing = false, disabledScale = false) {
    return `
<style>

${contrasted ? `body{background:blue}` : ''}

/* help us to visually check the size */
${testSpacing ? `
osds-tab-panel {
background: goldenrod;
}
.panel-content {
background: white;
}
` : ''}
</style>
    <osds-tabs ${panel ? `panel=${panel}` : ''} ${contrasted ? `contrasted` : ''}>
        <osds-tab-bar slot='top'>
            <osds-tab-bar-item panel='rise'>Rise</osds-tab-bar-item>
            <osds-tab-bar-item panel='advance'>Advance</osds-tab-bar-item>
            <osds-tab-bar-item panel='scale' ${disabledScale ? 'disabled' : ''}> Scale</osds-tab-bar-item>
            <osds-tab-bar-item panel='high'>High Grade</osds-tab-bar-item>
            <osds-tab-bar-item panel='storage'>Storage</osds-tab-bar-item>
            <osds-tab-bar-item panel='game'>Game</osds-tab-bar-item>
        </osds-tab-bar>
        <osds-tab-panel name='rise'><div class='panel-content'>Les serveurs les plus abordables, adaptés à la plupart des usages.</div></osds-tab-panel>
        <osds-tab-panel name='advance'><div class='panel-content'>Des serveurs polyvalents pour les petites et moyennes entreprises.</div></osds-tab-panel>
        <osds-tab-panel name='scale'><div class='panel-content'>Des serveurs conçus pour les infrastructures complexes à haute résilience.</div></osds-tab-panel>
        <osds-tab-panel name='high'><div class='panel-content'>Les serveurs les plus puissants, optimisés pour les charges critiques.</div></osds-tab-panel>
        <osds-tab-panel name='storage'><div class='panel-content'>Des serveurs pour l'archivage, la sauvegarde ou le stockage distribué</div></osds-tab-panel>
        <osds-tab-panel name='game'><div class='panel-content'>Des serveurs optimisés pour les jeux vidéo et les plateformes de streaming.</div></osds-tab-panel>
     </osds-tabs>
    `;
  }

  async function setup({ onPage, html = '' }: { html?: string, attributes?: Partial<OdsTabsAttribute>, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.evaluate(() => {
      const charsetMetaTag = document.createElement('meta');
      charsetMetaTag.setAttribute('http-equiv', 'Content-Type');
      charsetMetaTag.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charsetMetaTag, document.head.firstChild);
      document.body.style.setProperty('margin', '4px');
    });
    await page.setContent(`${html}`);

    el = await page.find('osds-tabs');

    await updateReferences();
  }

  /**
   * updates references to elements and properties
   */
  async function updateReferences() {

    itemRiseElement = await page.find('osds-tab-bar-item[panel=rise]');
    itemAdvanceElement = await page.find('osds-tab-bar-item[panel=advance]');
  }

  const screenshotActions = [
    {
      actionDescription: 'test spacing',
      panel: '',
      action: async () => { /* noop */
      },
      testSpacing: true,
    },
    {
      actionDescription: 'default panel',
      panel: '',
      action: async () => { /* noop */
      },
    },
    {
      actionDescription: 'disabled item',
      panel: '',
      action: async () => { /* noop */
      },
      disabledScale: true,
    },
    {
      actionDescription: 'focus visible selected item with Tab',
      panel: 'rise',
      action: async () => {
        await el.press('Tab');
      },
    },
    {
      actionDescription: 'focus visible non selected item with Tab',
      panel: 'rise',
      action: async () => {
        // first on rise
        await el.press('Tab');
        // second on advance
        await el.press('Tab');
      },
    },
    {
      actionDescription: 'advance panel already selected',
      panel: 'advance',
      action: async () => { /* noop */
      },
    },
    {
      actionDescription: 'click a non selected item',
      panel: 'rise',
      action: async () => {
        await itemAdvanceElement.click();
      },
    },
    {
      actionDescription: 'hover a non selected item',
      panel: 'rise',
      action: async () => {
        await itemAdvanceElement.hover();
      },
    },
    {
      actionDescription: 'hover a selected item',
      panel: 'rise',
      action: async () => {
        await itemRiseElement.hover();
      },
    },
  ];

  describe('screenshots', () => {
    [false, true].forEach((contrasted) => {
      screenshotActions.forEach(({ actionDescription, panel, action, disabledScale, testSpacing }) => {
        it(`${contrasted ? 'contrasted' : ''} ${actionDescription}`, async () => {
          await setup({ html: getContent(panel, contrasted, testSpacing, disabledScale) });
          await action();
          await page.waitForChanges();

          await page.evaluate(() => {
            const element = document.querySelector('osds-tabs') as HTMLElement;
            return { width: element.clientWidth, height: element.clientHeight };
          });
          await page.setViewport({ width: 700, height: 200 });
          const results = await page.compareScreenshot('', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });
});
