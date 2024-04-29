function setFormValue(internals: ElementInternals, value: boolean | null): void {
  internals.setFormValue(value?.toString() ?? 'false');
}

export {
  setFormValue,
};
