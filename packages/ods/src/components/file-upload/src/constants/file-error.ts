enum ODS_FILE_REJECTION_CAUSE {
  maxFileReached = 'max-file-reached',
  wrongFormat = 'wrong-format',
}

type OdsFileRejectionCause = `${ODS_FILE_REJECTION_CAUSE}`;

const ODS_FILE_REJECTION_CAUSES = Object.freeze(Object.values(ODS_FILE_REJECTION_CAUSE));

export {
  ODS_FILE_REJECTION_CAUSE,
  ODS_FILE_REJECTION_CAUSES,
  type OdsFileRejectionCause,
};
