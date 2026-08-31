import { useEffect, useState } from 'react';
import { BADGE_COLOR, BADGE_SIZE, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Badge, Button, CARD_COLOR, Card, Clipboard, ClipboardControl, ClipboardTrigger, ICON_NAME, Icon, TEXT_PRESET, Text } from '../../../ods';
import { type IconNameKey } from '../constants/iconTags';
import { CodeBlock } from '../../CodeBlock';
import { cx } from '../cx';
import styles from './iconDetails.module.css';

/* Drawer content of the icon gallery: name + aliases, a preview tintable with
   the semantic colours, the copyable icon value and the usage snippets. */

interface IconDetailsProp {
  aliases?: string[];
  name?: ICON_NAME;
  nameKey?: IconNameKey;
  onClose: () => void;
}

const COLOR_VARIANTS = ['primary', 'critical', 'neutral', 'success', 'warning'];

/* The copy tooltips must clear the drawer overlay. */
const OVERLAY_POSITIONER = { zIndex: 'calc(var(--ods-theme-overlay-z-index) + 2)' };

const IconDetails = ({ aliases, name, nameKey, onClose }: IconDetailsProp) => {
  const [color, setColor] = useState<string>();

  useEffect(() => {
    setColor(undefined);
  }, [name]);

  if (!name) {
    return null;
  }

  function onColorVariantClick(variant: string): void {
    setColor(color === variant ? undefined : variant);
  }

  return (
    <div className={ styles['icon-details'] }>
      <div className={ styles['icon-details__header'] }>
        <Text as="span" preset={ TEXT_PRESET.heading2 }>
          { name }
        </Text>

        <Button color={ BUTTON_COLOR.neutral } onClick={ onClose } size={ BUTTON_SIZE.sm } variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.xmark } />
        </Button>

        { aliases && aliases.length > 0 && (
          <div className={ styles['icon-details__header__aliases'] }>
            { aliases.map((alias) => (
              <Badge color={ BADGE_COLOR.neutral } key={ alias } size={ BADGE_SIZE.sm }>{ alias }</Badge>
            )) }
          </div>
        ) }
      </div>

      <Card
        className={ styles['icon-details__preview'] }
        color={ CARD_COLOR.neutral }
        style={{ color: color && `var(--ods-color-${color}-500)` }}>
        <Icon name={ name } />
      </Card>

      <div className={ styles['icon-details__colors'] }>
        { COLOR_VARIANTS.map((variant) => (
          <button
            className={ cx(
              styles['icon-details__colors__color'],
              { [styles['icon-details__colors__color--selected']]: color === variant },
            ) }
            key={ variant }
            onClick={ () => onColorVariantClick(variant) }
            style={{ backgroundColor: `var(--ods-color-${variant}-500)` }}
            title={ variant } />
        )) }
      </div>

      <Clipboard aria-label={ `Copy value ${name}` } positionerStyle={ OVERLAY_POSITIONER } value={ name }>
        <ClipboardControl />

        <ClipboardTrigger labelCopy="Copy to clipboard" labelCopySuccess="Copied!" />
      </Clipboard>

      <CodeBlock label="Import code sample" positionerStyle={ OVERLAY_POSITIONER }>
        { `import { ICON_NAME, Icon } from '@ovhcloud/ods-react';` }
      </CodeBlock>

      { /* The snippet needs the camelCase enum KEY, not the kebab-case value. */ }
      <CodeBlock label="JSX usage code sample" positionerStyle={ OVERLAY_POSITIONER }>
        { `<Icon name={ ICON_NAME.${nameKey ?? name} } />` }
      </CodeBlock>
    </div>
  );
};

export { IconDetails };
