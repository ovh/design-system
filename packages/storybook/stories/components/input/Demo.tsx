import { Input, type InputProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = InputProp & {
  masked?: boolean,
};

export default ({ masked, ...prop }: DemoProp) => (
  <Input
    maskOption={{ enable: !!masked }}
    { ...prop } />
);
