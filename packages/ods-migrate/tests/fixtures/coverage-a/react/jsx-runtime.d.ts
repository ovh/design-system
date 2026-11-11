import type { ReactElement } from './index';

export namespace JSX {
  type Element = ReactElement;
  interface ElementChildrenAttribute { children: {} }
  interface IntrinsicAttributes { key?: string | number | null }
  interface IntrinsicElements {
    div: { className?: string; children?: unknown };
  }
}

export function jsx(type: unknown, props: unknown, key?: string): ReactElement;
export function jsxs(type: unknown, props: unknown, key?: string): ReactElement;
export const Fragment: unique symbol;
