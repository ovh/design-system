import React from 'react-dom/client';
import { OdsSelect } from 'ods-components-react';

const Select = () => {
  return (
    <OdsSelect name="react-select" allowMultiple>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </OdsSelect>
  );
};

export default Select;
