async function copyToClipboard(value?: string): Promise<void> {
  return navigator.clipboard.writeText(value || '');
}

function getRandomHTMLId(): string {
  return `id-${Date.now()}-${Math.random().toString(36).replace('0.', '')}`;
}

function isTargetInElement(event: Event, element?: HTMLElement | null): boolean {
  if (!element) {
    return false;
  }

  return element.contains(event.target as Node) || event.composedPath().includes(element);
}

function submitFormOnEnter(event: KeyboardEvent, form: HTMLFormElement | null): void {
  if (event.key === 'Enter') {
    form?.requestSubmit();
  }
}

export {
  copyToClipboard,
  getRandomHTMLId,
  isTargetInElement,
  submitFormOnEnter,
};
