enum DATEPICKER_VIEW {
    day = 'day',
    month = 'month',
    year = 'year',
}

type DatepickerView = `${DATEPICKER_VIEW}`;

const DATEPICKER_VIEWS = Object.freeze(Object.values(DATEPICKER_VIEW));

export {
  DATEPICKER_VIEW,
  DATEPICKER_VIEWS,
  type DatepickerView,
};
