import { odsUnmockProperty } from './ods-mock-property';
import { OdsComponentForTesting } from '../unit/ods-component-for-testing';
import { OdsLoggerSpyReferences } from './ods-logger-spy-references';

/**
 * unmock previous logger spy initialized with `OdsInitializeLoggerSpy`.
 * @see OdsInitializeLoggerSpy
 * @param loggerSpyReferences - references to the previous initialized logger mock
 */
export function OdsClearLoggerSpy(
  loggerSpyReferences: OdsLoggerSpyReferences): void {
  const propertyName = loggerSpyReferences.propertyName;
  loggerSpyReferences.propertySpy.mockRestore();
  loggerSpyReferences.methodSpies.log.mockRestore();
  loggerSpyReferences.methodSpies.warn.mockRestore();
  loggerSpyReferences.methodSpies.info.mockRestore();
  loggerSpyReferences.methodSpies.debug.mockRestore();
  loggerSpyReferences.methodSpies.trace.mockRestore();
  loggerSpyReferences.methodSpies.error.mockRestore();
  odsUnmockProperty(loggerSpyReferences.spiedClass.prototype as unknown as OdsComponentForTesting, propertyName);
}
