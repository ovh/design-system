import React from 'react-dom/client';
import OdsBreadcrumb from '@ovhcloud/ods-components-react/ods-breadcrumb';
import OdsBreadcrumbItem from '@ovhcloud/ods-components-react/ods-breadcrumb-item';

const Breadcrumb = () => {
  return (
    <OdsBreadcrumb>
      <OdsBreadcrumbItem href="" icon="home" />
      <OdsBreadcrumbItem href="" label="Link" />
      <OdsBreadcrumbItem href="" label="Text" />
    </OdsBreadcrumb>
  );
};

export default Breadcrumb;
