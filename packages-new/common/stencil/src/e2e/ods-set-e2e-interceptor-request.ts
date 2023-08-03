import type { E2EPage } from '@stencil/core/testing';
import type { HTTPRequest as pRequest } from 'puppeteer';

/**
 *
 *
 * ```typescript
 * if (request.url().includes('/flags/flags-4x3/fr.svg')) {
                request.respond({
                  headers: { "Access-Control-Allow-Origin": "*" },
                  body: 'myContent'
                });
              } else {
                request.continue();
              }
 * ```
 * @param page
 * @param cbk
 */
function odsSetE2eInterceptRequest(page: E2EPage, cbk: (request: pRequest) => void) {
  page.on('response', response => {
    // console.log('response', response.url());
    if (response.url().match(/^https?:\/\/localhost(:\d+)?\/$/)) {
      (page as any).removeAllListeners('request');
      page.on('request', request => {
        cbk(request);
      });
    }
  });
}

export {
  odsSetE2eInterceptRequest,
};
