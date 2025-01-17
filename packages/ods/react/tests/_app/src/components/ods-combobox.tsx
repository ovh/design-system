import React from 'react-dom/client';
import { OdsCombobox, OdsComboboxItem } from 'ods-components-react';

const Combobox = () => {
  return (
    <OdsCombobox name="react-combobox">
      <OdsComboboxItem value="chocolate">
        Chocolate
      </OdsComboboxItem>
      <OdsComboboxItem value="chocolate-with-nuts">
        Chocolate with nuts
      </OdsComboboxItem>
      <OdsComboboxItem value="coconut">
        Coconut
      </OdsComboboxItem>
      <OdsComboboxItem value="light-mint">
        Light mint
      </OdsComboboxItem>
      <OdsComboboxItem value="mint">
        Mint
      </OdsComboboxItem>
      <OdsComboboxItem value="strawberry">
        Strawberry
      </OdsComboboxItem>
      <OdsComboboxItem value="vanilla">
        Vanilla
      </OdsComboboxItem>
      <OdsComboboxItem value="white-chocolate">
        White chocolate
      </OdsComboboxItem>
    </OdsCombobox>
  );
};

export default Combobox;
