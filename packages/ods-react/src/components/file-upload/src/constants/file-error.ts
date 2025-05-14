enum FILE_REJECTION_CAUSE {
  invalidFile = 'invalid-file',
  maxFileReached = 'max-file-reached',
  sizeTooLarge = 'size-too-large',
  unknownError = 'unknown-error',
  wrongFormat = 'wrong-format',
}

type FileRejectionCause = `${FILE_REJECTION_CAUSE}`;

const FILE_REJECTION_CAUSES = Object.freeze(Object.values(FILE_REJECTION_CAUSE));

export {
  FILE_REJECTION_CAUSE,
  FILE_REJECTION_CAUSES,
  type FileRejectionCause,
};
