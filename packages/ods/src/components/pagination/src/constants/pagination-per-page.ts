enum ODS_PAGINATION_PER_PAGE {
  min = 10,
  option_25 = 25,
  option_50 = 50,
  option_100 = 100,
  max = 300,
}

const ODS_PAGINATION_PER_PAGE_OPTIONS = Object.freeze([
  ODS_PAGINATION_PER_PAGE.min,
  ODS_PAGINATION_PER_PAGE.option_25,
  ODS_PAGINATION_PER_PAGE.option_50,
  ODS_PAGINATION_PER_PAGE.option_100,
  ODS_PAGINATION_PER_PAGE.max,
]);

export {
  ODS_PAGINATION_PER_PAGE,
  ODS_PAGINATION_PER_PAGE_OPTIONS,
};
