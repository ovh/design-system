import { ocdkSurfaceTag } from './ocdk-surface.tag';
import { ocdkSurfaceGet } from './ocdk-surface.get';
import { OcdkSurface } from './ocdk-surface';

export function ocdkIsSurface(element?: HTMLElement | OcdkSurface): element is OcdkSurface {
  return !!element
    && !!element.tagName
    && element.tagName.toLowerCase() ===  ocdkSurfaceTag
    && !!ocdkSurfaceGet();
}
