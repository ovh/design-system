import type { OdsE2EComponentApplyFunction } from './ods-e2e-component-apply-function';

type OdsE2EComponentPageGenerator<PageType, ElementType> = (
  {
    action,
    componentTag,
    height,
    html,
    width,
  }:
  {
    action?: OdsE2EComponentApplyFunction<PageType, ElementType>,
    componentTag: string,
    height?: number,
    html: string,
    width?: number,
  }) => void

export {
  OdsE2EComponentPageGenerator
}
