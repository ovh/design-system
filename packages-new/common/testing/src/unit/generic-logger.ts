interface GenericLogger {
  debug: () => Console['debug'];
  error: () => Console['error'];
  info: () => Console['info'];
  log: () => Console['log'];
  trace: () => Console['trace'];
  warn: () => Console['warn'];
}

export {
  GenericLogger,
};
