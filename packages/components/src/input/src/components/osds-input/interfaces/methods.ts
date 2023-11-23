import type { OdsCommonFieldMethod } from '@ovhcloud/ods-common-core';

interface OdsInputMethod extends OdsCommonFieldMethod {
  hide(): Promise<void>;

  stepUp(): Promise<ReturnType<HTMLInputElement['stepUp']>>;

  stepDown(): Promise<ReturnType<HTMLInputElement['stepDown']>>;

  /**
   * @internal
   */
  getInputEl(): Promise<HTMLInputElement | undefined>;
}

export type {
  OdsInputMethod,
};
