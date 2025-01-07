import React from 'react-dom/client';
import { ODS_ICON_NAME } from '@ovhcloud/ods-components';
import OdsIcon from '@ovhcloud/ods-components-react/ods-icon';

const Icon = () => {
  return (
    <OdsIcon name={ ODS_ICON_NAME.plus } />
  );
};

export default Icon;
