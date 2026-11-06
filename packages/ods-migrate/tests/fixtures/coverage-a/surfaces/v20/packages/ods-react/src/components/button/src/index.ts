export enum BUTTON_STATUS { primary = 'primary', critical = 'critical' }
export type ButtonStatus = `${BUTTON_STATUS}`;
export interface ButtonProp { status?: ButtonStatus; children?: unknown; disabled?: boolean }
export const Button = (props: ButtonProp): any => props;
