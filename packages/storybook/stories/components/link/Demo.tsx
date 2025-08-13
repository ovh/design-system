import { Link, type LinkProp } from '@ovhcloud/ods-react';
import React, { type ReactNode } from 'react';

type DemoProp = LinkProp & {
  children?: ReactNode,
}

export default ({ children, ...prop }: DemoProp) => (
  <Link { ...prop }>
    { children }
  </Link>
);
