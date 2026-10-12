import { BUTTON_EMPHASIS, Button, type ICON_NAME, Icon, TEXT_PRESET, Text } from '../../../ods';
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
    emphasis={ isSelected ? BUTTON_EMPHASIS.medium : BUTTON_EMPHASIS.low }
    onClick={ onSelect }
    title={ name }>
    <Icon name={ name } />

    <Text className={ styles['icon-preview__name'] } preset={ TEXT_PRESET.caption }>
      { name }
    </Text>
  </Button>
);

export { IconPreview };
