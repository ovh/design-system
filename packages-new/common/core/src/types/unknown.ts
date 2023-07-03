/**
 * make properties optional and of type unknown
 * like Partial<T> but with properties as unknown
 */
export type Unknown<T> = {
  [P in keyof T]?: T[P] | unknown;
};
