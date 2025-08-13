import { Skeleton, type SkeletonProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: SkeletonProp) => (
  <Skeleton { ...prop } />
);
