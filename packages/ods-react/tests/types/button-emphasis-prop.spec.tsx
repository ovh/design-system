/*
 * Type-level checks, enforced by `tsc -b` (this folder is part of the ods-react tsconfig).
 * A `@ts-expect-error` that no longer matches an error fails the build (TS2578).
 */
import type { BUTTON_EMPHASIS, ButtonEmphasis, ButtonProp } from '../../src/components/button/src';

describe('Button emphasis prop typings', () => {
  it('should accept every emphasis', () => {
    const buttons: ButtonProp[] = [{ emphasis: 'high' }, { emphasis: 'medium' }, { emphasis: 'low' }];

    expect(buttons).toHaveLength(3);
  });

  it('should no longer accept the removed variant prop, nor a v19 variant value as an emphasis', () => {
    // @ts-expect-error variant is removed in v20
    const variant: ButtonProp = { variant: 'ghost' };
    // @ts-expect-error default is a v19 variant, not an emphasis
    const emphasis: ButtonProp = { emphasis: 'default' };

    expect([variant, emphasis]).toHaveLength(2);
  });

  it('should keep BUTTON_EMPHASIS usable as a type and a namespace', () => {
    const toEmphasis = (emphasis: BUTTON_EMPHASIS.medium): ButtonEmphasis => emphasis;

    expect(toEmphasis).toBeDefined();
  });
});
