import type { OdsCommonFieldMethod } from '@ovhcloud/ods-common-core';

interface OdsInputMethod extends OdsCommonFieldMethod {
  hide(): Promise<void>;

  stepUp(): Promise<ReturnType<HTMLInputElement['stepUp']>>;

  stepDown(): Promise<ReturnType<HTMLInputElement['stepDown']>>;
}

export type {
  OdsInputMethod,
};
