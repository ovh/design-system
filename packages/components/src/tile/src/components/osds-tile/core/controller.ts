import type { OsdsTile } from '../osds-tile';

import { OdsWarnComponentAttribute } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

import { ODS_TILE_SIZE } from '../constants/tile-size';
import { ODS_TILE_VARIANT } from '../constants/tile-variant';

/**
 * common controller logic for tile component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
class OdsTileController {
  protected component: OsdsTile;

  constructor(component: OsdsTile) {
    this.component = component;
  }

  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    OdsWarnComponentAttribute<ODS_THEME_COLOR_INTENT, OsdsTile>({
      attributeValues: ODS_THEME_COLOR_INTENT,
      attributeName: 'color',
      attribute: this.component.color,
    });
    OdsWarnComponentAttribute<ODS_TILE_SIZE, OsdsTile>({
      attributeValues: ODS_TILE_SIZE,
      attributeName: 'size',
      attribute: this.component.size,
    });
    OdsWarnComponentAttribute<ODS_TILE_VARIANT, OsdsTile>({
      attributeValues: ODS_TILE_VARIANT,
      attributeName: 'variant',
      attribute: this.component.variant,
    });
  }
}

export {
  OdsTileController,
};
