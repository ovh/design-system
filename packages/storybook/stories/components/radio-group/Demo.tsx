import { Radio, RadioControl, RadioGroup, type RadioGroupProp, RadioLabel, type RadioProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = RadioGroupProp & RadioProp & {};

export default (prop: DemoProp) => (
  <RadioGroup
    disabled={ prop.disabled }
    orientation={ prop.orientation }>
    <Radio
      invalid={ prop.invalid }
      value="html">
      <RadioControl />

      <RadioLabel>HTML</RadioLabel>
    </Radio>

    <Radio
      invalid={ prop.invalid }
      value="css">
      <RadioControl />

      <RadioLabel>CSS</RadioLabel>
    </Radio>

    <Radio
      invalid={ prop.invalid }
      value="js">
      <RadioControl />

      <RadioLabel>JavaScript</RadioLabel>
    </Radio>
  </RadioGroup>
);
