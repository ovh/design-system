/* eslint-disable */
class Stub {
  constructor() {}

  static locales = {};

  static formatDate(date, format) {
    // validity check from the original lib
    if (isNaN(date) || (!date && date !== 0)) {
      return '';
    }

    // default format for tests
    return `${date} ${format}`;
  }

  static parseDate() {

  }
}

module.exports = {
  Datepicker: Stub,
};
