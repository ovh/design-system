import { ColorPicker, parseColor } from '@ark-ui/react/color-picker';
import React from 'react';
import { FormField, FormFieldLabel, Input, Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';
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
  try {
    const color = parseColor(colorString.startsWith('var(') ? '#000000' : colorString);
    const alpha = color.getChannelValue('alpha');
    const roundedAlpha = Math.round(alpha * 100) / 100;
    return color.withChannelValue('alpha', roundedAlpha);
  } catch {
    return parseColor('#000000');
  }
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
      disabled={ disabled }
      onClick={ handleClick }
      onValueChange={ handleValueChange }
      value={ parseColorWithRoundedAlpha(value) }
    >
      {showLabel && label && (
        <ColorPicker.Label className={styles['theme-generator-color-picker__label']}>
          {label}
        </ColorPicker.Label>
      )}
      <ColorPicker.Control className={styles['theme-generator-color-picker__control']}>
        <ColorPicker.ChannelInput
          asChild
          channel="hex"
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input type="text" />
        </ColorPicker.ChannelInput>
        <ColorPicker.Trigger className={styles['theme-generator-color-picker__control__trigger']}>
          <ColorPicker.ValueSwatch className={styles['theme-generator-color-picker__control__trigger__swatch']} />
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <ColorPicker.Positioner>
        <ColorPicker.Content className={styles['theme-generator-color-picker__popover']}>
          <ColorPicker.Area className={styles['theme-generator-color-picker__popover__area']}>
            <ColorPicker.AreaBackground className={styles['theme-generator-color-picker__popover__area__background']} />
            <ColorPicker.AreaThumb className={styles['theme-generator-color-picker__popover__area__thumb']} />
          </ColorPicker.Area>

          <ColorPicker.ChannelSlider channel="hue" className={styles['theme-generator-color-picker__popover__slider']}>
            <ColorPicker.ChannelSliderTrack className={styles['theme-generator-color-picker__popover__slider__track']} />
            <ColorPicker.ChannelSliderThumb className={styles['theme-generator-color-picker__popover__slider__thumb']} />
          </ColorPicker.ChannelSlider>

          <ColorPicker.ChannelSlider channel="alpha" className={styles['theme-generator-color-picker__popover__slider']}>
            <ColorPicker.TransparencyGrid className={styles['theme-generator-color-picker__popover__slider__transparency-grid']} />
            <ColorPicker.ChannelSliderTrack className={styles['theme-generator-color-picker__popover__slider__track']} />
            <ColorPicker.ChannelSliderThumb className={styles['theme-generator-color-picker__popover__slider__thumb']} />
          </ColorPicker.ChannelSlider>

          <div className={styles['theme-generator-color-picker__popover__inputs']}>
            <FormField>
              <FormFieldLabel>
                Hex
              </FormFieldLabel>
              <ColorPicker.ChannelInput
                asChild
                channel="hex"
                onKeyDown={(e) => e.stopPropagation()}
              >
                <Input type="text" />
              </ColorPicker.ChannelInput>
            </FormField>
            <FormField>
              <FormFieldLabel>
                Alpha
              </FormFieldLabel>
              <ColorPicker.ChannelInput
                asChild
                channel="alpha"
                onKeyDown={handleAlphaKeyDown}
                onBlur={handleAlphaBlur}
              >
                <Quantity min={0} max={1} step={0.01}>
                  <QuantityControl>
                    <QuantityInput />
                  </QuantityControl>
                </Quantity>
              </ColorPicker.ChannelInput>
            </FormField>
          </div>
        </ColorPicker.Content>
      </ColorPicker.Positioner>

      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
};

export { ThemeGeneratorColorPicker };
