jest.mock('react-hot-toast/headless', () => ({
  custom: jest.fn(),
  remove: jest.fn(),
}));

import vendorToast from 'react-hot-toast/headless';
import { TOAST_COLOR } from '../../src';
import { toast } from '../../src/controller/toaster';

describe('Toaster controller', () => {
  const dummyMessage = 'Dummy message';
  const dummyOption = { duration: 1234 };

  beforeEach(jest.clearAllMocks);

  describe('toast', () => {
    it('should trigger a custom toast with default config', () => {
      // @ts-ignore for test purpose
      toast();

      expect(vendorToast.custom).toHaveBeenLastCalledWith('', undefined);

      toast(dummyMessage);

      expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, undefined);

      toast(dummyMessage, dummyOption);

      expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, dummyOption);
    });

    describe('critical', () => {
      it('should trigger a custom toast with critical config', () => {
        toast.critical(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { color: TOAST_COLOR.critical });

        toast.critical(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, color: TOAST_COLOR.critical });
      });
    });

    describe('information', () => {
      it('should trigger a custom toast with information config', () => {
        toast.information(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { color: TOAST_COLOR.information });

        toast.information(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, color: TOAST_COLOR.information });
      });
    });

    describe('neutral', () => {
      it('should trigger a custom toast with neutral config', () => {
        toast.neutral(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { color: TOAST_COLOR.neutral });

        toast.neutral(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, color: TOAST_COLOR.neutral });
      });
    });

    describe('primary', () => {
      it('should trigger a custom toast with primary config', () => {
        toast.primary(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { color: TOAST_COLOR.primary });

        toast.primary(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, color: TOAST_COLOR.primary });
      });
    });

    describe('remove', () => {
      it('should remove the given toast', () => {
        const dummyId = 'dummy-id';

        toast.remove(dummyId);

        expect(vendorToast.remove).toHaveBeenLastCalledWith(dummyId);
      });
    });

    describe('success', () => {
      it('should trigger a custom toast with success config', () => {
        toast.success(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { color: TOAST_COLOR.success });

        toast.success(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, color: TOAST_COLOR.success });
      });
    });

    describe('warning', () => {
      it('should trigger a custom toast with warning config', () => {
        toast.warning(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { color: TOAST_COLOR.warning });

        toast.warning(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, color: TOAST_COLOR.warning });
      });
    });
  });
});
