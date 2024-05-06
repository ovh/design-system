function setFormValue(internals: ElementInternals, value: number | string | null): void {
  internals.setFormValue(value?.toString() ?? '');
}

export {
  setFormValue,
};
