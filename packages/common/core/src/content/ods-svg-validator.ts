import {odsIsStr} from '../types/guard/ods-is-string';

/**
 * Validate a svg content.
 * It allows to avoid `script` element into the content and avoid hacks injection.
 * It checks that only one root element is retrieved and be a `svg` one.
 *
 * ---
 *
 * Code inspired by ion-icons (version 6.0.3) from Ionic team
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
export class OdsSvgValidator {

  static isValid(elm: HTMLElement): boolean {
    if (elm.nodeType === 1) {
      if (elm.nodeName.toLowerCase() === 'script') {
        return false;
      }

      for (let i = 0; i < elm.attributes.length; i++) {
        const name = elm.attributes[ i ].name;
        if (odsIsStr(name) && name.toLowerCase().indexOf('on') === 0) {
          return false;
        }
      }

      for (let i = 0; i < elm.childNodes.length; i++) {
        if (!this.isValid(elm.childNodes[ i ] as HTMLElement)) {
          return false;
        }
      }
    }
    return true;
  }

  static validateContent(svgContent: string): string {
    const div = document.createElement('div');
    div.innerHTML = svgContent;

    // setup this way to ensure it works on our buddy IE
    for (let i = div.childNodes.length - 1; i >= 0; i--) {
      if (div.childNodes[ i ].nodeName.toLowerCase() !== 'svg') {
        div.removeChild(div.childNodes[ i ]);
      }
    }

    // must only have 1 root element
    const svgElm = div.firstElementChild;
    if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
      const svgClass = svgElm.getAttribute('class') || '';
      svgElm.setAttribute('class', svgClass.trim());

      // root element must be an svg
      // lets double check we've got valid elements
      // do not allow scripts
      if (this.isValid(svgElm as HTMLElement)) {
        return div.innerHTML;
      }
    }
    return '';
  }
}
