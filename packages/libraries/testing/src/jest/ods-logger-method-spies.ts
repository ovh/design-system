/**
 * used spies used with the ods logger.
 * it allows manipulating easily the different spy for each logger method.
 */
export interface OdsLoggerMethodSpies {
  log: jest.SpyInstance<void, [message?: unknown, ...optionalParams: any[]]>;
  warn: jest.SpyInstance<void, [message?: unknown, ...optionalParams: any[]]>;
  error: jest.SpyInstance<void, [message?: unknown, ...optionalParams: any[]]>;
  info: jest.SpyInstance<void, [message?: unknown, ...optionalParams: any[]]>;
  debug: jest.SpyInstance<void, [message?: unknown, ...optionalParams: any[]]>;
  trace: jest.SpyInstance<void, [message?: unknown, ...optionalParams: any[]]>;
}
