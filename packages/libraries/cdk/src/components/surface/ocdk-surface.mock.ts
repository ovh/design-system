import { OcdkSurfaceBehaviour } from './ocdk-surface-behaviour';

export class OcdkSurfaceMock implements OcdkSurfaceBehaviour {
  close = jest.fn();
  open = jest.fn();
  opened = false;
  setAnchorElement = jest.fn();
}