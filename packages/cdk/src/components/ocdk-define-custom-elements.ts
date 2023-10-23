import {ocdkSurfaceDefine} from './surface/ocdk-surface.define';
import {ocdkSurfaceGet} from './surface/ocdk-surface.get';

export function ocdkDefineCustomElements() {
  if(typeof customElements !== 'undefined') {
    !ocdkSurfaceGet() && ocdkSurfaceDefine();
  }
}
