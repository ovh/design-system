import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactElement, cloneElement, forwardRef, useState } from 'react';
import { getValidChildren } from '../../../../../utils/element';
import { isItemCollapsed } from '../../controller/breadcrumb';
import { BreadcrumbEllipsis } from '../breadcrumb-ellipsis/BreadcrumbEllipsis';
import style from './breadcrumb.module.scss';

interface BreadcrumbProp extends ComponentPropsWithRef<'nav'> {
  collapseThreshold?: number,
  nbItemsAfterEllipsis?: number,
  nbItemsBeforeEllipsis?: number,
  noCollapse?: boolean,
  onExpand?: () => void,
}

const Breadcrumb: FC<BreadcrumbProp> = forwardRef(({
  children,
  className,
  collapseThreshold = 4,
  nbItemsAfterEllipsis = 1,
  nbItemsBeforeEllipsis = 1,
  noCollapse = false,
  onExpand,
  ...props
}, ref): JSX.Element => {
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
            key={ idx }
            onExpand={ () => {
              setIsExpanded(true);
              onExpand && onExpand();
            }} />,
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
    <nav
      className={ classNames(style['breadcrumb'], className) }
      ref={ ref }
      { ...props }>
      <ol className={ style['breadcrumb__list'] }>
        { clones }
      </ol>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';

export {
  Breadcrumb,
  type BreadcrumbProp,
};
