enum ODS_DATEPICKER_DAY {
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturday = 6,
    sunday = 0,
}

type OdsDatepickerDay = `${ODS_DATEPICKER_DAY}`;

const ODS_DATEPICKER_DAYS = Object.freeze(Object.values(ODS_DATEPICKER_DAY));

export {
  ODS_DATEPICKER_DAY,
  ODS_DATEPICKER_DAYS,
  type OdsDatepickerDay,
};
