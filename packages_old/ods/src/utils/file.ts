function formatBytes(bytes: number, decimals = 0): string {
  if (typeof bytes !== 'number' || bytes < 0) {
    return '';
  }

  if (bytes === 0) {
    return '0 b';
  }

  const sizes = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
  const decimal = decimals < 0 ? 0 : decimals;
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / (k ** i)).toFixed(decimal))} ${sizes[i]}`;
}

function getFilesFromDataTransfer(dataTransfer: DataTransfer): File[] {
  if(dataTransfer?.files?.length > 0) {
    return Array.from(dataTransfer.files);
  }

  return (Array.from(dataTransfer.items) || [])
    .filter((item) => item.kind === 'file')
    .map((item) => item.getAsFile() as File);
}

function isFileAccepted(file: File, accept?: string): boolean {
  if (!file) {
    return false;
  }

  if (!accept) {
    return true;
  }

  const mimeType = (file.type || '').toLowerCase();
  const baseMimeType = mimeType.replace(/\/.*$/, '');

  return accept.split(',')
    .some((type) => {
      const validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return file.name.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
}

export {
  formatBytes,
  getFilesFromDataTransfer,
  isFileAccepted,
};
