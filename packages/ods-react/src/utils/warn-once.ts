const loggedWarnings = new Set<string>();

/**
 * Log a warning only once for a given key, whatever the number of renders: once per page load in
 * the browser, once per process on a server.
 */
function warnOnce(key: string, message: string): void {
  if (loggedWarnings.has(key)) {
    return;
  }

  loggedWarnings.add(key);
  console.warn(message);
}

export {
  warnOnce,
};
