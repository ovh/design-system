import React from 'react-dom/client';
import { OdsSelect } from 'ods-components-react';

const Select = () => {
  function onOdsChange() {
    console.log('React select odsChange');
  }

  return (
    <>
      <OdsSelect name="react-select"
                 onOdsChange={ onOdsChange }>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </OdsSelect>

      <OdsSelect isDisabled={ true }
                 name="react-select"
                 onOdsChange={ onOdsChange }>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </OdsSelect>
    </>
  );
};

export default Select;
