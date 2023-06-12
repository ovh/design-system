import { EventEmitter } from '@stencil/core';

type NonFunctionKeys<T> = {
  // get the type of P at the end for example if the type is "" I want string
  [P in keyof T]-?: T[P] extends Function | EventEmitter<any> | HTMLElement ? never : P;
}[keyof T];

type ExtractDefaultValueType<T> = {
  [P in keyof T]: T[P] extends string ? string : T[P] extends number ? number : T[P] extends boolean ? boolean : T[P];
}

export type ExtractAttributesType<T> = Pick<ExtractDefaultValueType<T>, NonFunctionKeys<T>>;

type ExtractKeys<T, TKeyValue> = NonNullable<
  { [K in keyof T]: TKeyValue extends T[K] ? K : never }[keyof T]
>;
type ExcludeKeys<T, TKeyValue> = Exclude<keyof T, ExtractKeys<T, TKeyValue>>;

export type RequiredAttributes<T> = Pick<T, ExcludeKeys<T, undefined>>;
