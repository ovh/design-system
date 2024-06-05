import { isFileAccepted } from '../../../../utils/file';
import { type OdsFile } from '../interfaces/attributes';

type FileValidationResult = {
  rejectedFiles: OdsFile[],
  validFiles: OdsFile[],
}

function filterMaxFiles(newFiles: OdsFile[], currentFileCount: number, maxFile?: number): FileValidationResult {
  if (!maxFile && maxFile !== 0) {
    return {
      rejectedFiles: [],
      validFiles: newFiles,
    };
  }

  return {
    rejectedFiles: newFiles.slice(maxFile - currentFileCount, newFiles.length),
    validFiles: newFiles.slice(0, maxFile - currentFileCount),
  };
}

function filterValidFiles(files: OdsFile[], accept: string): FileValidationResult {
  return files.reduce((res, file) => {
    if (isFileAccepted(file, accept)) {
      res.validFiles.push(file);
    } else {
      res.rejectedFiles.push(file);
    }
    return res;
  }, {
    rejectedFiles: [],
    validFiles: [],
  } as FileValidationResult);
}

export {
  filterMaxFiles,
  filterValidFiles,
};
