import { BADGE_COLOR, BADGE_SIZE, Badge, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button, CARD_COLOR, Card, Clipboard, ClipboardControl, ClipboardTrigger, Code, ICON_NAME, Icon, TEXT_PRESET, Text } from '@ovhcloud/ods-react';
import lang from '@shikijs/langs/typescript';
import theme from '@shikijs/themes/nord';
import classNames from 'classnames';
import React, { type FC, type JSX, useEffect, useState } from 'react';
import styles from './iconDetails.module.css';

interface Prop {
  aliases?: string[];
  name?: ICON_NAME;
  onClose: () => void;
}

const COLOR_VARIANTS = ['primary', 'critical', 'neutral', 'success', 'warning'];

const IconDetails: FC<Prop> = ({
  aliases,
  name,
  onClose,
}): JSX.Element => {
  const [color, setColor] = useState<string>();

  useEffect(() => {
    setColor(undefined);
  }, [name, setColor]);

  if (!name) {
    return <></>;
  }

  function onColorVariantClick(variant: string): void {
    setColor(color === variant ? undefined : variant);
  }

  return (
    <div className={ styles['icon-details'] }>
      <div className={ styles['icon-details__header'] }>
        <Text
          as="span"
          preset={ TEXT_PRESET.heading2 }>
          { name }
        </Text>

        <Button
          color={ BUTTON_COLOR.neutral }
          onClick={ onClose }
          size={ BUTTON_SIZE.sm }
          variant={ BUTTON_VARIANT.ghost }>
          <Icon name={ ICON_NAME.xmark } />
        </Button>

        {
          aliases && aliases.length > 0 &&
          <div className={ styles['icon-details__header__aliases'] }>
            {
              aliases.map((alias) => (
                <Badge
                  color={ BADGE_COLOR.neutral }
                  key={ alias }
                  size={ BADGE_SIZE.sm }>
                  { alias }
                </Badge>
              ))
            }
          </div>
        }
      </div>

      <Card
        className={ styles['icon-details__preview'] }
        color={ CARD_COLOR.neutral }
        style={{
          color: color && `var(--ods-color-${color}-500)`,
        }}>
        <Icon name={ name } />
      </Card>

      <div className={ styles['icon-details__colors'] }>
        {
          COLOR_VARIANTS.map((variant) => (
            <button
              className={ classNames(
                styles['icon-details__colors__color'],
                { [styles['icon-details__colors__color--selected']]: color === variant },
              )}
              key={ variant }
              onClick={ () => onColorVariantClick(variant) }
              style={{ backgroundColor: `var(--ods-color-${variant}-500)` }}
              title="primary" />
          ))
        }
      </div>

      <Clipboard
        aria-label={ `Copy value ${name}` }
        positionerStyle={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 2)' }}
        value={ name }>
        <ClipboardControl />

        <ClipboardTrigger
          labelCopy="Copy to clipboard"
          labelCopySuccess="Copied!" />
      </Clipboard>

      <Code
        aria-label="Import code sample"
        canCopy
        highlighter={{
          language: lang,
          theme: theme,
        }}
        positionerStyle={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 2)' }}>
        {`import { ICON_NAME, Icon } from '@ovhcloud/ods-react';`}
      </Code>

      <Code
        aria-label="JSX usage code sample"
        canCopy
        highlighter={{
          language: lang,
          theme: theme,
        }}
        positionerStyle={{ zIndex: 'calc(var(--ods-theme-overlay-z-index) + 2)' }}>
        {`<Icon name={ ICON_NAME.${name} } />`}
      </Code>
    </div>
  );
};

export {
  IconDetails,
};
