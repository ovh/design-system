/**
 * used spies used with the ods logger.
 * it allows manipulating easily the different spy for each logger method.
 */
export interface OdsLoggerMethodSpies {
  debug: jest.SpyInstance<unknown, [message?: unknown, ...optionalParams: any[]]>;
  error: jest.SpyInstance<unknown, [message?: unknown, ...optionalParams: any[]]>;
  info: jest.SpyInstance<unknown, [message?: unknown, ...optionalParams: any[]]>;
  log: jest.SpyInstance<unknown, [message?: unknown, ...optionalParams: any[]]>;
  trace: jest.SpyInstance<unknown, [message?: unknown, ...optionalParams: any[]]>;
  warn: jest.SpyInstance<unknown, [message?: unknown, ...optionalParams: any[]]>;
}
