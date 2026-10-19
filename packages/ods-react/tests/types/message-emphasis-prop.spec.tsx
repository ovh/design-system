/*
 * Type-level checks, enforced by `tsc -b` (this folder is part of the ods-react tsconfig).
 * A `@ts-expect-error` that no longer matches an error fails the build (TS2578).
 */
import type { MESSAGE_EMPHASIS, MessageEmphasis, MessageProp } from '../../src/components/message/src';

describe('Message emphasis prop typings', () => {
  it('should accept every emphasis, next to status and the deprecated color', () => {
    const high: MessageProp = { emphasis: 'high', status: 'critical' };
    const medium: MessageProp = { emphasis: 'medium' };
    const low: MessageProp = { color: 'primary', emphasis: 'low' };

    expect([high, medium, low]).toHaveLength(3);
  });

  it('should not accept the removed variant, nor its values as an emphasis', () => {
    // @ts-expect-error variant is removed in v20, use emphasis
    const variant: MessageProp = { variant: 'light' };
    // @ts-expect-error default is a removed variant, not an emphasis
    const emphasis: MessageProp = { emphasis: 'default' };

    expect([variant, emphasis]).toHaveLength(2);
  });

  it('should keep MESSAGE_EMPHASIS usable as a type and a namespace', () => {
    const toEmphasis = (emphasis: MESSAGE_EMPHASIS.medium): MessageEmphasis => emphasis;

    expect([toEmphasis]).toHaveLength(1);
  });
});
