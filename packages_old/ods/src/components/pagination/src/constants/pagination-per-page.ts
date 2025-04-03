enum ODS_PAGINATION_PER_PAGE {
  option_10 = 10,
  option_25 = 25,
  option_50 = 50,
  option_100 = 100,
  option_300 = 300,
}

// ODS_PAGINATION_PER_PAGE is a numeric enum, so we don't need to expose a literal type like:
// type OdsPaginationPerPage =`${ODS_PAGINATION_PER_PAGE}`;
// This still allows user to set the Prop value explicitly instead of using the enum value so it is fine.

const ODS_PAGINATION_PER_PAGE_OPTIONS = Object.freeze([
  ODS_PAGINATION_PER_PAGE.option_10,
  ODS_PAGINATION_PER_PAGE.option_25,
  ODS_PAGINATION_PER_PAGE.option_50,
  ODS_PAGINATION_PER_PAGE.option_100,
  ODS_PAGINATION_PER_PAGE.option_300,
]);

export {
  ODS_PAGINATION_PER_PAGE,
  ODS_PAGINATION_PER_PAGE_OPTIONS,
};
