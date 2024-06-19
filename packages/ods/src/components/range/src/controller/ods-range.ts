function isDualRange(value: number | [number, number] | null): value is [number, number] {
  return Array.isArray(value) && value.length === 2 && value.every((v) => typeof v === 'number');
}

function setFormValue(internals: ElementInternals, value: number | [number, number] | null): void {
  internals.setFormValue(value?.toString() ?? '');
}

function toPercentage(max: number, min: number, value?: number): number {
  return (Number(value) - min) / (max - min) * 100 || 0;
}

export {
  isDualRange,
  toPercentage,
  setFormValue,
};
