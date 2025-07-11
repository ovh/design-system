import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactElement, cloneElement, forwardRef, useId, useState } from 'react';
import { getValidChildren } from '../../../../../utils/element';
import { BreadcrumbProvider, type BreadcrumbRootProp } from '../../contexts/useBreadcrumb';
import { isItemCollapsed } from '../../controller/breadcrumb';
import { BreadcrumbEllipsis } from '../breadcrumb-ellipsis/BreadcrumbEllipsis';
import style from './breadcrumb.module.scss';

interface BreadcrumbProp extends ComponentPropsWithRef<'nav'>, BreadcrumbRootProp {}

const Breadcrumb: FC<BreadcrumbProp> = forwardRef(({
  children,
  className,
  collapseThreshold = 4,
  i18n,
  id,
  locale,
  nbItemsAfterEllipsis = 1,
  nbItemsBeforeEllipsis = 1,
  noCollapse = false,
  onExpand,
  ...props
}, ref): JSX.Element => {
  const computedId = id ?? useId();
  const [isExpanded, setIsExpanded] = useState(noCollapse);
  const validChildren = getValidChildren(children);
  const count = validChildren.length;
  const needEllipsis = !isExpanded && count > collapseThreshold;
  let ellipsisAdded = false;

  const clones = validChildren.reduce((res, child, idx) => {
    const isCollapsed = needEllipsis && isItemCollapsed(idx, count, nbItemsBeforeEllipsis, nbItemsAfterEllipsis);

    if (isCollapsed) {
      if (!ellipsisAdded) {
        res.push(
          <BreadcrumbEllipsis
            controlledId={ computedId }
            key={ idx }
            onExpand={ () => {
              setIsExpanded(true);
              onExpand && onExpand();
            } }
          />,
        );
        ellipsisAdded = true;
      }
      return res;
    }
    res.push(cloneElement(child, {
      isLast: count === idx + 1,
    }));
    return res;
  }, [] as ReactElement[]);

  return (
    <BreadcrumbProvider i18n={i18n} locale={locale}>
      <nav
        aria-expanded={!noCollapse && count > collapseThreshold ? isExpanded : undefined}
        className={ classNames(style['breadcrumb'], className) }
        id={ computedId }
        ref={ ref }
        role="navigation, list"
        { ...props }>
        <ol className={ style['breadcrumb__list'] }>
          { clones }
        </ol>
      </nav>
    </BreadcrumbProvider>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

export {
  Breadcrumb,
  type BreadcrumbProp,
};
