export enum OdsMessageType {
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning',
}

export type OdsMessageTypeUnion = `${OdsMessageType}`;

export const OdsMessageTypeList = Object.keys(OdsMessageType)
  .map((key) => OdsMessageType[key as OdsMessageTypeUnion]);
