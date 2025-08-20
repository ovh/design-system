import { Children, type JSX, type ReactNode, cloneElement, isValidElement } from 'react';

type MarkWrapper = ({ key, part }: { key: string | number, part: string }) => JSX.Element;

function highlightNode(node: ReactNode | string, searchText: string, markWrapper: MarkWrapper): ReactNode {
  if (typeof node === 'string') {
    return highlightText(node, searchText, markWrapper);
  }

  if (isValidElement(node)) {
    const children = Children.map(node.props.children, (n) => highlightNode(n, searchText, markWrapper));
    return cloneElement(node, node.props, children);
  }

  return node;
}

function highlightText(text: string, searchText: string, markWrapper: MarkWrapper): (JSX.Element | string)[] {
  const parts = splitTextBySearchTerm(text, searchText);

  return parts.map((part, idx) =>
    part.toLowerCase() === searchText ? markWrapper({ key: idx, part }) : part);
}

function splitTextBySearchTerm(text: string, searchTerm: string): string[] {
  if (!text || !searchTerm) {
    return [text];
  }

  const escapedValue = searchTerm.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedValue})`, 'gi');
  return text.split(regex);
}

export {
  highlightNode,
};
