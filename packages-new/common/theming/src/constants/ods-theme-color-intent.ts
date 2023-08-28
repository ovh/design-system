enum ODS_THEME_COLOR_INTENT {
  accent = 'accent',
  default = 'default',
  error = 'error',
  info = 'info',
  primary = 'primary',
  promotion = 'promotion',
  success = 'success',
  text = 'text',
  warning = 'warning'
}

const ODS_THEME_COLOR_INTENTS = Object.freeze(Object.values(ODS_THEME_COLOR_INTENT));

export {
  ODS_THEME_COLOR_INTENT,
  ODS_THEME_COLOR_INTENTS,
};
