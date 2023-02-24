import { OdsLogger } from '../logger/ods-logger';

/**
 * manage loading of content like svg files.
 * allow to manage the loading only if the container is visible (lazy mode).
 * put data into cache.
 * allow validators on the received content (if sanitize mode enabled).
 *
 * @example
 * ```typescript
 * const lazy = true;
 * const svgLoadContent = new OdsLoadContent([
 *   (content) => {return content !== 'forbiddenText' ? content : 'filtered' }
 * ]);
 *
 * this.svgLoadContent.waitUntilVisible(yourHTMLElement, '50px', () => {
 *   svgLoadContent.load('my/file/path.svg', true, true);
 * }, lazy);
 * ```
 *
 * ---
 *
 * Code inspired by ionic-icons (version 6.0.3) from Ionic team
 * https://github.com/ionic-team/ionicons
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-present Ionic (http://ionic.io/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
export class OdsLoadContent {
  private contentCache = new Map<string, string>();
  private contentValidators: Array<(content: string) => string> = [];
  private io?: IntersectionObserver;
  private readonly logger = new OdsLogger('OdsLoadContent');
  private requestCache = new Map<string, Promise<string | undefined> | undefined>();

  constructor(contentValidators: Array<(content: string) => string> = []) {
    this.contentValidators = contentValidators;
  }

  /**
   * load a given url only in case of element is visible in browser.
   * check first the cache and if not yet cached, make the call and cache it.
   * the cached content can be sanitized with the validators.
   * @param url - url of the content to load
   * @param isVisible - is the element to display is visible in browser
   * @param sanitize - clean content with your own validators
   * @param isBrowser - browser context or not
   */
  load(url: string, isVisible: boolean, sanitize = true, isBrowser = true): Promise<string | undefined> {
    return new Promise<string | undefined>((resolve, reject) => {

      if (isBrowser && isVisible && url) {
        if (this.contentCache.has(url)) {
          // sync if it's already loaded
          resolve(this.contentCache.get(url));
        } else {
          // async if it hasn't been loaded
          this.getContent(url, sanitize)
            .then(() => resolve(this.contentCache.get(url)))
            .catch(reason => reject(reason));
        }
      } else {
        resolve(undefined);
      }

    });
  }

  onDestroy(): void {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  /**
   * wait for calling a callback only when the element is visible in the browser, for lazy mode.
   * if lazy not enabled, it calls directly the callback.
   * an intersection observer is used in order to allow the detection.
   * if the browser does not support it, the lazy mode is not applied.
   * @param el - html element to check visibility
   * @param rootMargin - margin trigger on the viewport border used to detect visibility
   * @param cb - callback to call when visible
   * @param lazy - enable or not the lazy mode
   * @param isBrowser - is browser context or not
   */
  waitUntilVisible(el: HTMLElement, rootMargin: string, cb: () => void, lazy: boolean, isBrowser = true): void {
    if (isBrowser && lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      this.logger.log('[waitUntilVisible] use intersection');
      const io = (this.io = new window.IntersectionObserver(
        (data: IntersectionObserverEntry[]) => {
          this.logger.log('[waitUntilVisible] compute change');
          if (data[ 0 ].isIntersecting) {
            this.logger.log('[waitUntilVisible] isIntersecting');
            io.disconnect();
            this.io = undefined;
            cb();
          }
        },
        { rootMargin },
      ));
      this.logger.log('[waitUntilVisible] observe');
      io.observe(el);
    } else {
      this.logger.log('[waitUntilVisible] no using intersection');
      cb();
    }
  }

  /**
   * get the cached content of url or fetch it.
   * requests are also cached in order to not doing multiple times the same.
   * @param url - url to fetch if needed
   * @param sanitize - apply validators on the retrieved content or not
   */
  private getContent(url: string, sanitize: boolean) {
    // check cache
    let req = this.requestCache.get(url);

    if (!req) {
      // check browser fetch availability
      if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
        // console.log('getContent trigger fetch', url)
        // we don't already have a request
        req = fetch(url)
          .then((rsp) => {
            // console.log('getContent trigger fetched', rsp.statusText);
            if (rsp.ok) {
              return rsp.text().then((svgContent) => {
            // console.log('getContent svgContent', svgContent);
                if (svgContent && sanitize) {
                  svgContent = this.sanitize(svgContent, url);
                }
                this.contentCache.set(url, svgContent || '');
                return svgContent;
              });
            }
            this.logger.error('[getContent]', 'response is not ok', { url });
            this.contentCache.set(url, '');
            return;
          })
          .catch((error) => {
            this.logger.error('[getContent]', 'request failed', { url });
            this.contentCache.set(url, '');
            throw error;
          });

        // set request into cache
        this.requestCache.set(url, req);
      } else {
        // on server side rendering, resolve it as empty content
        this.contentCache.set(url, '');
        return Promise.resolve();
      }
    }

    return req;
  }

  private sanitize(content: string, url: string) {
    let sanitized = content;
    this.contentValidators.forEach((validator) => {
      try {
        sanitized = validator(sanitized);
      } catch (e) {
        this.logger.error('[sanitize]', 'error calling validator for the loaded content from url', { url });
      }
    });
    return sanitized;
  }
}
