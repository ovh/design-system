jest.mock('react-hot-toast/headless', () => ({
  custom: jest.fn(),
  dismiss: jest.fn(),
}));

import vendorToast from 'react-hot-toast/headless';
import { TOAST_STATUS } from '../../src';
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

    describe('accent', () => {
      it('should trigger a custom toast with accent config', () => {
        toast.accent(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { status: TOAST_STATUS.accent });

        toast.accent(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, status: TOAST_STATUS.accent });
      });
    });

    describe('critical', () => {
      it('should trigger a custom toast with critical config', () => {
        toast.critical(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { status: TOAST_STATUS.critical });

        toast.critical(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, status: TOAST_STATUS.critical });
      });
    });

    describe('information', () => {
      it('should trigger a custom toast with information config', () => {
        toast.information(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { status: TOAST_STATUS.information });

        toast.information(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, status: TOAST_STATUS.information });
      });
    });

    describe('neutral', () => {
      it('should trigger a custom toast with neutral config', () => {
        toast.neutral(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { status: TOAST_STATUS.neutral });

        toast.neutral(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, status: TOAST_STATUS.neutral });
      });
    });

    describe('primary', () => {
      it('should warn once about the deprecation and trigger a custom toast with accent config', () => {
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

        toast.primary(dummyMessage);

        expect(warnSpy).toHaveBeenCalledWith('[DEPRECATED]: toast.primary() is deprecated and will be removed in v21, use toast.accent() instead.');
        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { status: TOAST_STATUS.accent });

        toast.primary(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, status: TOAST_STATUS.accent });
        expect(warnSpy).toHaveBeenCalledTimes(1);

        warnSpy.mockRestore();
      });
    });

    describe('remove', () => {
      it('should remove the given toast', () => {
        const dummyId = 'dummy-id';

        toast.remove(dummyId);

        expect(vendorToast.dismiss).toHaveBeenLastCalledWith(dummyId);
      });
    });

    describe('success', () => {
      it('should trigger a custom toast with success config', () => {
        toast.success(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { status: TOAST_STATUS.success });

        toast.success(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, status: TOAST_STATUS.success });
      });
    });

    describe('warning', () => {
      it('should trigger a custom toast with warning config', () => {
        toast.warning(dummyMessage);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { status: TOAST_STATUS.warning });

        toast.warning(dummyMessage, dummyOption);

        expect(vendorToast.custom).toHaveBeenLastCalledWith(dummyMessage, { ...dummyOption, status: TOAST_STATUS.warning });
      });
    });
  });
});
