/*
 * Type-level checks, enforced by `tsc -b` (this folder is part of the ods-react tsconfig).
 * A `@ts-expect-error` that no longer matches an error fails the build (TS2578).
 */
import type { BadgeProp } from '../../src/components/badge/src';
import type { BUTTON_COLOR, ButtonColor, ButtonProp } from '../../src/components/button/src';
import type { CARD_COLOR, CardColor, CardProp } from '../../src/components/card/src';
import type { DividerProp } from '../../src/components/divider/src';
import type { MESSAGE_COLOR, MessageProp } from '../../src/components/message/src';
import type { ModalContentProp } from '../../src/components/modal/src';
import type { SpinnerProp } from '../../src/components/spinner/src';
import type { TAG_COLOR, TagColor, TagProp } from '../../src/components/tag/src';
import type { TOAST_COLOR } from '../../src/components/toaster/src';

describe('color prop typings', () => {
  describe('deprecated color props', () => {
    it('should still accept color, next to status when the component has one', () => {
      const badge: BadgeProp = { color: 'primary', status: 'accent' };
      const button: ButtonProp = { color: 'primary', status: 'brand' };
      const card: CardProp = { color: 'primary', status: 'accent' };
      const divider: DividerProp = { color: 'neutral' };
      const message: MessageProp = { color: 'primary', status: 'accent' };
      const modalContent: ModalContentProp = { color: 'critical' };
      const spinner: SpinnerProp = { color: 'primary' };
      const tag: TagProp = { color: 'primary', status: 'accent' };

      expect([badge, button, card, divider, message, modalContent, spinner, tag]).toHaveLength(8);
    });

    it('should still reject a value outside of the deprecated colors', () => {
      // @ts-expect-error accent is not a Divider color
      const divider: DividerProp = { color: 'accent' };
      // @ts-expect-error accent is a status, not a ModalContent color
      const modalContent: ModalContentProp = { color: 'accent' };

      expect([divider, modalContent]).toHaveLength(2);
    });
  });

  describe('status value outside of the component statuses', () => {
    it('should not accept a status value outside of the component statuses', () => {
      // @ts-expect-error information is not a Button status
      const button: ButtonProp = { status: 'information' };
      // @ts-expect-error primary is not a Badge status
      const badge: BadgeProp = { status: 'primary' };

      expect([badge, button]).toHaveLength(2);
    });
  });

  describe('deprecated color constants', () => {
    it('should keep the v19 shared enum, usable as a type and a namespace', () => {
      // All the XXX_COLOR are the same enum, assignable to each other.
      const toButton = (color: TAG_COLOR): BUTTON_COLOR => color;
      const toCard = (color: MESSAGE_COLOR): CARD_COLOR => color;
      const toTag = (color: TOAST_COLOR): TAG_COLOR => color;
      // A member used as a type.
      const toCritical = (color: CARD_COLOR.critical): BUTTON_COLOR.critical => color;
      // The XxxColor types are the same string union.
      const toCardColor = (color: ButtonColor): CardColor => color;
      const toTagColor = (color: CardColor): TagColor => color;

      expect([toButton, toCard, toTag, toCritical, toCardColor, toTagColor]).toHaveLength(6);
    });
  });
});

