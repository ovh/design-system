import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';
import style from './breadcrumbSeparator.module.scss';

interface BreadcrumbSeparatorProp extends ComponentPropsWithoutRef<'span'> {}

const BreadcrumbSeparator: FC<BreadcrumbSeparatorProp> = (): JSX.Element => {
  return (
    <span
      className={ style['breadcrumb-separator'] }
      role="presentation" />
  );
};

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export {
  BreadcrumbSeparator,
  type BreadcrumbSeparatorProp,
};
