import type { OdsE2EComponentApplyFunction } from './ods-e2e-component-apply-function';

type OdsE2EComponentExtraFunctions<PageType, ElementType> = Record<string, OdsE2EComponentApplyFunction<PageType, ElementType>>

export {
  OdsE2EComponentExtraFunctions
}
