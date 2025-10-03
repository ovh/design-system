import { type FC, type JSX, type ReactNode } from 'react';
import { highlightNode } from '../../controller/combobox';
import style from './comboboxHighlight.module.scss';

interface ComboboxHighlightProp {
  children: ReactNode,
  highlight?: boolean,
  inputValue: string,
}

const ComboboxHighlight: FC<ComboboxHighlightProp> = ({
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
            className={ style[ 'combobox-highlight' ] }
            key={ key }>
            { part }
          </span>
        ))
      }
    </>
  );
};

export {
  ComboboxHighlight,
  type ComboboxHighlightProp,
};
