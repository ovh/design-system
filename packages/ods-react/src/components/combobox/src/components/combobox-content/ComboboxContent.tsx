import classNames from 'classnames';
import { type JSX, useEffect } from 'react';
import { type MenuProps, components } from 'react-select';
import { type ComboboxItem, useCombobox } from '../../contexts/useCombobox';
import styles from './comboboxContent.module.scss';

const ComboboxContent = ({ children, ...props }: MenuProps<ComboboxItem>): JSX.Element => {
  const { setComputedPlacement } = useCombobox();

  useEffect(() => {
    setComputedPlacement(props.placement);
  }, [props.placement, setComputedPlacement]);

  return (
    <components.Menu
      className={ classNames(
        styles['combobox-content'],
        { [styles['combobox-content--open-bottom']]: props.placement === 'bottom' },
        { [styles['combobox-content--open-top']]: props.placement === 'top' },
        { [styles['combobox-content--disabled']]: props.selectProps.isDisabled },
      )}
      { ...props }
      innerProps={{
        ...props.innerProps,
        // @ts-ignore keep this as it was available on previous composable version
        'data-ods': 'combobox-content',
      }}>
      { children }
    </components.Menu>
  );
};

ComboboxContent.displayName = 'ComboboxContent';

export {
  ComboboxContent,
};
