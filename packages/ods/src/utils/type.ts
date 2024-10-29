function isDate(date: Date): boolean {
  // Needed as values from runtime are not TS problem anymore
  return date instanceof Date && !isNaN(date.valueOf());
}

function isNumeric(n?: string | number | null): boolean {
  return n === 0 || !!n && !isNaN(parseFloat(n.toString())) && isFinite(n as number);
}

export {
  isDate,
  isNumeric,
};
