import { OdsButton, OdsCombobox , OdsComboboxItem} from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useState } from 'react';
import styles from './testCombobox.scss';

const data1 = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Chocolate with nuts', value: 'chocolate-with-nuts' },
  { label: 'Coconut', value: 'coconut' },
  { label: 'Light mint', value: 'light-mint' },
  { label: 'Mint', value: 'mint' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'White chocolate', value: 'white-chocolate' },
];

const data2 = [
  { label: 'Dog', value: 'dog' },
  { label: 'Cat', value: 'cat' },
  { label: 'Hamster', value: 'hamster' },
  { label: 'Parrot', value: 'parrot' },
  { label: 'Spider', value: 'spider' },
  { label: 'Goldfish', value: 'goldfish' },
];

function CustomDiv({ isGreen, label, value }: any): ReactElement {
  return (
    <div
      className={ styles[`test-combobox__item-${isGreen ? '1' : '2'}`] }
      // style={{ backgroundColor: isGreen ? 'green' : 'cyan' }}
    >
      <h6>{ label }</h6>
      <span>({ value })</span>
    </div>
  );
}

function TestCombobox(): ReactElement {
  const [hasData1, setHasData1] = useState(true);
  const [hasClass1, setHasClass1] = useState(true);

  function onChangeClassClick() {
    setHasClass1((h) => !h);
  }

  function onChangeDataClick() {
    setHasData1((d) => !d);
  }

  return (
    <div>
      <OdsCombobox allowMultiple
                   name="dummy-combobox">
        {
          (hasData1 ? data1 : data2).map(({ label, value }) => (
            <OdsComboboxItem key={ value }
                              value={ value }>
              {/*{ label }*/}
              <CustomDiv isGreen={ hasClass1 }
                         label={ label }
                         value={ value } />
            </OdsComboboxItem>
          ))
        }
      </OdsCombobox>

      <OdsButton label="Change data"
                 onClick={ onChangeDataClick } />

      <OdsButton label="Change class"
                 onClick={ onChangeClassClick } />
    </div>
  );
}

export { TestCombobox };
