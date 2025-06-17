import { useComboboxContext } from '@ark-ui/react/combobox';
import { type FC, type ReactNode } from 'react';
import React from 'react';
import { useCombobox } from '../../context/useCombobox';
import style from './comboboxHighlight.module.scss';

const ComboboxHighlight: FC<{ children: ReactNode }> = ({ children }) => {
  const { inputValue } = useComboboxContext();
  const { highlightResults } = useCombobox();

  if (!highlightResults || !inputValue) {
    return <>{ children }</>;
  }

  const searchText = inputValue.toLowerCase();
  
  // Escape special regex characters
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const highlightText = (text: string): (React.JSX.Element | string)[] => {
    const escapedSearchText = escapeRegExp(searchText);
    const parts = text.split(new RegExp(`(${escapedSearchText})`, 'gi'));
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

    if (React.isValidElement(node)) {
      const children = React.Children.map(node.props.children, processNode);
      return React.cloneElement(node, node.props, children);
    }

    return node;
  };

  return <>{ processNode(children) }</>;
};

export { ComboboxHighlight };