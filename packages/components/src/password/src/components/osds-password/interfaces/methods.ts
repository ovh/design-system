import type { OdsCommonFieldMethod } from '@ovhcloud/ods-common-core';

interface OdsPasswordMethod extends OdsCommonFieldMethod {
  hide(): Promise<void>;
}

export type {
  OdsPasswordMethod,
};