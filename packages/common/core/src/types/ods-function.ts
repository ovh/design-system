/**
 * describe a type that correspond to a function
 */
export type OdsFunction<Arguments = unknown, Returned = unknown> = (...args: Arguments[]) => Returned;
