import React, { useState } from 'react';
import { type OdsFile, type OdsFileCancelEvent, type OdsFileChangeEvent } from '@ovhcloud/ods-components';
import { OdsFileUpload } from 'ods-components-react';

const FileUpload = () => {
  const [files, setFiles] = useState<OdsFile[]>([]);

  function onFileCancel(event: OdsFileCancelEvent) {
    setFiles(() => files.filter((file) => file.odsId !== event.detail.odsId));
  }

  function onFileChange(event: OdsFileChangeEvent) {
    setFiles(() => files.concat(event.detail));
  }

  return (
    <OdsFileUpload files={ files }
                   onOdsFileCancel={ onFileCancel }
                   onOdsFileChange={ onFileChange } />
  );
};

export default FileUpload;
