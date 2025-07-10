import { useMemo, useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { Select, SelectContent, SelectControl, type SelectCustomGroupRendererArg, type SelectCustomItemRendererArg, type SelectCustomOptionRendererArg, type SelectOptionItem } from '.';
import { TEXT_PRESET, Text } from '../../text/src';
import style from './dev.module.css';

export default {
  component: Select,
  title: 'Select dev',
};

export const Accessibility = () => {
  const items = useMemo(() => {
    return ['a', 'b', 'c', 'd', 'e'].reduce<SelectOptionItem[]>((res, letter) => {
      let value = '';
      for (let i = 0; i < 10; i++) {
        value += letter;
        res.push({ label: `${value[0].toUpperCase()}${value.slice(1)}`, value });
      }
      return res;
    }, [])
  }, []);

  return (
    <Select items={ items }>
      <SelectControl />
      <SelectContent />
    </Select>
  );
}

export const Controlled = () => {
  const [values, setValues] = useState(['dog']);

  return (
    <Select
      items={[
        { label: 'Dog', value:'dog' },
        { label: 'Cat', value:'cat', customRendererData: () => 'p' },
        { label: 'Hamster', value:'hamster' },
        { label: 'Parrot', value:'parrot' },
        { label: 'Spider', value:'spider' },
        { label: 'Goldfish', value:'goldfish' },
      ]}
      onValueChange={ ({ value }) => setValues(value) }
      value={ values }>
      <SelectControl />
      <SelectContent />
    </Select>
  );
}

export const CustomLabel = () => (
  <>
    <Text
      htmlFor="select"
      preset={ TEXT_PRESET.label }>
      Label:
    </Text>

    <Select
      items={[
        { label: 'Dog', value:'dog' },
        { label: 'Cat', value:'cat' },
        { label: 'Hamster', value:'hamster' },
        { label: 'Parrot', value:'parrot' },
        { label: 'Spider', value:'spider' },
        { label: 'Goldfish', value:'goldfish' },
      ]}>
      <SelectControl id="select" />
      <SelectContent />
    </Select>
  </>
);

export const CustomCSS = () => (
  <Select
    className={ style['custom-select'] }
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}>
    <SelectControl className={ style['custom-select-control'] } />
    <SelectContent className={ style['custom-select-content'] } />
  </Select>
);

export const CustomRenderer = () => {
  function renderGroup({ customData, label }: SelectCustomGroupRendererArg) {
    return (
      <span>
        <b>{ customData?.code }</b> - { label }
      </span>
    );
  }

  function renderItem({ text }: SelectCustomItemRendererArg) {
    return (
      <span>
        <Icon name={ ICON_NAME.check } />&nbsp;{ text }
      </span>
    );
  }

  function renderOption({ customData, label }: SelectCustomOptionRendererArg) {
    return (
      <span>
        { label }{ !!customData && ` (${customData.specie})` }
      </span>
    );
  }

  return (
    <>
      <p>Select simple</p>

      <Select
        items={[
          { label: 'Dog', value: 'dog' , customRendererData: { specie: 'Canis familiaris' } },
          { label: 'Cat', value: 'cat' },
          { label: 'Hamster', value: 'hamster', customRendererData: { specie: 'Cricetinae' } },
          { label: 'Parrot', value: 'parrot' },
          { label: 'Spider', value: 'spider' },
          { label: 'Goldfish', value: 'goldfish' },
        ]}>
        <SelectControl customItemRenderer={ renderItem } />

        <SelectContent customOptionRenderer={ renderOption } />
      </Select>

      <p>Select multiple</p>

      <Select
        items={[
          { label: 'Dog', value: 'dog' },
          { label: 'Cat', value: 'cat' },
          { label: 'Hamster', value: 'hamster' },
          { label: 'Parrot', value: 'parrot' },
          { label: 'Spider', value: 'spider' },
          { label: 'Goldfish', value: 'goldfish' },
        ]}
        multiple>
        <SelectControl customItemRenderer={ renderItem } />

        <SelectContent />
      </Select>

      <p>Select multiple merged</p>

      <Select
        items={[
          { label: 'Dog', value: 'dog' },
          { label: 'Cat', value: 'cat' },
          { label: 'Hamster', value: 'hamster' },
          { label: 'Parrot', value: 'parrot' },
          { label: 'Spider', value: 'spider' },
          { label: 'Goldfish', value: 'goldfish' },
        ]}
        multiple="merge">
        <SelectControl customItemRenderer={ renderItem } />

        <SelectContent />
      </Select>

      <p>Select group</p>

      <Select
        items={[
          {
            customRendererData: { code: 'EU' },
            label: 'Europe',
            options: [
              { label: 'France', value: 'fr' },
              { label: 'Germany', value: 'de', disabled: true },
              { label: 'Italy', value: 'it' },
            ]
          },
          {
            customRendererData: { code: 'AS' },
            disabled: true,
            label: 'Asia',
            options: [
              { label: 'China', value: 'cn' },
              { label: 'Japan', value: 'jp' },
              { label: 'Russia', value: 'ru' },
            ]
          },
          { label: 'World', value: 'world' },
        ]}>
        <SelectControl customItemRenderer={ renderItem } />

        <SelectContent customGroupRenderer={ renderGroup } />
      </Select>
    </>
  );
};

export const Default = () => (
  <Select
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const DifferentWidth = () => (
  <Select
    fitControlWidth={ false }
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const Disabled = () => (
  <Select
    disabled
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const Empty = () => (
  <Select items={[]}>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const Groups = () => (
  <Select
    items={[
      {
        label: 'Europe',
        options: [
          { label: 'France', value: 'fr' },
          { label: 'Germany', value: 'de', disabled: true },
          { label: 'Italy', value: 'it' },
        ]
      },
      {
        label: 'Asia', disabled: true,
        options: [
          { label: 'China', value: 'cn' },
          { label: 'Japan', value: 'jp' },
          { label: 'Russia', value: 'ru' },
        ]
      },
      { label: 'World', value: 'world' },
    ]}>
    <SelectControl />
    <SelectContent />
  </Select>
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
          Label:
        </FormFieldLabel>

        <Select
          items={[
            { label: 'Dog', value:'dog' },
            { label: 'Cat', value:'cat' },
            { label: 'Hamster', value:'hamster' },
            { label: 'Parrot', value:'parrot' },
            { label: 'Spider', value:'spider' },
            { label: 'Goldfish', value:'goldfish' },
          ]}>
          <SelectControl />
          <SelectContent />
        </Select>

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
  <Select
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}
    invalid>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const Multiple = () => (
  <>
    <p>Multiple simple</p>

    <Select
      id="multiple-simple"
      items={[
        { label: 'Dog', value:'dog' },
        { label: 'Cat', value:'cat' },
        { label: 'Hamster', value:'hamster', disabled: true },
        { label: 'Parrot', value:'parrot' },
        { label: 'Spider', value:'spider' },
        { label: 'Goldfish', value:'goldfish' },
      ]}
      multiple>
      <SelectControl placeholder="Please select" />
      <SelectContent />
    </Select>

    <p>Multiple merged</p>

    <Select
      items={[
        { label: 'Dog', value:'dog' },
        { label: 'Cat', value:'cat' },
        { label: 'Hamster', value:'hamster', disabled: true },
        { label: 'Parrot', value:'parrot' },
        { label: 'Spider', value:'spider' },
        { label: 'Goldfish', value:'goldfish' },
      ]}
      multiple="merge">
      <SelectControl placeholder="Please select" />
      <SelectContent />
    </Select>
  </>
);

export const Placeholder = () => (
  <Select
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster', disabled: true },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}>
    <SelectControl placeholder="Please select" />
    <SelectContent />
  </Select>
);

export const Readonly = () => (
  <Select
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}
    readOnly>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const States = () => (
  <>
    <Select
      defaultValue="value"
      disabled
      items={ [{ label: 'Disabled & Readonly', value:'value' }] }
      readOnly>
      <SelectControl />
      <SelectContent />
    </Select>

    <Select
      defaultValue="value"
      disabled
      items={ [{ label: 'Disabled & Invalid', value:'value' }] }
      invalid>
      <SelectControl />
      <SelectContent />
    </Select>

    <Select
      defaultValue="value"
      items={ [{ label: 'Readonly & Invalid', value:'value' }] }
      invalid
      readOnly>
      <SelectControl />
      <SelectContent />
    </Select>

    <Select
      defaultValue="value"
      disabled
      items={ [{ label: 'Disabled & Readonly & Invalid', value:'value' }] }
      invalid
      readOnly>
      <SelectControl />
      <SelectContent />
    </Select>
  </>
);
