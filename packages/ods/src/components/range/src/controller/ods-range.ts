function getDefaultValue(min: number, max: number, defaultValue?: number | [number, number]): number | [number, number] {
  if (defaultValue) {
    return defaultValue;
  }
  return max < min ? min : min + (max - min) / 2;
}

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
  getDefaultValue,
  isDualRange,
  toPercentage,
  setFormValue,
};
