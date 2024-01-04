import type { OdsCommonFieldMethod } from '@ovhcloud/ods-common-core';

type OdsSelectMethod = Omit<OdsCommonFieldMethod, 'hide' | 'reset'>;

export type {
  OdsSelectMethod,
};
