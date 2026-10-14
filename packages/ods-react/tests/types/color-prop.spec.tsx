/*
 * Type-level checks, enforced by `tsc -b` (this folder is part of the ods-react tsconfig).
 * A `@ts-expect-error` that no longer matches an error fails the build (TS2578).
 */
import type { BadgeProp } from '../../src/components/badge/src';
import type { ButtonProp } from '../../src/components/button/src';
import type { CardProp } from '../../src/components/card/src';
import type { DividerProp } from '../../src/components/divider/src';
import type { MessageProp } from '../../src/components/message/src';
import type { ModalContentProp } from '../../src/components/modal/src';
import type { SpinnerProp } from '../../src/components/spinner/src';
import type { TagProp } from '../../src/components/tag/src';
import type { ToastOption, toast } from '../../src/components/toaster/src';

describe('color prop typings', () => {
  describe('removed color props', () => {
    it('should not accept color, removed in v20', () => {
      // @ts-expect-error color is removed in v20, use status
      const badge: BadgeProp = { color: 'primary' };
      // @ts-expect-error color is removed in v20, use status
      const button: ButtonProp = { color: 'primary' };
      // @ts-expect-error color is removed in v20, use status
      const card: CardProp = { color: 'primary' };
      // @ts-expect-error color is removed in v20, override the background-color in CSS
      const divider: DividerProp = { color: 'neutral' };
      // @ts-expect-error color is removed in v20, use status
      const message: MessageProp = { color: 'primary' };
      // @ts-expect-error color is removed in v20, use role="alertdialog"
      const modalContent: ModalContentProp = { color: 'critical' };
      // @ts-expect-error color is removed in v20, set the --ods-spinner-color CSS custom property
      const spinner: SpinnerProp = { color: 'primary' };
      // @ts-expect-error color is removed in v20, use status
      const tag: TagProp = { color: 'primary' };
      // @ts-expect-error color is removed in v20, use the toast.accent(), toast.critical()… helpers
      const toastOption: ToastOption = { color: 'primary' };

      expect([badge, button, card, divider, message, modalContent, spinner, tag, toastOption]).toHaveLength(9);
    });

    it('should not accept color through a spread object, removed in v20', () => {
      // Not a fresh object literal: only the color?: never member rejects it (no excess property check).
      const legacy = { color: 'primary', id: 'legacy' };

      // @ts-expect-error color is removed in v20
      const badge: BadgeProp = { ...legacy };
      // @ts-expect-error color is removed in v20
      const button: ButtonProp = legacy;
      // @ts-expect-error color is removed in v20
      const card: CardProp = legacy;
      // @ts-expect-error color is removed in v20
      const divider: DividerProp = legacy;
      // @ts-expect-error color is removed in v20
      const message: MessageProp = legacy;
      // @ts-expect-error color is removed in v20
      const modalContent: ModalContentProp = legacy;
      // @ts-expect-error color is removed in v20
      const spinner: SpinnerProp = legacy;
      // @ts-expect-error color is removed in v20
      const tag: TagProp = legacy;
      // @ts-expect-error color is removed in v20
      const toastOption: ToastOption = legacy;

      expect([badge, button, card, divider, message, modalContent, spinner, tag, toastOption]).toHaveLength(9);
    });

    it('should not accept toast.primary(), removed in v20', () => {
      // @ts-expect-error toast.primary() is removed in v20, use toast.accent()
      const primary = (controller: typeof toast): string => controller.primary('Dummy');

      expect([primary]).toHaveLength(1);
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
});
