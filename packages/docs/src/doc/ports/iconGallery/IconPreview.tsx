import { BUTTON_VARIANT, Button, type ICON_NAME, Icon, TEXT_PRESET, Text } from '../../../ods';
import { cx } from '../cx';
import styles from './iconPreview.module.css';

interface IconPreviewProp {
  isSelected: boolean;
  name: ICON_NAME;
  onSelect: () => void;
}

const IconPreview = ({ isSelected, name, onSelect }: IconPreviewProp) => (
  <Button
    className={ cx(styles['icon-preview'], { [styles['icon-preview--selected']]: isSelected }) }
    onClick={ onSelect }
    title={ name }
    variant={ isSelected ? BUTTON_VARIANT.outline : BUTTON_VARIANT.ghost }>
    <Icon name={ name } />

    <Text className={ styles['icon-preview__name'] } preset={ TEXT_PRESET.caption }>
      { name }
    </Text>
  </Button>
);

export { IconPreview };
