import { isNumeric } from '../../../../utils/type';

const VALUE_DEFAULT_VALUE = null;
type RangeValue = number | [number, number] | null | [null, null];

function getInitialValue(value: RangeValue, min: number, max: number, defaultValue?: number | [number, number]): RangeValue {
  if (defaultValue !== undefined && value === VALUE_DEFAULT_VALUE) {
    return defaultValue;
  }
  return value ?? (max < min ? min : min + (max - min) / 2);
}

function getTicks(ticks: string | number[] | undefined, min: number, max: number): number[] {
  if (!ticks) {
    return [];
  }
  let parsedTicks: number[] = [];
  try {
    parsedTicks = Array.isArray(ticks) ? ticks : JSON.parse(ticks);
  } catch (error) {
    console.warn('[OdsRange] ticks string could not be parsed.');
    parsedTicks = [];
  }
  return parsedTicks.filter((tick) => tick >= min && tick <= max).sort((a, b) => a - b);
}

function isDualRange(value: RangeValue): value is [number, number] | [null, null] {
  return Array.isArray(value) && value.length === 2 && value.every((v) => typeof v === 'number' || v === null);
}

function updateInternals(internals: ElementInternals, value: RangeValue, isRequired: boolean): void {
  internals.setFormValue(value?.toString() ?? '');

  const isNotArrayOfNumber = Array.isArray(value) && value.every((v) => !isNumeric(v));
  if (Number.isNaN(value) || isNotArrayOfNumber) {
    return internals.setValidity({ customError: true }, 'Type not supported');
  }

  const isArrayOfNull = Array.isArray(value) && value?.[0] === VALUE_DEFAULT_VALUE && value?.[1] === VALUE_DEFAULT_VALUE;
  if (isRequired && (value === VALUE_DEFAULT_VALUE || isArrayOfNull)) {
    return internals.setValidity({ customError: true }, 'Missing value');
  }
  internals.setValidity({});
}

function toPercentage(max: number, min: number, value?: number): number {
  return (Number(value) - min) / (max - min) * 100 || 0;
}

export {
  getInitialValue,
  getTicks,
  isDualRange,
  toPercentage,
  updateInternals,
  VALUE_DEFAULT_VALUE,
};
