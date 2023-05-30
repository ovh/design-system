export enum OdsSpinnerMode {
    INDETERMINATE = 'INDETERMINATE'
}
  
export type OdsSpinnerModeUnion = `${OdsSpinnerMode}`;

export const OdsSpinnerModeList = Object.keys(OdsSpinnerMode)
    .map((key) => OdsSpinnerMode[key as OdsSpinnerModeUnion]);
