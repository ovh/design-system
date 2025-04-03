enum ODS_TIMEZONE {
  UTC_12 = 'UTC-12',
  UTC_11 = 'UTC-11',
  UTC_10 = 'UTC-10',
  UTC_9 = 'UTC-9',
  UTC_8 = 'UTC-8',
  UTC_7 = 'UTC-7',
  UTC_6 = 'UTC-6',
  UTC_5 = 'UTC-5',
  UTC_4 = 'UTC-4',
  UTC_3 = 'UTC-3',
  UTC_2 = 'UTC-2',
  UTC_1 = 'UTC-1',
  UTC = 'UTC+0',
  UTC1 = 'UTC+1',
  UTC2 = 'UTC+2',
  UTC3 = 'UTC+3',
  UTC4 = 'UTC+4',
  UTC5 = 'UTC+5',
  UTC6 = 'UTC+6',
  UTC7 = 'UTC+7',
  UTC8 = 'UTC+8',
  UTC9 = 'UTC+9',
  UTC10 = 'UTC+10',
  UTC11 = 'UTC+11',
  UTC12 = 'UTC+12',
}

type OdsTimezone =`${ODS_TIMEZONE}`;

const ODS_TIMEZONES = Object.freeze(Object.values(ODS_TIMEZONE));

export {
  ODS_TIMEZONE,
  ODS_TIMEZONES,
  type OdsTimezone,
};
