import { OdsBreadcrumb, OdsBreadcrumbItem } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './breadcrumb.scss';

function Breadcrumb (): ReactElement {
  const location = useLocation();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    let lastPath = '';

    setItems(pathParts.map((pathPart) => {
      lastPath += `/${pathPart}`;

      return {
        href: lastPath,
        label: pathPart,
      };
    }));
  }, [location.pathname]);

  return (
    <OdsBreadcrumb>
        {
        items.map((item: any) => (
          <OdsBreadcrumbItem className={ styles['breadcrumb__item'] }
                             key={ item.href }
                             href={ item.href }
                             label={ item.label } />
        ))
      }
    </OdsBreadcrumb>
  );
}

export { Breadcrumb };
