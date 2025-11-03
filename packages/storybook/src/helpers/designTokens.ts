import { TOKEN_TYPE, TOKEN_TYPES } from '../constants/designTokens';

function guessTokenType(name: string): TOKEN_TYPE {
  return TOKEN_TYPES.find((type) => name.includes(`-${type}`)) || TOKEN_TYPE.unknown;
}

export {
  guessTokenType,
};
