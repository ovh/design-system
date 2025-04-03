interface OdsFile extends File {
  error?: string;
  isUploaded?: boolean;
  odsId?: string;
  progress?: number;
}

export {
  type OdsFile,
};
