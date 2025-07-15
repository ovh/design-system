import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, cloneElement, forwardRef } from 'react';
import { getValidChildren } from '../../../../../utils/element';
import { BreadcrumbLink } from '../breadcrumb-link/BreadcrumbLink';
import { BreadcrumbSeparator } from '../breadcrumb-separator/BreadcrumbSeparator';
import style from './breadcrumbItem.module.scss';

interface BreadcrumbItemProp extends ComponentPropsWithRef<'li'> {
  /** @internal */
  autoFocus?: boolean,
  /** @internal */
  isLast?: boolean,
}

const BreadcrumbItem: FC<BreadcrumbItemProp> = forwardRef(({
  autoFocus,
  children,
  className,
  isLast,
  ...props
}, ref): JSX.Element => {
  const validChildren = getValidChildren(children);

  const clones = validChildren.map((child) => {
    if (child.type === BreadcrumbLink) {
      return cloneElement(child, {
        autoFocus,
        isLast,
      });
    }

    return child;
  });

  return (
    <li
      className={ classNames(style['breadcrumb-item'], className) }
      ref={ ref }
      role="listitem"
      { ...props }>
      { clones }

      {
        !isLast &&
        <BreadcrumbSeparator />
      }
    </li>
  );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';

export {
  BreadcrumbItem,
  type BreadcrumbItemProp,
};
