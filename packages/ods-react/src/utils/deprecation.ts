const loggedDeprecations = new Set<string>();

/**
 * Log a deprecation warning only once per session for a given key (usually "Component.prop"),
 * whatever the number of renders.
 */
function warnDeprecated(key: string, message: string): void {
  if (loggedDeprecations.has(key)) {
    return;
  }

  loggedDeprecations.add(key);
  console.warn(message);
}

export {
  warnDeprecated,
};
