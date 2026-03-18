import { type FC, type JSX, type ReactNode } from 'react';
import { highlightNode } from '../../../../../utils/element';
import style from './queryFilterHighlight.module.scss';

interface QueryFilterHighlightProp {
  children: ReactNode,
  highlight?: boolean,
  inputValue: string,
}

const QueryFilterHighlight: FC<QueryFilterHighlightProp> = ({
  children,
  highlight,
  inputValue,
}): JSX.Element => {
  if (!highlight || !inputValue) {
    return <>{ children }</>;
  }

  return (
    <>
      {
        highlightNode(children, inputValue.toLowerCase(), ({ key, part }) => (
          <span
            className={ style[ 'query-filter-highlight' ] }
            key={ key }>
            { part }
          </span>
        ))
      }
    </>
  );
};

export {
  QueryFilterHighlight,
  type QueryFilterHighlightProp,
};
