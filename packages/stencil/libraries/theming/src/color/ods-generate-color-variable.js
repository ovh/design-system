export const odsGenerateColorVariable = (intent, hue, contrasted = false) => `--ods-color-${intent}-${hue}${contrasted ? '-contrasted' : ''}`;
