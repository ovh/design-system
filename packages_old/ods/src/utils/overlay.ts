import { type ComputePositionReturn, type OffsetOptions, type ShiftOptions, arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

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

enum ODS_OVERLAY_STRATEGY {
  absolute = 'absolute',
  fixed = 'fixed',
}

type OdsOverlayPosition = `${ODS_OVERLAY_POSITION}`;
type OdsOverlayStrategy = `${ODS_OVERLAY_STRATEGY}`;

type DomElement = {
  arrow?: HTMLElement,
  popper: HTMLElement,
  trigger: HTMLElement | null | undefined,
}

type MiddlewareOption = {
  offset?: OffsetOptions,
  shift?: ShiftOptions,
  strategy?: OdsOverlayStrategy,
}

const ODS_OVERLAY_POSITIONS = Object.freeze(Object.values(ODS_OVERLAY_POSITION));
const ODS_OVERLAY_STRATEGIES = Object.freeze(Object.values(ODS_OVERLAY_STRATEGY));

function findTriggerElement(triggerId: string, shadowDomTriggerId?: string): HTMLElement | undefined {
  const hostElement = document.querySelector<HTMLElement>(`#${CSS.escape(triggerId)}`);

  if (!hostElement) {
    console.warn(`[ods] Unable to find trigger element in DOM with id: ${triggerId}`);
    return;
  }

  if (shadowDomTriggerId) {
    const shadowDomElement = hostElement.shadowRoot?.querySelector<HTMLElement>(`#${CSS.escape(shadowDomTriggerId)}`);

    if (!shadowDomElement) {
      console.warn(`[ods] Unable to find trigger element in shadow DOM with id: ${shadowDomTriggerId}`);
      return;
    }

    return shadowDomElement;
  }

  return hostElement;
}

async function getElementPosition(position: OdsOverlayPosition, domElement: DomElement, option?: MiddlewareOption): Promise<ComputePositionReturn> {
  if (!domElement.trigger) {
    throw new Error('No trigger element passed, unable to compute the position');
  }

  const middlewares = [
    flip(),
    offset(option?.offset || 0),
    shift(option?.shift),
  ];

  if (domElement.arrow) {
    middlewares.push(arrow({ element: domElement.arrow }));
  }

  return computePosition(domElement.trigger, domElement.popper, {
    middleware: middlewares,
    placement: position,
    strategy: option?.strategy || ODS_OVERLAY_STRATEGY.absolute,
  });
}

function hideOverlay(popperElement: HTMLElement, cleanUpCallback?: () => void): void {
  popperElement.style.display = 'none';

  if (cleanUpCallback) {
    cleanUpCallback();
  }
}

function showOverlay(position: OdsOverlayPosition, domElement: DomElement, option?: MiddlewareOption): () => void {
  if (!domElement.trigger) {
    return () => {};
  }

  domElement.popper.style.display = 'block';

  return autoUpdate(
    domElement.trigger,
    domElement.popper,
    () => update(position, domElement, option),
  );
}

async function update(position: OdsOverlayPosition, domElement: DomElement, option?: MiddlewareOption): Promise<void> {
  const { x, y, placement, middlewareData } = await getElementPosition(position, domElement, option);

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
}

export {
  findTriggerElement,
  getElementPosition,
  hideOverlay,
  ODS_OVERLAY_POSITION,
  ODS_OVERLAY_POSITIONS,
  type OdsOverlayPosition,
  ODS_OVERLAY_STRATEGIES,
  ODS_OVERLAY_STRATEGY,
  type OdsOverlayStrategy,
  showOverlay,
};
