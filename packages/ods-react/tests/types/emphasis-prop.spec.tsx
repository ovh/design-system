/*
 * Type-level checks, enforced by `tsc -b` (this folder is part of the ods-react tsconfig).
 * A `@ts-expect-error` that no longer matches an error fails the build (TS2578).
 */
import type { BadgeProp } from '../../src/components/badge/src';

describe('emphasis prop typings', () => {
  it('should accept every emphasis, next to status', () => {
    const high: BadgeProp = { emphasis: 'high', status: 'critical' };
    const medium: BadgeProp = { emphasis: 'medium' };
    const low: BadgeProp = { emphasis: 'low', status: 'accent' };

    expect([high, medium, low]).toHaveLength(3);
  });

  it('should not accept a value outside of the emphases', () => {
    // @ts-expect-error bold is not a Badge emphasis
    const badge: BadgeProp = { emphasis: 'bold' };

    expect([badge]).toHaveLength(1);
  });
});
