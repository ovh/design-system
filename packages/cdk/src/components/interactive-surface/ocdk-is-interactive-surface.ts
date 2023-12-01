import { OcdkSurface } from './ocdk-surface';
import { ocdkSurfaceGet } from './ocdk-surface.get';
import { ocdkSurfaceTag } from './ocdk-surface.tag';

export function ocdkIsSurface(element?: HTMLElement | OcdkSurface): element is OcdkSurface {
  return !!element
    && !!element.tagName
    && element.tagName.toLowerCase() === ocdkSurfaceTag
    && !!ocdkSurfaceGet();
}
