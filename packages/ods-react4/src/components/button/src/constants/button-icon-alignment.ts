enum ODS_BUTTON_ICON_ALIGNMENT {
  left = 'left',
  right = 'right',
}

type OdsButtonIconAlignment =`${ODS_BUTTON_ICON_ALIGNMENT}`;

const ODS_BUTTON_ICON_ALIGNMENTS = Object.freeze(Object.values(ODS_BUTTON_ICON_ALIGNMENT));

export {
  ODS_BUTTON_ICON_ALIGNMENT,
  ODS_BUTTON_ICON_ALIGNMENTS,
  type OdsButtonIconAlignment,
};
