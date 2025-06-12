import type { ComponentPropsWithRef, FC, ReactNode } from 'react';
import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { useCombobox } from '../../context/useCombobox';
import style from './comboboxItem.module.scss';

type HighlightInfo = {
  highlightClass: string;
  searchText: string;
};

type ComboboxItem = {
  disabled?: boolean;
  highlightInfo?: HighlightInfo;
  isNewElement?: boolean;
  label: string;
  value: string;
};

type ComboboxGroup = {
  disabled?: boolean;
  highlightInfo?: HighlightInfo;
  label: string;
  options: ComboboxItem[];
};

type ComboboxItemOrGroup = ComboboxItem | ComboboxGroup;

interface ComboboxItemProp extends ComponentPropsWithRef<'div'> {
  item: ComboboxItemOrGroup;
}

const HighlightWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { inputValue } = useComboboxContext();
  const { highlightResults } = useCombobox();

  if (!highlightResults || !inputValue) {
    return <>{ children }</>;
  }

  const searchText = inputValue.toLowerCase();

  const highlightText = (text: string): (React.JSX.Element | string)[] => {
    const parts = text.split(new RegExp(`(${searchText})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchText ? (
        <span key={ i } className={ style[ 'combobox-item__highlight' ] }>{ part }</span>
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

const ComboboxItemText: FC<ComponentPropsWithRef<'div'> & {
  label: string;
  isNewElement?: boolean
}> = forwardRef(({ label, isNewElement, ...props }, ref) => {
  const { newElementLabel } = useCombobox();

  return (
    <div ref={ ref } { ...props }>
      <HighlightWrapper>
        { isNewElement ? `${ newElementLabel }${ label }` : label }
      </HighlightWrapper>
    </div>
  );
});

const ComboboxItem: FC<ComboboxItemProp> = forwardRef(({
  item,
  ...props
}, ref): JSX.Element | null => {
  const { customOptionRenderer } = useCombobox();

  if ('options' in item) {
    return null;
  }

  const displayLabel = item.label;

  return (
    <VendorCombobox.Item
      className={ classNames(style[ 'combobox-item' ]) }
      ref={ ref }
      item={ item }
      { ...props }
    >
      { customOptionRenderer ? (
        <HighlightWrapper>
          { customOptionRenderer(item) }
        </HighlightWrapper>
      ) : (
        <ComboboxItemText label={ displayLabel } isNewElement={ item.isNewElement } />
      ) }
    </VendorCombobox.Item>
  );
});

export { type ComboboxGroup, ComboboxItem, type ComboboxItemProp, type ComboboxItemOrGroup, type HighlightInfo };
