enum FILE_UPLOAD_VARIANT {
  compact = 'compact',
  default = 'default',
}

type FileUploadVariant =`${FILE_UPLOAD_VARIANT}`;

const FILE_UPLOAD_VARIANTS = Object.freeze(Object.values(FILE_UPLOAD_VARIANT));

export {
  FILE_UPLOAD_VARIANT,
  FILE_UPLOAD_VARIANTS,
  type FileUploadVariant,
};
