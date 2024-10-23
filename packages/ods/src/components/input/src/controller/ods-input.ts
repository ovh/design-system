async function handleKeySpaceEnter(event: KeyboardEvent, isDisabled: boolean, callback: () => Promise<void>): Promise<void> {
  event.preventDefault();
  event.stopPropagation();
  if ((event.key === ' ' || event.key === 'Enter') && !isDisabled) {
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
  handleKeySpaceEnter,
  isPassword,
  setFormValue,
};
