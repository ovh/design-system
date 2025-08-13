type MeterState = 'critical' | 'normal' | 'warning';

type MeterParam = {
  high?: number,
  low?: number,
  max: number,
  min: number,
  optimum?: number,
}

function getBasicState(value: number, { high, low }: MeterParam): MeterState {
  if ((!!high && value > high) || (!!low && value < low)) {
    return 'warning';
  }

  return 'normal';
}

function getOptimumState(value: number, { high, low, max, min, optimum }: MeterParam): MeterState {
  if (!optimum || optimum < min || optimum > max) {
    return 'normal';
  }

  const effectiveLow = low ?? min;
  const effectiveHigh = high ?? max;

  if (low && optimum < low) {
    return value >= low ? (value > effectiveHigh ? 'critical' : 'warning') : 'normal'; // eslint-disable-line no-nested-ternary
  }

  if (high && optimum > high) {
    return value <= high ? (value < effectiveLow ? 'critical' : 'warning') : 'normal'; // eslint-disable-line no-nested-ternary
  }

  return (value < effectiveLow || value > effectiveHigh) ? 'warning' : 'normal';
}

function getValueState(value: number, param: MeterParam): MeterState {
  if (!param.optimum) {
    return getBasicState(value, param);
  }

  return getOptimumState(value, param);
}

export {
  type MeterState,
  getValueState,
};
