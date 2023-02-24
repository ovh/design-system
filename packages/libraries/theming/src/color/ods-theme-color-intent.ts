export enum OdsThemeColorIntent {
  default = 'default',
  primary = 'primary',
  text = 'text',
  accent = 'accent',
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info',
  promotion = 'promotion'
}

export type OdsThemeColorIntentUnion = `${OdsThemeColorIntent}`;

export const OdsThemeColorIntentList = Object.keys(OdsThemeColorIntent)
  .map((key) => OdsThemeColorIntent[ key as OdsThemeColorIntentUnion ]);
