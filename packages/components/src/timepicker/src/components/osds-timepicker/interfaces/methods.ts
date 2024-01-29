import type { OdsCommonFieldMethod } from '@ovhcloud/ods-common-core';

interface OdsTimepickerMethod extends Omit<OdsCommonFieldMethod, 'setFocus' | 'setTabindex'> { }

export type {
  OdsTimepickerMethod,
};

