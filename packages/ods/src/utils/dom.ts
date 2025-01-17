type OdsFormElement = HTMLElement & {
  getValidationMessage: () => Promise<string>,
  getValidity: () => Promise<ValidityState>,
};

async function copyToClipboard(value?: string): Promise<void> {
  return navigator.clipboard.writeText(value || '');
}

function getRandomHTMLId(): string {
  return `id-${Date.now()}-${Math.random().toString(36).replace('0.', '')}`;
}

function isElementInContainer(element: HTMLElement, container: HTMLElement = document.body): boolean {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return elementRect.top >= containerRect.top &&
    elementRect.right <= containerRect.right &&
    elementRect.bottom <= containerRect.bottom &&
    elementRect.left >= containerRect.left;
}

function isTargetInElement(event: Event, element?: HTMLElement | null): boolean {
  if (!element) {
    return false;
  }

  return element.contains(event.target as Node) || event.composedPath().includes(element);
}

function setInternalsValidity(element: HTMLElement, internals: ElementInternals, validityState: ValidityState, validationMessage: string): void {
  if (!validityState.valid) {
    for (const state in validityState) {
      if (validityState[state as keyof ValidityState]) {
        internals.setValidity({ [state.toString()]: true }, validationMessage, element);
      }
    }
  } else {
    internals.setValidity({});
  }
}

function setInternalsValidityFromHtmlElement(formElement: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, internals: ElementInternals): void {
  return setInternalsValidity(formElement, internals, formElement.validity, formElement.validationMessage);
}

async function setInternalsValidityFromOdsComponent(odsFormElement: OdsFormElement, internals: ElementInternals): Promise<void> {
  const validityState = await odsFormElement.getValidity();
  const validationMessage = await odsFormElement.getValidationMessage();

  return setInternalsValidity(odsFormElement, internals, validityState, validationMessage);
}

function submitFormOnClick(event: MouseEvent, form: HTMLFormElement | null): void {
  if (event.button === 0) {
    form?.requestSubmit();
  }
}

function submitFormOnEnter(event: KeyboardEvent, form: HTMLFormElement | null): void {
  if (event.key === 'Enter') {
    form?.requestSubmit();
  }
}

export {
  copyToClipboard,
  getRandomHTMLId,
  isElementInContainer,
  isTargetInElement,
  setInternalsValidityFromHtmlElement,
  setInternalsValidityFromOdsComponent,
  submitFormOnClick,
  submitFormOnEnter,
};
