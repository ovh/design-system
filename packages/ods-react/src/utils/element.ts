import { Children, type JSX, type ReactElement, type ReactNode, cloneElement, isValidElement } from 'react';

type MarkWrapper = ({ key, part }: { key: string | number, part: string }) => JSX.Element;

function elementParentHasAttribute(element: HTMLElement | null, attribute: string, values?: string[]): boolean {
  if (!element || !element.parentElement || element.parentElement.tagName === 'BODY') {
    return false;
  }

  const parentAttribute = element.parentElement.getAttribute(attribute);

  if (parentAttribute) {
    return values && values.length ? values.indexOf(parentAttribute) > -1 : true;
  }

  return elementParentHasAttribute(element.parentElement, attribute, values);
}

function elementToString(element: ReactNode): string {
  if (typeof element === 'undefined' || element === null || typeof element === 'boolean') {
    return '';
  }

  if (JSON.stringify(element) === '{}') {
    return '';
  }

  return element.toString();
}

// Inspired by https://github.com/fernandopasik/react-children-utilities/blob/main/src/lib/onlyText.ts
function getElementText(element: ReactNode | ReactNode[]): string {
  if (!(element instanceof Array) && !isValidElement(element)) {
    return elementToString(element);
  }

  return Children.toArray(element).reduce<string>((text, child: ReactNode) => {
    let newText = '';

    if (hasChildren(child)) {
      newText = getElementText((child as ReactElement<{ children: ReactNode | ReactNode[] }>).props.children);
    } else if (isValidElement(child)) {
      newText = '';
    } else {
      newText = elementToString(child);
    }

    return text.concat(newText);
  }, '');
}

function getValidChildren(element: ReactNode): ReactElement[] {
  return Children.toArray(element).filter(isValidElement);
}

function hasChildren(element: ReactNode): boolean {
  return isValidElement(element) && !!element.props.children;
}

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
  elementParentHasAttribute,
  getElementText,
  getValidChildren,
  highlightNode,
};
