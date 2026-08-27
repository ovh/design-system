import { type ReactNode } from 'react';

/**
 * Whether an adornment will actually produce visible content.
 * Mirrors what React renders, so `null`, `undefined`, booleans and the empty string emit no wrapper element,
 * while `0`, which is falsy but renderable, does.
 */
function isSlotDefined(slot: ReactNode): boolean {
  return slot !== undefined && slot !== null && typeof slot !== 'boolean' && slot !== '';
}

function isValueDefined(value?: number | readonly string[] | string | null): boolean {
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return !!value || value === 0;
}

export {
  isSlotDefined,
  isValueDefined,
};
