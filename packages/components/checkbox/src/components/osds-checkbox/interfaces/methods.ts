import type { OdsCommonFieldMethod } from "@ovhcloud/ods-common-core";

type OdsCheckboxMethod = Pick<OdsCommonFieldMethod, 'setFocus' | 'setTabindex'>;

export {
  OdsCheckboxMethod,
};