import { OdsTimepicker } from '@ovhcloud/ods-components/react';
import { JSX } from '@ovhcloud/ods-components';
import React, { HTMLAttributes, RefAttributes } from 'react';

const TestTimepicker: React.FC<
  Partial<
    JSX.OdsTimepicker &
    HTMLAttributes<HTMLOdsTimepickerElement> &
    RefAttributes<HTMLOdsTimepickerElement>
  >
> = (props) => {
  return (
    <div>
      <OdsTimepicker
        name="timepicker"
        { ...props } />
    </div>
  );
}

export { TestTimepicker };
