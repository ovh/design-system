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
  return isValidElement(element) && !!(element.props as { children?: ReactNode }).children;
}

function highlightNode(node: ReactNode | string, searchText: string, markWrapper: MarkWrapper): ReactNode {
  if (typeof node === 'string') {
    return highlightText(node, searchText, markWrapper);
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    const children = Children.map(element.props.children, (n) => highlightNode(n, searchText, markWrapper));
    return cloneElement(element, element.props, children);
  }

  return node;
}

function highlightText(text: string, searchText: string, markWrapper: MarkWrapper): (JSX.Element | string)[] {
  const parts = splitTextBySearchTerm(text, searchText);

  return parts.map((part, idx) =>
    part.toLowerCase() === searchText ? markWrapper({ key: idx, part }) : part);
}

// Native scrollIntoView also scrolls every scrollable ancestor, up to the page
// (and the host page when rendered in an iframe): highlighting an option on
// hover would then move the page under the pointer. This one only scrolls the
// closest scroll container (auto or scroll overflow, even if the list is
// short enough not to overflow: walking past it would reach the page again),
// with the "nearest" block alignment.
function scrollIntoParentView(element: HTMLElement): void {
  const view = element.ownerDocument.defaultView;
  let container = element.parentElement;

  while (container && !/auto|scroll/.test(view?.getComputedStyle(container).overflowY ?? '')) {
    container = container.parentElement;
  }

  if (!container || container.scrollHeight <= container.clientHeight) {
    return;
  }

  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  if (elementRect.top < containerRect.top) {
    container.scrollTop -= containerRect.top - elementRect.top;
  } else if (elementRect.bottom > containerRect.bottom) {
    container.scrollTop += elementRect.bottom - containerRect.bottom;
  }
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
  scrollIntoParentView,
};
