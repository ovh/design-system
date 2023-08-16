import type { OdsBoolean, OdsDefUndef } from '@ovhcloud/ods-common-core/src';

/*export type OdsE2EAllPossibleAttributes<T> = Record<OdsE2EAttributes<T>>;

enum Toto {
  A = 'a',
  B = 'b',
}
interface Attributes {
  a: number;
  b: Toto;
  c?: string;
  d: boolean;
  e: string;
}

type AttributesE2eListGen<ATTR, NonDefKeys> = {
  [key in keyof ATTR]: key extends NonDefKeys ? [undefined, ''] : ATTR[key] extends boolean ? [false, true] : Array<ATTR[key]>;
};
type AttributesForE2e<Attributes, Keys extends keyof Attributes> = Required<Pick<Attributes, Keys>>;
type AttributeE2eKeys<Attributes, Keys extends keyof Attributes> = keyof Pick<Attributes, Keys>;
type AttributesE2eCombinationConfig<Attributes, Keys extends keyof Attributes, NonDefKeys extends keyof Attributes> = AttributesE2eListGen<
  AttributesForE2e<Attributes, Keys>,
  NonDefKeys
>;

| type attributeE2eUnion = AttributeE2eKeys<Attributes, 'b' | 'a' | 'c' | 'd' | 'e'>; |

const combinations: AttributesE2eCombinationConfig<Attributes, attributeE2eUnion, 'e'> = {
  a: [1, 2],
  b: [Toto.A, Toto.B],
  c: [],
  d: [false, true],
  e: [undefined],
};

const oneAttributeKey: attributeE2eUnion = 'b';

////*/

type OdsE2EAllPossibleAttributes<T, DefUndefKeys> = {
  [key in keyof T]: key extends DefUndefKeys ? OdsDefUndef : T[key] extends boolean ? OdsBoolean : T[key][];
};

export {
  OdsE2EAllPossibleAttributes
}
