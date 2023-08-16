function odsCreateAttributes<T>(attributes: Partial<T>, defaultAttributes: T): T {
  return {
    ...defaultAttributes,
    ...attributes,
  };
}

export {
  odsCreateAttributes,
};
