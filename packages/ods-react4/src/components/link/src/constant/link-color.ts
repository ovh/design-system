enum ODS_LINK_COLOR {
  primary = 'primary',
}

type OdsLinkColor =`${ODS_LINK_COLOR}`;

const ODS_LINK_COLORS = Object.freeze(Object.values(ODS_LINK_COLOR));

export {
  ODS_LINK_COLOR,
  ODS_LINK_COLORS,
  type OdsLinkColor,
};
