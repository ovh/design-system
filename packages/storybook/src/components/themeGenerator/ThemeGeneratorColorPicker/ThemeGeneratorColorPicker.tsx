import { Button, BUTTON_SIZE, BUTTON_COLOR, BUTTON_VARIANT, Icon, ICON_NAME } from '@ovhcloud/ods-react';
import { ColorPicker, parseColor } from '@ark-ui/react/color-picker';
import React from 'react';
import styles from './themeGeneratorColorPicker.module.css';

interface ThemeGeneratorColorPickerProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  showLabel?: boolean;
  disabled?: boolean;
}

const formatColorValue = (colorValue: any): string => {
  const hexColor = colorValue.toString('hex');
  const alpha = colorValue.getChannelValue('alpha');

  const roundedAlpha = Math.round(alpha * 100) / 100;

  if (roundedAlpha === 1) {
    return hexColor;
  }

  const alphaHex = Math.round(roundedAlpha * 255).toString(16).padStart(2, '0');

  return `${hexColor}${alphaHex}`;
};

const parseColorWithRoundedAlpha = (colorString: string) => {
  const color = parseColor(colorString);
  const alpha = color.getChannelValue('alpha');
  const roundedAlpha = Math.round(alpha * 100) / 100;
  return color.withChannelValue('alpha', roundedAlpha);
};

const ThemeGeneratorColorPicker = ({
  label,
  value,
  onChange,
  className = '',
  showLabel = true,
  disabled = false,
}: ThemeGeneratorColorPickerProps) => {
  const handleValueChange = (details: any) => {
    onChange(formatColorValue(details.value));
  };

  const roundAlphaValue = (inputValue: string) => {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      const rounded = Math.round(parsedValue * 100) / 100;
      const currentColor = parseColorWithRoundedAlpha(value);
      const newColor = currentColor.withChannelValue('alpha', rounded);
      onChange(formatColorValue(newColor));
    }
  };

  const handleAlphaBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    roundAlphaValue(e.target.value);
  };

  const handleAlphaKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      roundAlphaValue(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <ColorPicker.Root
      className={`${styles['theme-generator-color-picker']} ${className}`}
      value={parseColorWithRoundedAlpha(value)}
      onValueChange={handleValueChange}
      disabled={disabled}
      onClick={handleClick}
    >
      {showLabel && label && (
        <ColorPicker.Label className={styles['theme-generator-color-picker__label']}>
          {label}
        </ColorPicker.Label>
      )}

      <ColorPicker.Control className={styles['theme-generator-color-picker__control']}>
        <ColorPicker.Trigger className={styles['theme-generator-color-picker__trigger']}>
          <ColorPicker.ValueSwatch className={styles['theme-generator-color-picker__swatch']} />
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <ColorPicker.Positioner>
        <ColorPicker.Content className={styles['theme-generator-color-picker__popover']}>
          <ColorPicker.Area className={styles['theme-generator-color-picker__area']}>
            <ColorPicker.AreaBackground className={styles['theme-generator-color-picker__area-background']} />
            <ColorPicker.AreaThumb className={styles['theme-generator-color-picker__area-thumb']} />
          </ColorPicker.Area>

          <ColorPicker.ChannelSlider channel="hue" className={styles['theme-generator-color-picker__slider']}>
            <ColorPicker.ChannelSliderTrack className={styles['theme-generator-color-picker__slider-track']} />
            <ColorPicker.ChannelSliderThumb className={styles['theme-generator-color-picker__slider-thumb']} />
          </ColorPicker.ChannelSlider>

          <ColorPicker.ChannelSlider channel="alpha" className={styles['theme-generator-color-picker__slider']}>
            <ColorPicker.TransparencyGrid className={styles['theme-generator-color-picker__transparency-grid']} />
            <ColorPicker.ChannelSliderTrack className={styles['theme-generator-color-picker__slider-track']} />
            <ColorPicker.ChannelSliderThumb className={styles['theme-generator-color-picker__slider-thumb']} />
          </ColorPicker.ChannelSlider>

          <div className={styles['theme-generator-color-picker__inputs']}>
            <ColorPicker.EyeDropperTrigger asChild>
              <Button variant={BUTTON_VARIANT.default} size={BUTTON_SIZE.sm}>
                <Icon name={ICON_NAME.flaskHalf} color={BUTTON_COLOR.primary} />
              </Button>
            </ColorPicker.EyeDropperTrigger>
            <ColorPicker.ChannelInput
              channel="hex"
              className={styles['theme-generator-color-picker__channel-input']}
              onKeyDown={(e) => e.stopPropagation()}
            />
            <ColorPicker.ChannelInput
              channel="alpha"
              className={styles['theme-generator-color-picker__channel-input']}
              onKeyDown={handleAlphaKeyDown}
              onBlur={handleAlphaBlur}
              step={0.01}
            />
          </div>
        </ColorPicker.Content>
      </ColorPicker.Positioner>

      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
};

export { ThemeGeneratorColorPicker };
