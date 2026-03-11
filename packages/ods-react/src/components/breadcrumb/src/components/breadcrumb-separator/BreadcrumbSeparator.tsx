import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';
import { DIVIDER_ORIENTATION, DIVIDER_SPACING, Divider } from '../../../../divider/src';
import style from './breadcrumbSeparator.module.scss';

interface BreadcrumbSeparatorProp extends ComponentPropsWithoutRef<'span'> {}

const BreadcrumbSeparator: FC<BreadcrumbSeparatorProp> = (): JSX.Element => {
  return (
    <Divider className={ style['breadcrumb-separator']} orientation={DIVIDER_ORIENTATION.vertical} spacing={DIVIDER_SPACING._24} />
  );
};

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export {
  BreadcrumbSeparator,
  type BreadcrumbSeparatorProp,
};
