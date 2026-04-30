function cssSupports(property: string, value: string): boolean {
  try {
    return CSS.supports(property, value);
  } catch {
    return false;
  }
}

export { cssSupports };
