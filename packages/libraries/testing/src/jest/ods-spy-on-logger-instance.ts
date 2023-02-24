import { OdsLogger } from '@ovhcloud/ods-core';
import { OdsLoggerMethodSpies } from './ods-logger-method-spies';

export function OdsSpyOnLoggerInstance(loggerMocked: OdsLogger): OdsLoggerMethodSpies {
  return {
    log: jest.spyOn(loggerMocked, 'log'),
    warn: jest.spyOn(loggerMocked, 'warn'),
    error: jest.spyOn(loggerMocked, 'error'),
    info: jest.spyOn(loggerMocked, 'info'),
    debug: jest.spyOn(loggerMocked, 'debug'),
    trace: jest.spyOn(loggerMocked, 'trace')
  };
}
