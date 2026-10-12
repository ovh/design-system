/*
 * Type-level checks, enforced by `tsc -b` (this folder is part of the ods-react tsconfig).
 * A `@ts-expect-error` that no longer matches an error fails the build (TS2578).
 */
import type { AccordionProp } from '../../src/components/accordion/src';
import { ACCORDION_EMPHASES, ACCORDION_EMPHASIS, type AccordionEmphasis } from '../../src/components/accordion/src/constants/accordion-emphasis';

describe('accordion emphasis typings', () => {
  it('should accept every emphasis, as a string or a constant, and no emphasis', () => {
    const accordions: AccordionProp[] = [
      {},
      { emphasis: 'high' },
      { emphasis: 'medium' },
      { emphasis: 'low' },
      { emphasis: ACCORDION_EMPHASIS.high },
    ];
    const emphasis: AccordionEmphasis = ACCORDION_EMPHASIS.low;

    expect(accordions).toHaveLength(5);
    expect(emphasis).toBe('low');
  });

  it('should reject a value outside of the emphases', () => {
    // @ts-expect-error not an emphasis
    const accordion: AccordionProp = { emphasis: 'bold' };

    expect(accordion).toBeDefined();
  });

  it('should list the three emphases', () => {
    expect([...ACCORDION_EMPHASES].sort()).toEqual(['high', 'low', 'medium']);
  });
});
