import React, { useState } from 'react';
import { type OdsFile, type OdsFileCancelEvent, type OdsFileChangeEvent } from '@ovhcloud/ods-components';
import { OdsFileUpload } from 'ods-components-react';

const FileUpload = () => {
  const [files, setFiles] = useState<OdsFile[]>([]);

  function onCancel(event: OdsFileCancelEvent) {
    setFiles(() => files.filter((file) => file.odsId !== event.detail.odsId));
  }

  function onChange(event: OdsFileChangeEvent) {
    setFiles(() => files.concat(event.detail));
  }

  return (
    <OdsFileUpload files={ files }
                   onOdsCancel={ onCancel }
                   onOdsChange={ onChange } />
  );
};

export default FileUpload;
