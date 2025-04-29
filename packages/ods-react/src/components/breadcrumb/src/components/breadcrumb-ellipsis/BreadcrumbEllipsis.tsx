import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';
import { BreadcrumbSeparator } from '../breadcrumb-separator/BreadcrumbSeparator';
import style from './breadcrumbEllipsis.module.scss';

interface BreadcrumbEllipsisProp extends ComponentPropsWithoutRef<'li'> {
  onExpand: () => void,
}

const BreadcrumbEllipsis: FC<BreadcrumbEllipsisProp> = ({ onExpand }): JSX.Element => {
  return (
    <li className={ style['breadcrumb-ellipsis'] }>
      <button
        className={ style['breadcrumb-ellipsis__button'] }
        onClick={ onExpand }>
        ...
      </button>

      <BreadcrumbSeparator />
    </li>
  );
};

BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  BreadcrumbEllipsis,
  type BreadcrumbEllipsisProp,
};
