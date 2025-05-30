import { useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { TEXT_PRESET, Text } from '../../text/src';
import { Quantity, QuantityControl, QuantityInput } from '.';
import style from './dev.module.css';

export default {
  component: Quantity,
  title: 'Quantity dev',
};

export const CustomLabel = () => (
  <>
    <Text
      htmlFor="quantity"
      preset={ TEXT_PRESET.label }>
      Label:
    </Text>

    <Quantity>
      <QuantityControl>
        <QuantityInput id="quantity" />
      </QuantityControl>
    </Quantity>
  </>
);

export const CustomCSS = () => (
  <Quantity>
    <QuantityControl className={ style['custom-quantity'] }>
      <QuantityInput className={ style['custom-quantity__input'] } />
    </QuantityControl>
  </Quantity>
);

export const Default = () => (
  <Quantity>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);

export const Disabled = () => (
  <Quantity disabled>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);

export const InFormField = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          My quantity:
        </FormFieldLabel>

        <Quantity>
          <QuantityControl>
            <QuantityInput />
          </QuantityControl>
        </Quantity>

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </>
  );
};

export const Invalid = () => (
  <Quantity invalid>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);

export const MaxMin = () => (
  <>
    <p>Max:</p>

    <Quantity
      defaultValue="10"
      max={ 10 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>

    <p>Min:</p>

    <Quantity
      defaultValue="0"
      min={ 0 }>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  </>
);

export const Placeholder = () => (
  <Quantity>
    <QuantityControl>
      <QuantityInput placeholder="--"  />
    </QuantityControl>
  </Quantity>
);

export const Readonly = () => (
  <Quantity readOnly>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);

export const Step = () => (
  <Quantity step={ 10 }>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);
