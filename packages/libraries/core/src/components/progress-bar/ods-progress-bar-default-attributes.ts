import { OdsProgressBarAttributes } from './ods-progress-bar-attributes';

export const odsProgressBarDefaultAttributesDoc  = {
  max: 100,
  min: 0,
  value: 0,
} as const;

export const odsProgressBarDefaultAttributes = odsProgressBarDefaultAttributesDoc as OdsProgressBarAttributes;
