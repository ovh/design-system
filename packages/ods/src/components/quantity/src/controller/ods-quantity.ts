function isAddButtonDisabled(isDisabled: boolean, value: number | null, max?: number): boolean {
  return isDisabled || (max !== undefined && value !== null && max <= value);
}

function isMinusButtonDisabled(isDisabled: boolean, value: number | null, min?: number): boolean {
  return isDisabled || (min !== undefined && value !== null && min >= value);
}

function setFormValue(internals: ElementInternals, value: number | null): void {
  internals.setFormValue(value?.toString() ?? '');
}

export {
  isAddButtonDisabled,
  isMinusButtonDisabled,
  setFormValue,
};
