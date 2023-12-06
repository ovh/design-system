import type { OdsGenericFormMethod } from '@ovhcloud/ods-common-core';

interface OdsInputMethod extends OdsGenericFormMethod {
  stepUp(): Promise<ReturnType<HTMLInputElement['stepUp']>>;

  stepDown(): Promise<ReturnType<HTMLInputElement['stepDown']>>;
}

export type {
  OdsInputMethod,
};
