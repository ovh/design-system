import { OdsChip } from './ods-chip';
import { OdsChipSize } from './ods-chip-size';
import { OdsChipVariant } from './ods-chip-variant';
import { OdsComponentController } from '../ods-component-controller';
import { OdsLogger } from '../../logger/ods-logger';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsWarnComponentAttribute } from '../../logger/ods-warn-logger';

/**
 * common controller logic for chip component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsChipController extends OdsComponentController<OdsChip> {
  private readonly logger = new OdsLogger('OdsChipController');

  constructor(component: OdsChip) {
    super(component);
  }

  /**
   * validating that the color, the size and the variant have correct values
   * and warn the user if not
   */
  validateAttributes(): void {
    const logger = this.logger;
    OdsWarnComponentAttribute<OdsThemeColorIntent, OdsChip>({
      logger,
      attributeValues: OdsThemeColorIntent as Record<string, unknown>,
      attributeName: 'color',
      attribute: this.component.color
    });
    OdsWarnComponentAttribute<OdsChipSize, OdsChip>({
      logger,
      attributeValues: OdsChipSize as Record<string, unknown>,
      attributeName: 'size',
      attribute: this.component.size
    });
    OdsWarnComponentAttribute<OdsChipVariant, OdsChip>({
      logger,
      attributeValues: OdsChipVariant as Record<string, unknown>,
      attributeName: 'variant',
      attribute: this.component.variant
    });
  }
}
