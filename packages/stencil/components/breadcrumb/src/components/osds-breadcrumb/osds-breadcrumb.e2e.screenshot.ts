import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsBreadcrumbAttributes } from '@ovhcloud/ods-core';

describe('e2e:osds-breadcrumb', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ onPage }: { attributes?: Partial<OdsBreadcrumbAttributes>; html?: string; onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    page = await newE2EPage();
    onPage && onPage({ page });
    await page.setContent(`
    <osds-breadcrumb>
    <osds-breadcrumb-item>
      <osds-link color="primary" href="home"> Home </osds-link>
    </osds-breadcrumb-item>
    <osds-breadcrumb-item><osds-link color="primary" href="web">Web</osds-link></osds-breadcrumb-item>
    <osds-breadcrumb-item><osds-text>Domain</osds-text></osds-breadcrumb-item>
  </osds-breadcrumb>
  <osds-breadcrumb>
  <osds-breadcrumb-item>
    <osds-link color="primary" href="home"> Home </osds-link>
  </osds-breadcrumb-item>
  <osds-breadcrumb-item><osds-link color="primary" href="web">Web</osds-link></osds-breadcrumb-item>
  <osds-breadcrumb-item><osds-link color="primary" href="Domains">Domains</osds-link></osds-breadcrumb-item>
  <osds-breadcrumb-item><osds-link color="primary" href="Informations générales">General information</osds-link></osds-breadcrumb-item>
  <osds-breadcrumb-item><osds-text>DNS zone</osds-text></osds-breadcrumb-item>
</osds-breadcrumb>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    el = await page.find('osds-breadcrumb');
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
    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async () => {
        await setup({});
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-breadcrumb') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height: 600 });
        const results = await page.compareScreenshot({ fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 });
      });
    });
  });
});
