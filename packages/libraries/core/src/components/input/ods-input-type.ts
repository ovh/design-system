import { OdsInput } from "./ods-input";

export enum OdsInputType {
  date = 'date',
  email = 'email',
  number = 'number',
  password = 'password',
  search = 'search',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
}

export type OdsInputTypeUnion = `${OdsInputType}`;

export const OdsInputTypeList = Object.keys(OdsInputType)
  .map((key) => OdsInputType[key as OdsInputTypeUnion]);

export type HTMLOdsInputElement = (OdsInput & HTMLElement);
