import { useState } from 'react';
import { FormField } from '../../form-field/src';
import { ICON_NAME, Icon } from '../../icon/src';
import { Select, SelectContent, SelectControl, type SelectCustomGroupRendererArg, type SelectCustomItemRendererArg, type SelectCustomOptionRendererArg, SelectLabel } from '.';
import style from './dev.module.css';

export default {
  component: Select,
  title: 'Select dev',
};

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
      <SelectLabel>Label</SelectLabel>
      <SelectControl />
      <SelectContent />
    </Select>
  );
}

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
    <SelectLabel className={ style['custom-select-label'] }>Label</SelectLabel>
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
      <Select
        items={[
          { label: 'Dog', value: 'dog' , customRendererData: { specie: 'Canis familiaris' } },
          { label: 'Cat', value: 'cat' },
          { label: 'Hamster', value: 'hamster', customRendererData: { specie: 'Cricetinae' } },
          { label: 'Parrot', value: 'parrot' },
          { label: 'Spider', value: 'spider' },
          { label: 'Goldfish', value: 'goldfish' },
        ]}>
        <SelectLabel>Select simple</SelectLabel>

        <SelectControl customItemRenderer={ renderItem } />

        <SelectContent customOptionRenderer={ renderOption } />
      </Select>

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
        <SelectLabel>Select multiple</SelectLabel>

        <SelectControl customItemRenderer={ renderItem } />

        <SelectContent />
      </Select>

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
        <SelectLabel>Select multiple merged</SelectLabel>

        <SelectControl customItemRenderer={ renderItem } />

        <SelectContent />
      </Select>

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
        <SelectLabel>Select group</SelectLabel>

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
    <SelectLabel>Label</SelectLabel>
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
    <SelectLabel>Label</SelectLabel>
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
    <SelectLabel>Label</SelectLabel>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const Empty = () => (
  <Select items={[]}>
    <SelectLabel>Label</SelectLabel>
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
    <SelectLabel>Label</SelectLabel>
    <SelectControl />
    <SelectContent />
  </Select>
);

export const InFormField = () => (
  <FormField>
    <Select
      items={[
        { label: 'Dog', value:'dog' },
        { label: 'Cat', value:'cat' },
        { label: 'Hamster', value:'hamster' },
        { label: 'Parrot', value:'parrot' },
        { label: 'Spider', value:'spider' },
        { label: 'Goldfish', value:'goldfish' },
      ]}>
      <SelectLabel>Label</SelectLabel>
      <SelectControl />
      <SelectContent />
    </Select>
  </FormField>
);

export const Multiple = () => (
  <>
    <Select
      items={[
        { label: 'Dog', value:'dog' },
        { label: 'Cat', value:'cat' },
        { label: 'Hamster', value:'hamster', disabled: true },
        { label: 'Parrot', value:'parrot' },
        { label: 'Spider', value:'spider' },
        { label: 'Goldfish', value:'goldfish' },
      ]}
      multiple>
      <SelectLabel>Multiple simple</SelectLabel>
      <SelectControl placeholder="Please select" />
      <SelectContent />
    </Select>

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
      <SelectLabel>Multiple merged</SelectLabel>
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
    <SelectLabel>Label</SelectLabel>
    <SelectControl placeholder="Please select" />
    <SelectContent />
  </Select>
);

export const Readonly = () => (
  <Select
    readOnly
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}>
    <SelectLabel>Label</SelectLabel>
    <SelectControl />
    <SelectContent />
  </Select>
);
