import { type ChangeEvent, type JSX } from 'react';
import {
  FormField,
  FormFieldLabel,
  Input,
  Quantity,
  QuantityControl,
  QuantityInput,
  Range,
  type RangeValueChangeDetail,
  Select,
  SelectContent,
  SelectControl,
  type SelectOptionItem,
  type SelectValueChangeDetail,
} from '../ods';
import { type Token } from '../doc/ports/constants/designTokens';
import { INPUT_TYPE as TOKEN_INPUT, getInputTypeForToken } from '../doc/ports/helpers/designTokens';
import { ThemeGeneratorColorPicker } from './ThemeGeneratorColorPicker';
import styles from './themeGeneratorInput.module.css';

/* One editor per token, its control picked from the token type: color picker,
   quantity (opacity/spacing), range, border-style select, or free text. */

interface ThemeGeneratorInputProp {
  onChange: (value: string) => void;
  token: Token;
}

const STYLE_OPTIONS: SelectOptionItem[] = ['none', 'solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset']
  .map((style) => ({ label: style, value: style }));

const parseNumericValue = (value: string): number => {
  const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
  return isNaN(numericValue) ? 0 : numericValue;
};

const extractUnit = (value: string): string => {
  const match = value.match(/[a-z%]+$/i);
  return match ? match[0] : 'px';
};

const ThemeGeneratorInput = ({ onChange, token }: ThemeGeneratorInputProp): JSX.Element => {
  const inputType = getInputTypeForToken(token);
  const { name, value } = token;

  switch (inputType) {
    case TOKEN_INPUT.color:
      return (
        <ThemeGeneratorColorPicker
          label={ name }
          onChange={ onChange }
          value={ value } />
      );

    case TOKEN_INPUT.quantity: {
      const numericValue = parseNumericValue(value);

      // Opacity tokens: step 0.01, clamped to [0, 1], unitless.
      if (name.includes('opacity')) {
        const clampedValue = Math.max(0, Math.min(1, numericValue));
        return (
          <FormField className={ styles['theme-generator-input'] }>
            <FormFieldLabel>{ name }</FormFieldLabel>
            <Quantity
              max={ 1 }
              min={ 0 }
              onValueChange={ (detail) => onChange(String(detail.valueAsNumber)) }
              step={ 0.01 }
              value={ String(clampedValue) }>
              <QuantityControl>
                <QuantityInput />
              </QuantityControl>
            </Quantity>
          </FormField>
        );
      }

      const unit = extractUnit(value);
      return (
        <FormField className={ styles['theme-generator-input'] }>
          <FormFieldLabel>{ name }</FormFieldLabel>
          <Quantity
            min={ 0 }
            onValueChange={ (detail) => onChange(`${detail.valueAsNumber}${unit}`) }
            step={ 1 }
            value={ String(numericValue) }>
            <QuantityControl>
              <QuantityInput />
            </QuantityControl>
          </Quantity>
        </FormField>
      );
    }

    case TOKEN_INPUT.range: {
      const unit = extractUnit(value);
      const currentValue = Math.max(0, Math.min(32, parseNumericValue(value)));
      return (
        <FormField className={ styles['theme-generator-input'] }>
          <FormFieldLabel>{ name }</FormFieldLabel>
          <Range
            className={ styles['theme-generator-input__range'] }
            max={ 32 }
            min={ 0 }
            onDragging={ (detail: RangeValueChangeDetail) => onChange(`${detail.value[0] ?? 0}${unit}`) }
            onValueChange={ (detail: RangeValueChangeDetail) => onChange(`${detail.value[0] ?? 0}${unit}`) }
            step={ 1 }
            value={ [currentValue] } />
        </FormField>
      );
    }

    case TOKEN_INPUT.select: {
      const currentValue = value.replace(/['"]/g, '').trim();
      const hasValidValue = STYLE_OPTIONS.some((option) => option.value === currentValue);
      return (
        <FormField className={ styles['theme-generator-input'] }>
          <FormFieldLabel>{ name }</FormFieldLabel>
          <Select
            items={ STYLE_OPTIONS }
            onValueChange={ (detail: SelectValueChangeDetail) => onChange(detail.value[0]) }
            value={ hasValidValue ? [currentValue] : undefined }>
            <SelectControl />
            <SelectContent />
          </Select>
        </FormField>
      );
    }

    case TOKEN_INPUT.text:
    default:
      return (
        <FormField className={ styles['theme-generator-input'] }>
          <FormFieldLabel>{ name }</FormFieldLabel>
          <Input
            onChange={ (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value) }
            type="text"
            value={ value } />
        </FormField>
      );
  }
};

export { ThemeGeneratorInput };
