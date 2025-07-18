import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { BREADCRUMB_I18N, TRANSLATION } from '../../constants/breadcrumb-i18n';
import { useBreadcrumb } from '../../contexts/useBreadcrumb';
import { BreadcrumbSeparator } from '../breadcrumb-separator/BreadcrumbSeparator';
import style from './breadcrumbEllipsis.module.scss';

interface BreadcrumbEllipsisProp extends Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'onClick'> {
  onExpand: () => void,
}

const BreadcrumbEllipsis: FC<BreadcrumbEllipsisProp> = ({ onExpand, ...props }): JSX.Element => {
  const { i18n, locale } = useBreadcrumb();
  const { translate } = useI18n(TRANSLATION, locale, i18n);

  return (
    <li className={ style['breadcrumb-ellipsis'] }>
      <button
        { ...props }
        aria-label={ translate(BREADCRUMB_I18N.ellipsisButton) }
        className={ style['breadcrumb-ellipsis__button'] }
        onClick={ onExpand }
        type="button">
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
