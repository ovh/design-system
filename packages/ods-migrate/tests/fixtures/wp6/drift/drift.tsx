import { Divider } from '@ovhcloud/ods-react';
import { DIVIDER_COLOR } from '@ovhcloud/ods-react';

export const A = () => (
  <div>
    <Divider />
    <span className="text-[--ods-color-primary-500]">a</span>
    <span style={{ boxShadow: '0 0 1px var(--ods-color-primary-500)' }}>b</span>
  </div>
);
