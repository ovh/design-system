enum ODS_BADGE_ICON_ALIGNMENT {
  left = 'left',
  right = 'right',
}

type OdsBadgeIconAlignment =`${ODS_BADGE_ICON_ALIGNMENT}`;

const ODS_BADGE_ICON_ALIGNMENTS = Object.freeze(Object.values(ODS_BADGE_ICON_ALIGNMENT));

export {
  ODS_BADGE_ICON_ALIGNMENT,
  ODS_BADGE_ICON_ALIGNMENTS,
  type OdsBadgeIconAlignment,
};
