import { ColorPicker, type ColorPickerValueChangeDetails, parseColor } from '@ark-ui/react/color-picker';
import React, { type FocusEvent, type KeyboardEvent, type MouseEvent } from 'react';
import { FormField, FormFieldLabel, Input, Quantity, QuantityControl, QuantityInput } from '@ovhcloud/ods-react';
import styles from './themeGeneratorColorPicker.module.css';

interface ThemeGeneratorColorPickerProps {
  className?: string;
  disabled?: boolean;
  label?: string;
  onChange: (value: string) => void;
  showLabel?: boolean;
  value: string;
}

function formatColorValue(colorValue: any): string {
  const hexColor = colorValue.toString('hex');
  const alpha = colorValue.getChannelValue('alpha');

  const roundedAlpha = Math.round(alpha * 100) / 100;

  if (roundedAlpha === 1) {
    return hexColor;
  }

  const alphaHex = Math.round(roundedAlpha * 255).toString(16).padStart(2, '0');

  return `${hexColor}${alphaHex}`;
}

function parseColorWithRoundedAlpha(colorString: string) {
  try {
    const color = parseColor(colorString.startsWith('var(') ? '#000000' : colorString);
    const alpha = color.getChannelValue('alpha');
    const roundedAlpha = Math.round(alpha * 100) / 100;
    return color.withChannelValue('alpha', roundedAlpha);
  } catch {
    return parseColor('#000000');
  }
}

const ThemeGeneratorColorPicker = ({
  className = '',
  disabled = false,
  label,
  onChange,
  showLabel = true,
  value,
}: ThemeGeneratorColorPickerProps) => {
  function handleValueChange(details: ColorPickerValueChangeDetails) {
    onChange(formatColorValue(details.value));
  }

  function roundAlphaValue(inputValue: string) {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      const rounded = Math.round(parsedValue * 100) / 100;
      const currentColor = parseColorWithRoundedAlpha(value);
      const newColor = currentColor.withChannelValue('alpha', rounded);
      onChange(formatColorValue(newColor));
    }
  }

  function handleAlphaBlur(e: FocusEvent<HTMLInputElement>) {
    roundAlphaValue(e.target.value);
  }

  function handleAlphaKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    e.stopPropagation();
    if (e.key === 'Enter') {
      roundAlphaValue(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  function handleClick(e: MouseEvent) {
    e.stopPropagation();
  }

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
