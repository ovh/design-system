import { useComboboxContext } from '@ark-ui/react/combobox';
import { Children, type FC, type JSX, type ReactNode, cloneElement, isValidElement } from 'react';
import { useCombobox } from '../../contexts/useCombobox';
import { splitTextBySearchTerm } from '../../controller/combobox';
import style from './comboboxHighlight.module.scss';

const ComboboxHighlight: FC<{ children: ReactNode }> = ({ children }) => {
  const { inputValue } = useComboboxContext();
  const { highlightResults } = useCombobox();

  if (!highlightResults || !inputValue) {
    return <>{ children }</>;
  }

  const searchText = inputValue.toLowerCase();

  const highlightText = (text: string): (JSX.Element | string)[] => {
    const parts = splitTextBySearchTerm(text, searchText);
    return parts.map((part, i) =>
      part.toLowerCase() === searchText ? (
        <span key={ i } className={ style[ 'combobox-highlight__highlight' ] }>{ part }</span>
      ) : part,
    );
  };

  const processNode = (node: ReactNode): ReactNode => {
    if (typeof node === 'string') {
      return highlightText(node);
    }

    if (isValidElement(node)) {
      const children = Children.map(node.props.children, processNode);
      return cloneElement(node, node.props, children);
    }

    return node;
  };

  return processNode(children);
};

export { ComboboxHighlight };