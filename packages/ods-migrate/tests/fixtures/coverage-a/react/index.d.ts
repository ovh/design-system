export type ReactNode = string | number | boolean | null | undefined | ReactElement | Iterable<ReactNode>;

export interface ReactElement {
  type: unknown;
  props: unknown;
  key: string | null;
}
