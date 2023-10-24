import { OcdkSurface } from '@ovhcloud/ods-cdk';

(async() => {
  await customElements.whenDefined('ocdk-surface');
  const basicTrigger1 = document.getElementById('basic-trigger-1');
  const basicSurface1 = document.getElementById('basic-surface-1') as OcdkSurface;

  (window as any).basic1Toggle = () => {
    // synchronize the trigger element (anchor) with the surface when both are available
    if (basicTrigger1 && basicSurface1) {
      basicSurface1.setAnchorElement(basicTrigger1);
    }
    // toggle the open of the surface
    basicSurface1.opened = !basicSurface1.opened;
  };
})();
