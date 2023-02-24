/**
 * copy properties of a generic object.
 * it avoids index signature issue for instance
 */
export type OdsCopy<T> = { [K in keyof T]: T[K] };
