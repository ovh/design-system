import { odsIsTermInEnum } from '../types/guard/ods-is-term-in-enum';

interface OdsWarnComponent<T, Component> {
  attributeName: string & keyof Component;
  attribute: T | undefined;
}

export interface OdsWarnEnumComponent<T, Component> extends OdsWarnComponent<T, Component> {
  attributeValues: Record<string, unknown>;
}

export interface OdsWarnRangeComponent<Component> extends OdsWarnComponent<number, Component> {
  min: number;
  max: number;
}

type OdsWarnType<T, Component> = T extends number ? OdsWarnRangeComponent<Component> : OdsWarnEnumComponent<T, Component>;

function OdsWarnComponentEnumAttribute<T, Component>(params: OdsWarnEnumComponent<T, Component>): void {
  if (!odsIsTermInEnum(params.attribute, params.attributeValues)) {
    console.warn(`The ${params.attributeName} attribute must have a value from [${Object.values(params.attributeValues).join(', ')}]`);
  }
}

function OdsWarnComponentRangeAttribute<Component>(params: OdsWarnRangeComponent<Component>): void {
  if (params.attribute && (params.attribute > params.max || params.attribute < params.min)) {
    console.warn(
      `The value attribute must be in bounds of [${[params.min, params.max].join(', ')}]`,
    );
  }
}

export function OdsWarnComponentAttribute<T, Component>(params: OdsWarnType<T, Component>, required = false) {
  if (required && !params.attribute) {
    return console.warn(`Attribute ${params.attributeName} is required.`);
  }
  if (typeof params.attribute === 'number') {
    return OdsWarnComponentRangeAttribute<Component>(<OdsWarnRangeComponent<Component>>params);
  }
  return OdsWarnComponentEnumAttribute<T, Component>(<OdsWarnEnumComponent<T, Component>>params);
}
