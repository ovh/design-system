import { OdsInput } from "./ods-input";

export enum OdsInputType {
  number = 'number'
}

export type OdsInputTypeUnion = `${OdsInputType}`;

export const OdsInputTypeList = Object.keys(OdsInputType)
  .map((key) => OdsInputType[key as OdsInputTypeUnion]);

export type HTMLOdsInputElement = (OdsInput & HTMLElement);
