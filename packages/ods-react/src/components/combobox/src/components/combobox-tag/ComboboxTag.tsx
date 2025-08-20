import classNames from 'classnames';
import { type JSX } from 'react';
import { type MultiValueProps } from 'react-select';
import { TAG_SIZE, Tag } from '../../../../tag/src';
import { type ComboboxItem, useCombobox } from '../../contexts/useCombobox';
import styles from './comboboxTag.module.scss';

const ComboboxTag = ({ data, isFocused, removeProps, selectProps }: MultiValueProps<ComboboxItem>): JSX.Element => {
  const { readOnly } = useCombobox();

  return (
    <div { ...removeProps }>
      <Tag
        className={ classNames(
          { [styles['combobox-tag__item--focused']]: isFocused },
        )}
        disabled={ selectProps.isDisabled || readOnly }
        size={ TAG_SIZE.md }
        tabIndex={ -1 }>
        { data.label }
      </Tag>
    </div>
  );
};

ComboboxTag.displayName = 'ComboboxTag';

export {
  ComboboxTag,
};
