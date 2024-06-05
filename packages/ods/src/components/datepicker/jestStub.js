class Stub {
  constructor() {}

  static locales = {};

  static formatDate(date, format) {
    return `${date} ${format}`;
  }

  static parseDate() {

  }
}

// eslint-disable-next-line no-undef
module.exports = {
  Datepicker: Stub,
};
