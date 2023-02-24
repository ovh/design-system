export enum OdsButtonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

export type OdsButtonTypeUnion = `${OdsButtonType}`;

export const OdsButtonTypeList = Object.keys(OdsButtonType)
  .map((key) => OdsButtonType[key as OdsButtonTypeUnion]);

