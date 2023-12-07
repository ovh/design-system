import type { OdsGenericFormMethod } from "@ovhcloud/ods-common-core";

type OdsPasswordMethod = Omit<OdsGenericFormMethod, 'hide'>;
  
export type {
    OdsPasswordMethod,
};
  