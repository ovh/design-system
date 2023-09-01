import type { E2EPage } from '@stencil/core/testing';
import type { HTTPRequest as pRequest, EventEmitter} from 'puppeteer';

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
export function odsSetE2eInterceptRequest(page: E2EPage, cbk: (request: pRequest) => void) {
  page.on('response', response => {
    if (response.url().match(/^https?:\/\/localhost(:\d+)?\/$/)) {
      (page as unknown as EventEmitter).removeAllListeners('request');
      page.on('request', request => {
        cbk(request)
      });
    };
  });
}
