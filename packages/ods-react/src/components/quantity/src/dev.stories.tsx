import { FormField, FormFieldLabel } from '../../form-field/src';
import { Quantity, QuantityControl, QuantityInput, QuantityLabel } from '.';
import style from './dev.module.css';

export default {
  component: Quantity,
  title: 'Quantity dev',
};

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

export const InFormField = () => (
  <FormField>
    <Quantity>
      <FormFieldLabel>Label:</FormFieldLabel>

      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  </FormField>
);

export const Invalid = () => (
  <Quantity invalid>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);

export const MaxMin = () => (
  <>
    <Quantity
      defaultValue="10"
      max={ 10 }>
      <QuantityLabel>Max:</QuantityLabel>

      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>

    <Quantity
      defaultValue="0"
      min={ 0 }>
      <QuantityLabel>Min:</QuantityLabel>

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
