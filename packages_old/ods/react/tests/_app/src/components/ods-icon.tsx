import React from 'react-dom/client';
import { ODS_ICON_NAME } from '@ovhcloud/ods-components';
import { OdsIcon } from 'ods-components-react';

const Icon = () => {
  return (
    <OdsIcon name={ ODS_ICON_NAME.plus } />
  );
};

export default Icon;
