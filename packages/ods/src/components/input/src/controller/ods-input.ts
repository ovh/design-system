async function handleKeySpace(event: KeyboardEvent, isDisabled: boolean, callback: () => Promise<void>): Promise<void> {
  event.preventDefault();
  if(event.key === ' ' && !isDisabled) {
    await callback();
  }
}

function setFormValue(internals: ElementInternals, value?: number | string): void {
  internals?.setFormValue?.(value?.toString() ?? '');
}

function isPassword(isMasked?: boolean): boolean {
  return isMasked !== undefined;
}

export {
  handleKeySpace,
  isPassword,
  setFormValue,
};
