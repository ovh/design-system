import { OdsFileItemAttributes } from './ods-file-item-attributes';
import { OptionalAttributes } from '@ovhcloud/ods-core/src/utils/properties/ods-extract-attributes-type';

export const odsFileItemDefaultAttributes: OptionalAttributes<OdsFileItemAttributes>  = {
  error: false,
  progress: undefined,
} as const;
