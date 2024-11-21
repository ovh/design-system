import { OdsLogger } from '@ovhcloud/ods-core';
import { odsMockProperty } from './ods-mock-property';
import { OdsComponentForTesting } from '../unit/ods-component-for-testing';
import { OdsSpyOnLoggerInstance } from './ods-spy-on-logger-instance';
import { OdsLoggerSpyReferences } from './ods-logger-spy-references';

/**
 * initialize the spy for the ods logger.
 * @example
 * ```
 * describe('minus control', () => {
 *   let loggerSpyReferences: OdsLoggerSpyReferences;
 *
 *   beforeEach(() => {
 *     const loggerMocked = new OdsLogger('myLoggerMocked');
 *     loggerSpyReferences = OdsInitializeLoggerSpy({ loggerMocked, spiedClass: OsdsQuantity });
 *   });
 *
 *   afterEach(() => {
 *     OdsClearLoggerSpy(loggerSpyReferences);
 *   });
 *
 *   it('should call the logger warn', async () => {
 *     await yourSetup();
 *     expect(loggerSpyReferences.methodSpies.warn).toHaveBeenCalledWith('myText');
 *   });
 * });
 * ```
 *
 * @param options - give the logger instance, the class and optionally the name of logger property
 */
export function OdsInitializeLoggerSpy<T extends (unknown & { prototype: unknown; })>(options: {
  /** instance of OdsLogger you want to override the original one */
  loggerMocked: OdsLogger,
  /** class on which to spy the logger property */
  spiedClass: T,
  /** name of the logger property used into the spied class (default to 'logger') */
  propertyName?: keyof OdsComponentForTesting,
}): OdsLoggerSpyReferences<T> {
  const propertyName = options.propertyName ? options.propertyName : 'logger';
  odsMockProperty(options.spiedClass.prototype as unknown as OdsComponentForTesting, propertyName);
  const loggerMethodsSpies = OdsSpyOnLoggerInstance(options.loggerMocked);
  const loggerPropertySpy = jest.spyOn(options.spiedClass.prototype as unknown as OdsComponentForTesting, propertyName, 'get')
    .mockImplementation(() => options.loggerMocked);

  return {
    spiedClass: options.spiedClass,
    propertyName,
    methodSpies: loggerMethodsSpies,
    propertySpy: loggerPropertySpy
  }
}