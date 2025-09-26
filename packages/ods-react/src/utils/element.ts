import { Children, type ReactElement, type ReactNode, isValidElement } from 'react';

function elementParentHasAttribute(element: HTMLElement | null, attribute: string, value?: string): boolean {
  if (!element || !element.parentElement || element.parentElement.tagName === 'BODY') {
    return false;
  }

  const parentAttribute = element.parentElement.getAttribute(attribute);

  if (parentAttribute) {
    return value ? parentAttribute === value : true;
  }

  return elementParentHasAttribute(element.parentElement, attribute, value);
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

export {
  elementParentHasAttribute,
  getElementText,
  getValidChildren,
};
