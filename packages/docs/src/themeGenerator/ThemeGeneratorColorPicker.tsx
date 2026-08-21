import { ColorPicker, type ColorPickerValueChangeDetails, parseColor } from '@ark-ui/react/color-picker';
import { type FocusEvent, type KeyboardEvent, type MouseEvent } from 'react';
import { FormField, FormFieldLabel, Input, Quantity, QuantityControl, QuantityInput } from '../ods';
import styles from './themeGeneratorColorPicker.module.css';

/* Ported from the Storybook theme generator: Ark color picker (hex + alpha)
   dressed with ODS form controls. */

interface ThemeGeneratorColorPickerProp {
  className?: string;
  disabled?: boolean;
  label?: string;
  onChange: (value: string) => void;
  showLabel?: boolean;
  value: string;
}

type ArkColor = ReturnType<typeof parseColor>;

function formatColorValue(colorValue: ArkColor): string {
  const hexColor = colorValue.toString('hex');
  const alpha = colorValue.getChannelValue('alpha');
  const roundedAlpha = Math.round(alpha * 100) / 100;

  if (roundedAlpha === 1) {
    return hexColor;
  }
  const alphaHex = Math.round(roundedAlpha * 255).toString(16).padStart(2, '0');
  return `${hexColor}${alphaHex}`;
}

function parseColorWithRoundedAlpha(colorString: string): ArkColor {
  try {
    const color = parseColor(colorString.startsWith('var(') ? '#000000' : colorString);
    const alpha = color.getChannelValue('alpha');
    return color.withChannelValue('alpha', Math.round(alpha * 100) / 100);
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
}: ThemeGeneratorColorPickerProp) => {
  function handleValueChange(details: ColorPickerValueChangeDetails): void {
    onChange(formatColorValue(details.value));
  }

  function roundAlphaValue(inputValue: string): void {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      const rounded = Math.round(parsedValue * 100) / 100;
      const newColor = parseColorWithRoundedAlpha(value).withChannelValue('alpha', rounded);
      onChange(formatColorValue(newColor));
    }
  }

  function handleAlphaBlur(e: FocusEvent<HTMLInputElement>): void {
    roundAlphaValue(e.target.value);
  }

  function handleAlphaKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    e.stopPropagation();
    if (e.key === 'Enter') {
      roundAlphaValue(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  function handleClick(e: MouseEvent): void {
    e.stopPropagation();
  }

  return (
    <ColorPicker.Root
      className={ `${styles['theme-generator-color-picker']} ${className}` }
      disabled={ disabled }
      onClick={ handleClick }
      onValueChange={ handleValueChange }
      value={ parseColorWithRoundedAlpha(value) }>
      { showLabel && label && (
        <ColorPicker.Label className={ styles['theme-generator-color-picker__label'] }>
          { label }
        </ColorPicker.Label>
      ) }
      <ColorPicker.Control className={ styles['theme-generator-color-picker__control'] }>
        <ColorPicker.ChannelInput
          asChild
          channel="hex"
          onKeyDown={ (e) => e.stopPropagation() }>
          <Input type="text" />
        </ColorPicker.ChannelInput>
        <ColorPicker.Trigger className={ styles['theme-generator-color-picker__control__trigger'] }>
          <ColorPicker.ValueSwatch className={ styles['theme-generator-color-picker__control__trigger__swatch'] } />
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <ColorPicker.Positioner>
        <ColorPicker.Content className={ styles['theme-generator-color-picker__popover'] }>
          <ColorPicker.Area className={ styles['theme-generator-color-picker__popover__area'] }>
            <ColorPicker.AreaBackground className={ styles['theme-generator-color-picker__popover__area__background'] } />
            <ColorPicker.AreaThumb className={ styles['theme-generator-color-picker__popover__area__thumb'] } />
          </ColorPicker.Area>

          <ColorPicker.ChannelSlider channel="hue" className={ styles['theme-generator-color-picker__popover__slider'] }>
            <ColorPicker.ChannelSliderTrack className={ styles['theme-generator-color-picker__popover__slider__track'] } />
            <ColorPicker.ChannelSliderThumb className={ styles['theme-generator-color-picker__popover__slider__thumb'] } />
          </ColorPicker.ChannelSlider>

          <ColorPicker.ChannelSlider channel="alpha" className={ styles['theme-generator-color-picker__popover__slider'] }>
            <ColorPicker.TransparencyGrid className={ styles['theme-generator-color-picker__popover__slider__transparency-grid'] } />
            <ColorPicker.ChannelSliderTrack className={ styles['theme-generator-color-picker__popover__slider__track'] } />
            <ColorPicker.ChannelSliderThumb className={ styles['theme-generator-color-picker__popover__slider__thumb'] } />
          </ColorPicker.ChannelSlider>

          <div className={ styles['theme-generator-color-picker__popover__inputs'] }>
            <FormField>
              <FormFieldLabel>Hex</FormFieldLabel>
              <ColorPicker.ChannelInput
                asChild
                channel="hex"
                onKeyDown={ (e) => e.stopPropagation() }>
                <Input type="text" />
              </ColorPicker.ChannelInput>
            </FormField>
            <FormField>
              <FormFieldLabel>Alpha</FormFieldLabel>
              <ColorPicker.ChannelInput
                asChild
                channel="alpha"
                onBlur={ handleAlphaBlur }
                onKeyDown={ handleAlphaKeyDown }>
                <Quantity max={ 1 } min={ 0 } step={ 0.01 }>
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
