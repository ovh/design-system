function setFormValue(internals: ElementInternals, value: string | null): void {
  internals.setFormValue(value ?? '');
}

export {
  setFormValue,
};
