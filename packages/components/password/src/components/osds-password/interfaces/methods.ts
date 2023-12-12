import type { OdsCommonFieldMethod } from "@ovhcloud/ods-common-core";

type OdsPasswordMethod = Omit<OdsCommonFieldMethod, 'hide'>;
  
export type {
    OdsPasswordMethod,
};
  