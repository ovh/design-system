export enum BUTTON_COLOR { primary = 'primary', critical = 'critical' }
export type ButtonColor = `${BUTTON_COLOR}`;
export interface ButtonProp { color?: ButtonColor; children?: unknown; disabled?: boolean }
export const Button = (props: ButtonProp): any => props;
