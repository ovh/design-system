import { Password, type PasswordProp } from '@ovhcloud/ods-react';
import React from 'react';

export default (prop: PasswordProp) => (
  <Password { ...prop } />
);
