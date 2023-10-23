import {OcdkSurface} from './ocdk-surface';
import {ocdkSurfaceTag} from './ocdk-surface.tag';

export function ocdkSurfaceDefine() {
  if(typeof customElements !== 'undefined') {
    customElements.define(ocdkSurfaceTag, OcdkSurface);
  }
}
