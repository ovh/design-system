import type { OdsGenericFormMethod } from "packages/common/core/dist/cjs";

type OdsPasswordMethod = Omit<OdsGenericFormMethod, 'hide'>;
  
export type {
    OdsPasswordMethod,
};
  