import { BUTTON_VARIANT, Button, type ICON_NAME, Icon, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import classNames from 'classnames';
import React, { type FC, type JSX } from 'react';
import styles from './iconPreview.module.css';

interface Prop {
  isSelected: boolean;
  name: ICON_NAME;
  onSelect: () => void;
}

const IconPreview: FC<Prop> = ({
  isSelected,
  name,
  onSelect,
}): JSX.Element => {
  return (
    <Button
      className={ classNames(
        styles['icon-preview'],
        { [styles['icon-preview--selected']]: isSelected },
      )}
      onClick={ onSelect }
      title={ name }
      variant={ isSelected ? BUTTON_VARIANT.outline : BUTTON_VARIANT.ghost }>
      <Icon name={ name } />

      <Text
        className={ styles['icon-preview__name'] }
        preset={ TEXT_PRESET.caption }>
        { name }
      </Text>
    </Button>
  );
};

export {
  IconPreview,
};
