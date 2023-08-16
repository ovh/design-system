type OdsE2EAttributesRawKeys<T, K extends keyof T> = Pick<T, K>;
type OdsE2EAttributesAllKeys<T, K extends keyof T> = Required<OdsE2EAttributesRawKeys<T, K>>;

type OdsE2EAttributes<T, K extends keyof T> = OdsE2EAttributesRawKeys<T, K>;

export {
  OdsE2EAttributesRawKeys,
  OdsE2EAttributesAllKeys,
  OdsE2EAttributes
}
