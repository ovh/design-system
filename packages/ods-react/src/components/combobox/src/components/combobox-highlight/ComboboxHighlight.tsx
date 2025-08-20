// import { useComboboxContext } from '@ark-ui/react/combobox';
import { Children, type FC, type JSX, type ReactNode, cloneElement, isValidElement } from 'react';
// import { useCombobox } from '../../contexts/useCombobox';
// import { splitTextBySearchTerm } from '../../controller/combobox';
import style from './comboboxHighlight.module.scss';

// TODO controller
function splitTextBySearchTerm(text: string, searchTerm: string): string[] {
  if (!text || !searchTerm) {
    return [text];
  }

  const escapedValue = searchTerm.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedValue})`, 'gi');
  return text.split(regex);
}

interface ComboboxHighlightProp {
  children: ReactNode,
  highlight?: boolean,
  inputValue: string,
  isNew?: boolean,
}

function highlightText(text: string, searchText: string): (JSX.Element | string)[] {
  const parts = splitTextBySearchTerm(text, searchText);

  return parts.map((part, i) =>
    part.toLowerCase() === searchText ? (
      <span key={ i } className={ style[ 'combobox-highlight__highlight' ] }>{ part }</span>
    ) : part,
  );
}

function processNode(node: ReactNode, searchText: string): ReactNode {
  if (typeof node === 'string') {
    return highlightText(node, searchText);
  }

  if (isValidElement(node)) {
    const children = Children.map(node.props.children, (n) => processNode(n, searchText));
    return cloneElement(node, node.props, children);
  }

  return node;
}

const ComboboxHighlight: FC<ComboboxHighlightProp> = ({
  children,
  highlight,
  inputValue,
  isNew,
}): JSX.Element => {
  if (!highlight || !inputValue || isNew) {
    return <>{ children }</>;
  }

  return <>{ processNode(children, inputValue.toLowerCase()) }</>;
};

export {
  ComboboxHighlight,
  type ComboboxHighlightProp,
};
