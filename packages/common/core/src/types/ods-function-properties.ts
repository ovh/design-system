import {OdsFunction} from './ods-function';

/**
 * describe a type that contains only functions as each property
 */
export type OdsFunctionProperties = Record<string, OdsFunction<any, any>>;
