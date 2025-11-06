import React, { type JSX } from 'react';
import {
  FormField,
  FormFieldLabel,
  Input,
  Quantity,
  QuantityControl,
  QuantityInput,
  Range,
  RangeValueChangeDetail,
  Select,
  SelectControl,
  SelectContent,
  type SelectOptionItem,
  type SelectValueChangeDetail,
} from '@ovhcloud/ods-react';
import { type Token } from '../../../constants/designTokens';
import { getInputTypeForToken, INPUT_TYPE } from '../../../helpers/designTokens';
import { ThemeGeneratorColorPicker } from '../themeGeneratorColorPicker/ThemeGeneratorColorPicker';
import styles from './themeGeneratorInput.module.css';

interface ThemeGeneratorInputProps {
  token: Token;
  onChange: (value: string) => void;
}

const STYLE_OPTIONS: SelectOptionItem[] = [
  { label: 'none', value: 'none' },
  { label: 'solid', value: 'solid' },
  { label: 'dashed', value: 'dashed' },
  { label: 'dotted', value: 'dotted' },
  { label: 'double', value: 'double' },
  { label: 'groove', value: 'groove' },
  { label: 'ridge', value: 'ridge' },
  { label: 'inset', value: 'inset' },
  { label: 'outset', value: 'outset' },
];

const parseNumericValue = (value: string): number => {
  // Remove CSS units and parse number
  const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
  return isNaN(numericValue) ? 0 : numericValue;
};

const extractUnit = (value: string): string => {
  // Extract unit from CSS value (e.g., "16px" -> "px", "1rem" -> "rem")
  const match = value.match(/[a-z%]+$/i);
  return match ? match[0] : 'px';
};

const ThemeGeneratorInput = ({ token, onChange }: ThemeGeneratorInputProps): JSX.Element => {
  const inputType = getInputTypeForToken(token);
  const { name, value } = token;

  switch (inputType) {
    case INPUT_TYPE.color:
      return (
        <ThemeGeneratorColorPicker
          label={name}
          value={value}
          onChange={onChange}
        />
      );

    case INPUT_TYPE.quantity: {
      const numericValue = parseNumericValue(value);
      const isOpacity = name.includes('opacity');
      
      // Opacity tokens: step 0.01, min 0, max 1, no unit
      if (isOpacity) {
        const clampedValue = Math.max(0, Math.min(1, numericValue));
        return (
          <FormField className={styles['theme-generator-input']}>
            <FormFieldLabel>{name}</FormFieldLabel>
            <Quantity
              min={0}
              max={1}
              step={0.01}
              value={String(clampedValue)}
              onValueChange={(detail) => {
                onChange(String(detail.valueAsNumber));
              }}
            >
              <QuantityControl>
                <QuantityInput />
              </QuantityControl>
            </Quantity>
          </FormField>
        );
      }
      
      // Spacing tokens: step 1, preserve unit
      const unit = extractUnit(value);
      return (
        <FormField className={styles['theme-generator-input']}>
          <FormFieldLabel>{name}</FormFieldLabel>
          <Quantity
            min={0}
            step={1}
            value={String(numericValue)}
            onValueChange={(detail) => {
              // Preserve the unit when updating the value
              onChange(`${detail.valueAsNumber}${unit}`);
            }}
          >
            <QuantityControl>
              <QuantityInput />
            </QuantityControl>
          </Quantity>
        </FormField>
      );
    }

    case INPUT_TYPE.range: {
      const numericValue = parseNumericValue(value);
      const unit = extractUnit(value);
      const currentValue = Math.max(0, Math.min(32, numericValue)); // Clamp between 0 and 32
      return (
        <FormField className={styles['theme-generator-input']}>
          <FormFieldLabel>{name}</FormFieldLabel>
          <Range
            className={styles['theme-generator-input__range']}
            min={0}
            max={32}
            step={1}
            value={[currentValue]}
            onDragging={(detail: RangeValueChangeDetail) => {
              // Update immediately during dragging for better UX
              const newValue = detail.value[0] ?? 0;
              onChange(`${newValue}${unit}`);
            }}
            onValueChange={(detail: RangeValueChangeDetail) => {
              // Also update on release to ensure final value is set
              const newValue = detail.value[0] ?? 0;
              onChange(`${newValue}${unit}`);
            }}
          />
        </FormField>
      );
    }

    case INPUT_TYPE.select: {
      const currentValue = value.replace(/['"]/g, '').trim();
      // Check if current value exists in options, otherwise use undefined
      const hasValidValue = STYLE_OPTIONS.some(option => option.value === currentValue);
      const selectValue = hasValidValue ? [currentValue] : undefined;
      
      return (
        <FormField className={styles['theme-generator-input']}>
          <FormFieldLabel>{name}</FormFieldLabel>
          <Select
            items={STYLE_OPTIONS}
            value={selectValue}
            onValueChange={(detail: SelectValueChangeDetail) => {
              onChange(detail.value[0]);
            }}
          >
            <SelectControl />
            <SelectContent />
          </Select>
        </FormField>
      );
    }

    case INPUT_TYPE.text:
    default:
      return (
        <FormField className={styles['theme-generator-input']}>
          <FormFieldLabel>{name}</FormFieldLabel>
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </FormField>
      );
  }
};

export { ThemeGeneratorInput };

