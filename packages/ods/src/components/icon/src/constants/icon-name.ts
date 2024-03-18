enum ODS_ICON_NAME {
  // TODO need actual list from design
  arrowLeft = 'arrow-left',
  warning = 'warning',
}

type OdsIconName =`${ODS_ICON_NAME}`;

const ODS_ICON_NAMES = Object.freeze(Object.values(ODS_ICON_NAME));

export type {
  OdsIconName,
};
export {
  ODS_ICON_NAME,
  ODS_ICON_NAMES,
};
