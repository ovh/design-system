enum ODS_LINK_ICON_ALIGNMENT {
  left = 'left',
  right = 'right',
}

type OdsLinkIconAlignment =`${ODS_LINK_ICON_ALIGNMENT}`;

const ODS_LINK_ICON_ALIGNMENTS = Object.freeze(Object.values(ODS_LINK_ICON_ALIGNMENT));

export {
  ODS_LINK_ICON_ALIGNMENT,
  ODS_LINK_ICON_ALIGNMENTS,
  type OdsLinkIconAlignment,
};
