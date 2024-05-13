import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

type DomElement = {
  arrow?: HTMLElement,
  popper: HTMLElement,
  trigger: HTMLElement | null | undefined,
}

enum ODS_OVERLAY_POSITION {
  bottom = 'bottom',
  bottomEnd = 'bottom-end',
  bottomStart = 'bottom-start',
  left = 'left',
  leftEnd = 'left-end',
  leftStart = 'left-start',
  right = 'right',
  rightEnd = 'right-end',
  rightStart = 'right-start',
  top = 'top',
  topEnd = 'top-end',
  topStart = 'top-start',
}

type OdsOverlayPosition = `${ODS_OVERLAY_POSITION}`;

const ODS_OVERLAY_POSITIONS = Object.freeze(Object.values(ODS_OVERLAY_POSITION));

function findTriggerElement(triggerId: string, shadowDomTriggerId?: string): HTMLElement | undefined {
  const hostElement = document.querySelector<HTMLElement>(`#${triggerId}`);

  if (!hostElement) {
    console.warn(`[ods] Unable to find trigger element in DOM with id: ${triggerId}`);
    return;
  }

  if (shadowDomTriggerId) {
    const shadowDomElement = hostElement.shadowRoot?.querySelector<HTMLElement>(`#${shadowDomTriggerId}`);

    if (!shadowDomElement) {
      console.warn(`[ods] Unable to find trigger element in shadow DOM with id: ${shadowDomTriggerId}`);
      return;
    }

    return shadowDomElement;
  }

  return hostElement;
}

function hideOverlay(popperElement: HTMLElement, cleanUpCallback?: () => void): void {
  popperElement.style.display = 'none';

  if (cleanUpCallback) {
    cleanUpCallback();
  }
}

function showOverlay(position: OdsOverlayPosition, domElement: DomElement): () => void {
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

async function update(position: OdsOverlayPosition, domElement: DomElement): Promise<void> {
  if (!domElement.trigger) {
    return;
  }

  const middlewares = [
    flip(),
    offset(8),
    shift({ padding: 5 }),
  ];

  if (domElement.arrow) {
    middlewares.push(arrow({ element: domElement.arrow }));
  }

  return computePosition(domElement.trigger, domElement.popper, {
    middleware: middlewares,
    placement: position,
  }).then(({ x, y, placement, middlewareData }) => {
    Object.assign(domElement.popper.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    if (!!domElement.arrow && middlewareData.arrow) {
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
    }
  });
}

export {
  findTriggerElement,
  hideOverlay,
  ODS_OVERLAY_POSITION,
  ODS_OVERLAY_POSITIONS,
  type OdsOverlayPosition,
  showOverlay,
};
