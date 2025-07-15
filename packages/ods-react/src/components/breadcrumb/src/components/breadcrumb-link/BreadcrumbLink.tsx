import { type ComponentPropsWithoutRef, type ElementType, type ForwardedRef, type JSX, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Link } from '../../../../link/src';

interface BreadcrumbLinkProp<T extends ElementType = 'a'> {
  /** @internal */
  autoFocus?: boolean,
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
  autoFocus,
  isLast,
  ...props
}: BreadcrumbLinkProp<T> & Omit<ComponentPropsWithoutRef<T>, keyof BreadcrumbLinkProp<T>>, ref: ForwardedRef<HTMLAnchorElement | HTMLSpanElement>): JSX.Element {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useImperativeHandle(ref, () => {
    return (isLast ? spanRef.current : anchorRef.current) as HTMLAnchorElement | HTMLSpanElement;
  }, [isLast]);

  useEffect(() => {
    if (autoFocus) {
      if (anchorRef.current) {
        anchorRef.current.focus();
      }
    }
  }, [autoFocus, isLast]);

  if (isLast) {
    return (
      <span
        aria-current="page"
        ref={spanRef}
        {...props}
      />
    );
  }

  const Component = as || Link;
  return (
    <Component
      ref={anchorRef}
      {...props}
    />
  );
});

BreadcrumbLink.displayName = 'BreadcrumbLink';

export {
  BreadcrumbLink,
  type BreadcrumbLinkProp,
};
