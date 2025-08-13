import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, type BreadcrumbProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: BreadcrumbProp) => (
  <Breadcrumb
      collapseThreshold={ prop.collapseThreshold }
      nbItemsAfterEllipsis={ prop.nbItemsAfterEllipsis }
      nbItemsBeforeEllipsis={ prop.nbItemsBeforeEllipsis }>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Page 1
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Page 2
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Page 3
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          Current page
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
);
