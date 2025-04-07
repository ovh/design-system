function isValueDefined(value?: number | readonly string[] | string | null): boolean {
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return !!value || value === 0;
}

export {
  isValueDefined,
};
