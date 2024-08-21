async function handleKeySpace(event: KeyboardEvent, isDisabled: boolean, callback: () => Promise<void>): Promise<void> {
  event.preventDefault();
  if(event.key === ' ' && !isDisabled) {
    await callback();
  }
}

function isPassword(isMasked?: boolean): boolean {
  return isMasked !== undefined;
}

function setFormValue(internals: ElementInternals, value: number | string | null): void {
  internals.setFormValue(value?.toString() ?? '');
}

export {
  handleKeySpace,
  isPassword,
  setFormValue,
};
