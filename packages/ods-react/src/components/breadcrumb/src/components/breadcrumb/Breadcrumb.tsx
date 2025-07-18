import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactElement, cloneElement, forwardRef, useId, useMemo, useState } from 'react';
import { getValidChildren } from '../../../../../utils/element';
import { BreadcrumbProvider, type BreadcrumbRootProp } from '../../contexts/useBreadcrumb';
import { getFirstCollapsedIdx, isItemCollapsed } from '../../controller/breadcrumb';
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
  const generatedId = useId();
  const computedId = id ?? generatedId;
  const [isExpanded, setIsExpanded] = useState(noCollapse);
  const validChildren = getValidChildren(children);
  const count = validChildren.length;
  const needEllipsis = !isExpanded && count > collapseThreshold;
  let ellipsisAdded = false;

  const [focusIdx, setFocusIdx] = useState<number | null>(null);
  const firstCollapsedIdx: number | null = useMemo(() =>
    getFirstCollapsedIdx(
      count,
      nbItemsBeforeEllipsis,
      nbItemsAfterEllipsis,
      needEllipsis,
    ),
  [count, nbItemsBeforeEllipsis, nbItemsAfterEllipsis, needEllipsis],
  );

  const clones = validChildren.reduce((res, child, idx) => {
    const isCollapsed = needEllipsis && isItemCollapsed(idx, count, nbItemsBeforeEllipsis, nbItemsAfterEllipsis);

    if (isCollapsed) {
      if (!ellipsisAdded) {
        res.push(
          <BreadcrumbEllipsis
            aria-controls={ computedId }
            key={ idx }
            onExpand={ () => {
              setIsExpanded(true);
              setFocusIdx(firstCollapsedIdx);
              onExpand && onExpand();
            } }
          />,
        );
        ellipsisAdded = true;
      }
      return res;
    }

    res.push(cloneElement(child, {
      autoFocus: isExpanded && focusIdx !== null && idx === focusIdx,
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
