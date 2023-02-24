export enum OdsDividerSize {
  zero = '0',
  one = '1',
  two = '2',
  three = '3',
  four ='4',
  five ='5',
  six ='6',
  seven ='7',
  eight ='8',
  nine ='9',
  ten ='10',
}

export type OdsDividerSizeUnion = `${OdsDividerSize}`;

export const OdsDividerSizeList = Object.keys(OdsDividerSize)
  .map((key) => OdsDividerSize[key as keyof typeof OdsDividerSize]);
