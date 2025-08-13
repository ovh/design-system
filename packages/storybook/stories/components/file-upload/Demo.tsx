import { FileUpload, type FileUploadAcceptDetail, FileUploadItem, FileUploadList, type FileUploadProp, type FileUploadRejectDetail } from '@ovhcloud/ods-react';
import React, { useState } from 'react';

export default (prop: FileUploadProp) => {
  const [error, setError] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);

  function onAccept({ files }: FileUploadAcceptDetail): void {
    setFiles(files);
    setError('');
  }

  function onReject({ files }: FileUploadRejectDetail): void {
    setError(files.length ? 'File(s) rejected' : '');
  }

  return (
    <FileUpload
      { ...prop }
      error={ prop.error || error }
      onFileAccept={ onAccept }
      onFileReject={ onReject }>
      <FileUploadList>
        {
          files.map((file: File, idx) => (
            <FileUploadItem
              file={ file }
              key={ idx } />
          ))
        }
      </FileUploadList>
    </FileUpload>
  );
};
