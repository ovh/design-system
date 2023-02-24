import { ReplaceReturnType } from '@ovhcloud/ods-core';

/**
 * describe how are defined public methods for a stencil component.
 * It uses the methods declared in your own interface and wrap the return type into a promise.
 */
export type OdsStencilMethods<Methods extends { [k in keyof Methods]: (...a: any) => any }> = {
  [Key in keyof Methods]: ReplaceReturnType<Methods[Key], Promise<ReturnType<Methods[Key]>>>;
}
