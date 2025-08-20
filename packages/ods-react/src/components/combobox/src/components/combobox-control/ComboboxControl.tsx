import classNames from 'classnames';
import { type JSX } from 'react';
import { type ControlProps, components } from 'react-select';
import { type ComboboxItem, useCombobox } from '../../contexts/useCombobox';
import styles from './comboboxControl.module.scss';

const ComboboxControl = ({ children, ...props }: ControlProps<ComboboxItem>): JSX.Element => {
  const { computedPlacement, invalid, readOnly } = useCombobox();

  return (
    <components.Control
      className={ classNames(
        styles['combobox-control'],
        { [styles['combobox-control--disabled']]: props.selectProps.isDisabled },
        { [styles['combobox-control--invalid']]: invalid },
        { [styles['combobox-control--open-bottom']]: props.menuIsOpen && computedPlacement === 'bottom' },
        { [styles['combobox-control--open-top']]: props.menuIsOpen && computedPlacement === 'top' },
        { [styles['combobox-control--read-only']]: readOnly && !props.selectProps.isDisabled },
      )}
      { ...props }
      innerProps={{
        ...props.innerProps,
        // @ts-ignore keep this as it was available on previous composable version
        'data-ods': 'combobox-control',
      }}>
      { children }
    </components.Control>
  );
};

ComboboxControl.displayName = 'ComboboxControl';

export {
  ComboboxControl,
};
