import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
import { type OdsTooltipPosition } from '../constants/tooltip-position';

type DomElement = {
  arrow: HTMLElement,
  popper: HTMLElement,
  trigger: HTMLElement | null | undefined,
}

function findTriggerElement(triggerId: string, shadowDomTriggerId?: string): HTMLElement | undefined {
  const hostElement = document.querySelector<HTMLElement>(`#${triggerId}`);

  if (!hostElement) {
    console.warn(`[ods-tooltip] Unable to find trigger element in DOM with id: ${triggerId}`);
    return;
  }

  if (shadowDomTriggerId) {
    const shadowDomElement = hostElement.shadowRoot?.querySelector<HTMLElement>(`#${shadowDomTriggerId}`);

    if (!shadowDomElement) {
      console.warn(`[ods-tooltip] Unable to find trigger element in shadow DOM with id: ${shadowDomTriggerId}`);
      return;
    }

    return shadowDomElement;
  }

  return hostElement;
}

function hideTooltip(popperElement: HTMLElement, cleanUpCallback?: () => void): void {
  popperElement.style.display = 'none';

  if (cleanUpCallback) {
    cleanUpCallback();
  }
}

function showTooltip(position: OdsTooltipPosition, domElement: DomElement): () => void {
  if (!domElement.trigger) {
    return () => {};
  }

  domElement.popper.style.display = 'block';

  return autoUpdate(
    domElement.trigger,
    domElement.popper,
    () => update(position, domElement),
  );
}

async function update(position: OdsTooltipPosition, domElement: DomElement): Promise<void> {
  if (!domElement.trigger) {
    return;
  }

  return computePosition(domElement.trigger, domElement.popper, {
    middleware: [
      arrow({ element: domElement.arrow }),
      flip(),
      offset(8),
      shift({ padding: 5 }),
    ],
    placement: position,
  }).then(({ x, y, placement, middlewareData }) => {
    Object.assign(domElement.popper.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    const arrowData = middlewareData.arrow;
    const staticSide = {
      bottom: 'top',
      left: 'right',
      right: 'left',
      top: 'bottom',
    }[placement.split('-')[0]] || '';

    Object.assign(domElement.arrow.style, {
      bottom: '',
      left: arrowData?.x ? `${arrowData.x}px` : '' ,
      right: '',
      top: arrowData?.y ? `${arrowData.y}px` : '',
      // eslint-disable-next-line sort-keys
      [staticSide]: '-4px', // half of arrow css width/height
    });
  });
}

export {
  findTriggerElement,
  hideTooltip,
  showTooltip,
};
