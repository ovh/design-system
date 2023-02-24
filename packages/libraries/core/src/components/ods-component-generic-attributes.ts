/**
 * generic type of attributes for a component.
 * each attribute is a property
 */
export type OdsComponentGenericAttributes<T> = { [K in keyof T]: T[K] };
