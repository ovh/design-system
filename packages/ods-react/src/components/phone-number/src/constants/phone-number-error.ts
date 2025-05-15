enum PHONE_NUMBER_PARSING_ERROR {
  invalidCountry = 'invalid-country',
  invalidLength = 'invalid-length',
  notANumber = 'not-a-number',
  tooLong = 'too-long',
  tooShort = 'too-short',
  unknownError = 'unknown-error',
}

type PhoneNumberParsingError = `${PHONE_NUMBER_PARSING_ERROR}`;

const PHONE_NUMBER_PARSING_ERRORS = Object.freeze(Object.values(PHONE_NUMBER_PARSING_ERROR));

export {
  PHONE_NUMBER_PARSING_ERROR,
  PHONE_NUMBER_PARSING_ERRORS,
  type PhoneNumberParsingError,
};
