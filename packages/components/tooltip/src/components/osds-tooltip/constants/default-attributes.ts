import type { OdsTooltipAttribute } from '../interfaces/attributes';

import { ODS_TOOLTIP_VARIANT } from './tooltip-variant';

const DEFAULT_ATTRIBUTE: OdsTooltipAttribute = Object.freeze({
  variant: ODS_TOOLTIP_VARIANT.standard,
});

export {
  DEFAULT_ATTRIBUTE,
};
