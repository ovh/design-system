import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

import {
  OdsSelectAttributes,
} from '@ovhcloud/ods-core';

describe('e2e:osds-tabs', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({
                         onPage,
                       }: { attributes?: Partial<OdsSelectAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
    <osds-tabs panel-active="rise" tabs-id="tabs-1">
        <osds-tab-bar slot="top">
            <osds-tab-bar-item panel="rise">Rise</osds-tab-bar-item>
            <osds-tab-bar-item panel="advance">Advance</osds-tab-bar-item>
            <osds-tab-bar-item panel="scale"> Scale</osds-tab-bar-item>
            <osds-tab-bar-item panel="high">High Grade</osds-tab-bar-item>
            <osds-tab-bar-item panel="storage">Storage</osds-tab-bar-item>
            <osds-tab-bar-item panel="game">Game</osds-tab-bar-item>
        </osds-tab-bar>
        <osds-tab-panel name="rise">Les serveurs les plus abordables, adaptés à la plupart des usages.</osds-tab-panel>
        <osds-tab-panel name="advance">Des serveurs polyvalents pour les petites et moyennes entreprises.</osds-tab-panel>
        <osds-tab-panel name="scale">Des serveurs conçus pour les infrastructures complexes à haute résilience.</osds-tab-panel>
        <osds-tab-panel name="high">Les serveurs les plus puissants, optimisés pour les charges critiques.</osds-tab-panel>
        <osds-tab-panel name="storage">Des serveurs pour l'archivage, la sauvegarde ou le stockage distribué.</osds-tab-panel>
        <osds-tab-panel name="game">Des serveurs optimisés pour les jeux vidéo et les plateformes de streaming.</osds-tab-panel>
     </osds-tabs>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-tabs');
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {
        // noop
      },
    },
  ];

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async () => {
        await setup({});
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-tabs') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('tabs', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
