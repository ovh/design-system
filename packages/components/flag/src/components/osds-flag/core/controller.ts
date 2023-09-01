import type { OsdsFlag } from '../osds-flag';
import type { ODS_FLAG_ISO_CODE_UNION } from '../constants/flag-iso-code';
import {
  OdsLogger,
  odsIsTermInEnum,
  OdsLoadContent,
  OdsSvgValidator,
  odsGetSrc,
  odsGetAssetPath
} from '@ovhcloud/ods-common-core';
import { ODS_FLAG_ISO_CODE, ODS_FLAG_ISO_CODES } from '../constants/flag-iso-code';

/**
 * common controller logic for flag component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsFlagController {
  private readonly logger = new OdsLogger('OdsFlagController');
  protected component: OsdsFlag;
  private svgLoadContent = new OdsLoadContent([
    (content) => OdsSvgValidator.validateContent(content)
  ]);

  constructor(component: OsdsFlag) {
    this.component = component
  }

  /**
   * load the content.
   * first it validates that the iso code is correct, then trigger the loading
   * @param isVisible - is the element to load is visible or not
   * @param isBrowser - is the context is browser one or not
   */
  load(isVisible: boolean, isBrowser = true): Promise<string | void> {
    this.validateISO(this.component.iso);
    const url = this.getUrl();
    return this.svgLoadContent.load(url ? url : '', isVisible, true, isBrowser);
  }

  onDestroy(): void {
    this.svgLoadContent.onDestroy();
  }


  /**
   * initialize the component logical.
   * wait for the element to load to be visible (if lazy enabled),
   * else load it without delay.
   * @param onBecomeVisible - callback to cal when comes visible
   * @param isBrowser - is the context is browser
   */
  onInit(onBecomeVisible: () => void, isBrowser = true): void {
    this.svgLoadContent.waitUntilVisible(this.component.hostElement, '50px', () => {
      onBecomeVisible();
      this.component.load();
    }, this.component.lazy, isBrowser);
  }

  /**
   * warn the user the iso code he entered is not correct.
   * if that the case, clean up the wrong iso code.
   * not blocking.
   * @param iso - iso code
   */
  validateISO(iso?: ODS_FLAG_ISO_CODE_UNION): void {
    if (!iso || !odsIsTermInEnum(iso, ODS_FLAG_ISO_CODE)) {
      this.component.iso = undefined;
      this.logger.warn(`The iso attribute must be one of those values ${ODS_FLAG_ISO_CODES}`);
    }
  }

  /**
   * get the url of the content to load.
   * in case of `src` specified on the component, the url is replaced with this one.
   * in the other cases, it gets the url corresponding to the iso code
   */
  private getUrl() {
    const url = odsGetSrc(this.component.src);
    if (url) {
      return url;
    }

    const iso = this.component.iso;
    if (iso) {
      return this.getUrlForIso(iso, this.component.assetPath);
    }

    return;
  }

  /**
   * get the url for a particular iso code.
   * it takes into account the asset path of `ods` or the custom path specified on the component
   * @param iso - iso code of the flag
   * @param customPath - optional override path
   */
  private getUrlForIso(iso: ODS_FLAG_ISO_CODE_UNION, customPath?: string) {
    const path = odsGetAssetPath(`${iso}.svg`, customPath);
    return this.component.getAssetPath(`${path}`);
  }
}

export { OdsFlagController }
