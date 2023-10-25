import { OdsLoggerMethodSpies } from './ods-logger-method-spies';
import type { GenericLogger } from '../unit/generic-logger';

export function OdsSpyOnLoggerInstance(loggerMocked: GenericLogger): OdsLoggerMethodSpies {
  return {
    log: jest.spyOn(loggerMocked, 'log'),
    warn: jest.spyOn(loggerMocked, 'warn'),
    error: jest.spyOn(loggerMocked, 'error'),
    info: jest.spyOn(loggerMocked, 'info'),
    debug: jest.spyOn(loggerMocked, 'debug'),
    trace: jest.spyOn(loggerMocked, 'trace'),
  };
}
