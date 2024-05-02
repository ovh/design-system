function isPlusButtonDisabled(isDisabled: boolean, isReadonly: boolean, value: number | null, max?: number): boolean {
  return isDisabled || isReadonly || (max !== undefined && value !== null && max <= value);
}

function isMinusButtonDisabled(isDisabled: boolean, isReadonly: boolean, value: number | null, min?: number): boolean {
  return isDisabled || isReadonly || (min !== undefined && value !== null && min >= value);
}

function setFormValue(internals: ElementInternals, value: number | null): void {
  internals.setFormValue(value?.toString() ?? '');
}

export {
  isPlusButtonDisabled,
  isMinusButtonDisabled,
  setFormValue,
};
