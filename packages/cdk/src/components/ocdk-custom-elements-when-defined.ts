import { ocdkSurfaceTag } from './surface/ocdk-surface.tag';

export function ocdkCustomElementsWhenDefined() {
  return customElements.whenDefined(ocdkSurfaceTag);
}
