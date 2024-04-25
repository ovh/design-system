import React from 'react-dom/client';
import { OdsBreadcrumb, OdsBreadcrumbItem } from 'ods-components-react';

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
