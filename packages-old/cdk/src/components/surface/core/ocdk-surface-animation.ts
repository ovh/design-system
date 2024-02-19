export enum OcdkSurfaceAnimation {
  SLIPPING = 'SLIPPING',
  SCALING = 'SCALING'
}

export type OcdkSurfaceAnimationUnion = `${OcdkSurfaceAnimation}`;

export const OcdkSurfaceAnimationList = Object.keys(OcdkSurfaceAnimation)
  .map((key) => OcdkSurfaceAnimation[key as OcdkSurfaceAnimationUnion]);
