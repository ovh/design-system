import { Ods } from '@ovhcloud/ods-common-core';
import { OcdkSurface, ocdkDefineCustomElements, OcdkSurfaceCorner } from '@ovhcloud/ods-cdk';
import {
  OcdkSurfaceCustomStrategyExample
} from './components/surface/strategies/custom-example/ocdk-surface-custom-strategy-example';

ocdkDefineCustomElements();

const logger = new (Ods.instance().logger)('www');
logger.log('init');

(async () => {
  await customElements.whenDefined('ocdk-surface');

  const overlayPreContent1 = document.getElementById('overlay-pre-content-1') as HTMLElement | null;
  const overlayPostContent1 = document.getElementById('overlay-post-content-1') as HTMLElement | null;
  const overlayTrigger1 = document.getElementById('overlay-trigger-1') as HTMLElement | null;

  const basicTrigger1 = document.getElementById('basic-trigger-1');
  const basicSurface1 = document.getElementById('basic-surface-1') as OcdkSurface | null;
  const basicTrigger2 = document.getElementById('basic-trigger-2');
  const basicSurface2 = document.getElementById('basic-surface-2') as OcdkSurface | null;
  const basicTrigger3 = document.getElementById('basic-trigger-3');
  const basicSurface3 = document.getElementById('basic-surface-3') as OcdkSurface | null;
  const basicTrigger4 = document.getElementById('basic-trigger-4');
  const basicSurface4 = document.getElementById('basic-surface-4') as OcdkSurface | null;
  const basicTrigger5 = document.getElementById('basic-trigger-5');
  const basicSurface5 = document.getElementById('basic-surface-5') as OcdkSurface | null;
  basicSurface5 && (basicSurface5.animated = false);
  const basicTrigger6 = document.getElementById('basic-trigger-6');
  const basicSurface6 = document.getElementById('basic-surface-6') as OcdkSurface | null;

  (window as any).basic1Toggle = () => {
    // synchronize the trigger element (anchor) with the surface when both are available
    if (basicTrigger1 && basicSurface1) {
      basicSurface1.setAnchorElement(basicTrigger1);
      // toggle the open of the surface
      basicSurface1.opened = !basicSurface1.opened;
    }
  }

  const customStrategyInstance = new OcdkSurfaceCustomStrategyExample();
  (window as any).basic2Toggle = () => {
    // synchronize the trigger element (anchor) with the surface when both are available
    if (basicTrigger2 && basicSurface2) {
      basicSurface2.setAnchorElement(basicTrigger2);
      basicSurface2.setCustomStrategy(customStrategyInstance);
      // toggle the open of the surface
      basicSurface2.opened = !basicSurface2.opened;
    }
  }

  (window as any).basic3Toggle = () => {
    // synchronize the trigger element (anchor) with the surface when both are available
    if (basicTrigger3 && basicSurface3) {
      basicSurface3.setCornerPoints({ anchor: OcdkSurfaceCorner.TOP_LEFT, origin: OcdkSurfaceCorner.TOP_RIGHT });
      // toggle the open of the surface
      basicSurface3.opened = !basicSurface3.opened;
    }
  }

  (window as any).basic4Toggle = () => {
    // synchronize the trigger element (anchor) with the surface when both are available
    if (basicTrigger4 && basicSurface4) {
      basicSurface4.setAnchorElement(basicTrigger4);
      // toggle the open of the surface
      basicSurface4.opened = !basicSurface4.opened;
    }
  }

  (window as any).basic5Toggle = () => {
    // synchronize the trigger element (anchor) with the surface when both are available
    if (basicTrigger5 && basicSurface5) {
      basicSurface5.setAnchorElement(basicTrigger5);
      // toggle the open of the surface
      basicSurface5.opened = !basicSurface5.opened;
    }
  }

  (window as any).basic6Toggle = () => {
    // synchronize the trigger element (anchor) with the surface when both are available
    if (basicTrigger6 && basicSurface6) {
      basicSurface6.setAnchorElement(basicTrigger6);
      // toggle the open of the surface
      basicSurface6.opened = !basicSurface6.opened;
    }
  }

  (window as any).changePosition = () => {
    logger.log('changePosition');
    if(overlayTrigger1) {
      const textAlign = overlayTrigger1.style.textAlign;
      if (textAlign === 'right') {
        overlayTrigger1.style.textAlign = 'left';
      } else if (textAlign === 'left' || textAlign === '') {
        overlayTrigger1.style.textAlign = 'center';
      } else {
        overlayTrigger1.style.textAlign = 'right';
      }
    }
  }

  (window as any).generateContent = () => {
    logger.log('generateContent');
    const arr = Array(20).fill('<div>test test test</div>');
    if (overlayPreContent1 && overlayPostContent1) {
      overlayPreContent1.innerHTML += arr.join('');
      overlayPostContent1.innerHTML += arr.join('');
    }
  }
})();
