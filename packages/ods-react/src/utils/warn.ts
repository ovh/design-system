const warned = new Set<string>();

/**
 * Warn the consumer once for a given message, so that a mistake caught while rendering is not
 * repeated on every render of the application that made it.
 * @internal
 */
function warnOnce(message: string): void {
  if (warned.has(message)) {
    return;
  }

  warned.add(message);
  console.warn(message);
}

export {
  warnOnce,
};
