import { FormField, FormFieldLabel } from '../../../form-field/src';
import { Quantity, QuantityControl, QuantityInput } from '../../src';

export default {
  component: Quantity,
  title: 'Tests rendering',
};

export const CustomStyle = () => (
  <Quantity style={{ height: '42px' }}>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);

export const IdFormField = () => (
  <FormField id="form-field-id">
    <FormFieldLabel>
      Quantity:
    </FormFieldLabel>

    <Quantity>
      <QuantityControl>
        <QuantityInput />
      </QuantityControl>
    </Quantity>
  </FormField>
);

export const IdSet = () => (
  <Quantity>
    <QuantityControl>
      <QuantityInput id="input-id" />
    </QuantityControl>
  </Quantity>
);

export const IdUnset = () => (
  <Quantity>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);

export const Render = () => (
  <Quantity>
    <QuantityControl>
      <QuantityInput />
    </QuantityControl>
  </Quantity>
);
