import { ReplaceReturnType } from '../types/ods-replace-return-type';
import { OdsMayPromise } from '../types/ods-may-promise';
import { OdsFunction } from '../types/ods-function';

/**
 * generic type of methods for a component.
 * each method are function that returns the associated type or a Promise of it (see OdsMayPromise)
 */
export type OdsComponentGenericMethods<Methods extends { [k in keyof Methods]: OdsFunction<any, any> }> = {
  [Key in keyof Methods]: ReplaceReturnType<Methods[Key], OdsMayPromise<ReturnType<Methods[Key]>>>;
}
