enum PAGINATION_PER_PAGE {
  option_10 = 10,
  option_25 = 25,
  option_50 = 50,
  option_100 = 100,
  option_300 = 300,
}

const PAGINATION_PER_PAGE_OPTIONS = Object.freeze([
  { label: PAGINATION_PER_PAGE.option_10.toString(), value: PAGINATION_PER_PAGE.option_10.toString() },
  { label: PAGINATION_PER_PAGE.option_25.toString(), value: PAGINATION_PER_PAGE.option_25.toString() },
  { label: PAGINATION_PER_PAGE.option_50.toString(), value: PAGINATION_PER_PAGE.option_50.toString() },
  { label: PAGINATION_PER_PAGE.option_100.toString(), value: PAGINATION_PER_PAGE.option_100.toString() },
  { label: PAGINATION_PER_PAGE.option_300.toString(), value: PAGINATION_PER_PAGE.option_300.toString() },
]);

export {
  PAGINATION_PER_PAGE,
  PAGINATION_PER_PAGE_OPTIONS,
};
