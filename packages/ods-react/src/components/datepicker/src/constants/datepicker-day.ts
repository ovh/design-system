enum DATEPICKER_DAY {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
}

type DatepickerDay = `${DATEPICKER_DAY}`;

const DATEPICKER_DAYS = Object.freeze(Object.values(DATEPICKER_DAY));

export {
  DATEPICKER_DAY,
  DATEPICKER_DAYS,
  type DatepickerDay,
};
