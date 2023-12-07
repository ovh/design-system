import type { OdsGenericFormMethod } from "@ovhcloud/ods-common-core";

type OdsCheckboxMethod = Pick<OdsGenericFormMethod, 'setFocus' | 'setTabindex'>;

export {
  OdsCheckboxMethod,
};