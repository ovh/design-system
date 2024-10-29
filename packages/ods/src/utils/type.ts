function isNumeric(n?: string | number | null): boolean {
  return n === 0 || !!n && !isNaN(parseFloat(n.toString())) && isFinite(n as number);
}

export {
  isNumeric,
};
