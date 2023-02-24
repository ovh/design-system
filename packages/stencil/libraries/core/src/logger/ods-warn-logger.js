import { odsIsTermInEnum } from '../types/guard/ods-is-term-in-enum';
function OdsWarnComponentEnumAttribute(params) {
  if (!odsIsTermInEnum(params.attribute, params.attributeValues)) {
    params.logger.warn(`The ${params.attributeName} attribute must have a value from [${Object.values(params.attributeValues).join(', ')}]`);
  }
}
function OdsWarnComponentRangeAttribute(params) {
  if (params.attribute && (params.attribute > params.max || params.attribute < params.min)) {
    params.logger.warn(`The value attribute must be in bounds of [${[params.min, params.max].join(', ')}]`);
  }
}
export function OdsWarnComponentAttribute(params, required = false) {
  if (required && !params.attribute) {
    return params.logger.warn(`Attribute ${params.attributeName} is required.`);
  }
  if (typeof params.attribute === 'number') {
    return OdsWarnComponentRangeAttribute(params);
  }
  else {
    return OdsWarnComponentEnumAttribute(params);
  }
}
