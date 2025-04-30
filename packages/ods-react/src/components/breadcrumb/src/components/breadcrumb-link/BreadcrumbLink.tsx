import { type ComponentPropsWithoutRef, type ElementType, type ForwardedRef, type JSX, forwardRef } from 'react';
import { Link } from '../../../../link/src';

interface BreadcrumbLinkProp<T extends ElementType = 'a'> {
  /**
   * @default-value='a'
   * Pass a component you may want to use as custom Link component.
   * Useful for example when using routing library like react-router.
   * */
  as?: T,
  /** @internal */
  isLast?: boolean,
}

const BreadcrumbLink = forwardRef(function BreadcrumbLink<T extends ElementType>({
  as,
  isLast,
  ...props
}: BreadcrumbLinkProp<T> & Omit<ComponentPropsWithoutRef<T>, keyof BreadcrumbLinkProp<T>>, ref: ForwardedRef<HTMLAnchorElement | HTMLSpanElement>): JSX.Element {
  if (isLast) {
    return (
      <span
        aria-current="page"
        ref={ ref as ForwardedRef<HTMLSpanElement> }
        { ...props } />
    );
  }

  const Component = as || Link;

  return (
    <Component
      ref={ ref as ForwardedRef<HTMLAnchorElement> }
      { ...props } />
  );
});

BreadcrumbLink.displayName = 'BreadcrumbLink';

export {
  BreadcrumbLink,
  type BreadcrumbLinkProp,
};
