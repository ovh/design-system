import { copyToClipboard, getRandomHTMLId, isTargetInElement, setInternalsValidityFromHtmlElement, setInternalsValidityFromOdsComponent, submitFormOnEnter } from '../../src/utils/dom';

describe('utils dom', () => {
  beforeEach(jest.clearAllMocks);

  describe('copyToClipboard', () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });

    it('should call the navigator writeText method with empty value if not set', async() => {
      await copyToClipboard();

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('');
    });

    it('should call the navigator writeText method with given value', async() => {
      const dummyValue = 'dummy value';

      await copyToClipboard(dummyValue);

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(dummyValue);
    });
  });

  describe('getRandomHTMLId', () => {
    it('should return unique HTML valid ids', async() => {
      const htmlId1 = getRandomHTMLId();
      const htmlId2 = getRandomHTMLId();

      expect(htmlId1).not.toBe(htmlId2);
      expect(/^[0-9]/.test(htmlId1)).toBe(false);
      expect(/^[0-9]/.test(htmlId2)).toBe(false);
    });
  });

  describe('isTargetInElement', () => {
    const containSpy = jest.fn();
    const includeSpy = jest.fn();
    const mockElement = {
      contains: containSpy,
    } as unknown as HTMLElement;
    const mockEvent = {
      composedPath: jest.fn().mockReturnValue({
        includes: includeSpy,
      }),
      target: 'dummy target',
    } as unknown as Event;

    it('should return false if element is empty', () => {
      expect(isTargetInElement(mockEvent)).toBe(false);
    });

    it('should return false if target is not contained by the element or the path', () => {
      containSpy.mockReturnValueOnce(false);
      includeSpy.mockReturnValueOnce(false);

      const mockEvent = {
        composedPath: jest.fn().mockReturnValue({
          includes: includeSpy,
        }),
        target: 'dummy target',
      } as unknown as Event;

      expect(isTargetInElement(mockEvent, mockElement)).toBe(false);
      expect(mockElement.contains).toHaveBeenCalledWith(mockEvent.target);
      expect(includeSpy).toHaveBeenCalledWith(mockElement);
    });

    it('should return true if target is contained by the element', () => {
      containSpy.mockReturnValueOnce(true);

      expect(isTargetInElement(mockEvent, mockElement)).toBe(true);
      expect(mockElement.contains).toHaveBeenCalledWith(mockEvent.target);
      expect(includeSpy).not.toHaveBeenCalled();
    });

    it('should return true if target is included in the event path', () => {
      containSpy.mockReturnValueOnce(false);
      includeSpy.mockReturnValueOnce(true);

      expect(isTargetInElement(mockEvent, mockElement)).toBe(true);
      expect(mockElement.contains).toHaveBeenCalledWith(mockEvent.target);
      expect(includeSpy).toHaveBeenCalledWith(mockElement);
    });
  });

  describe('setInternalsValidityFromHtmlElement', () => {
    const mockInternals = {
      setValidity: jest.fn(),
    } as unknown as ElementInternals;

    it('should set the validity to empty if valid', () => {
      const mockFormElement = {
        validity: {
          valid: true,
        },
      } as unknown as HTMLInputElement;

      setInternalsValidityFromHtmlElement(mockFormElement, mockInternals);

      expect(mockInternals.setValidity).toHaveBeenCalledTimes(1);
      expect(mockInternals.setValidity).toHaveBeenCalledWith({});
    });

    it('should set the same validity flags as the form element if invalid', () => {
      const mockValidityState = {
        badInput: true,
        customError: true,
        patternMismatch: true,
        rangeOverflow: true,
        rangeUnderflow: true,
        stepMismatch: true,
        tooLong: true,
        tooShort: true,
        typeMismatch: true,
        valueMissing: true,
      };
      const mockFormElement = {
        validationMessage: 'dummy validation message',
        validity: {
          ...mockValidityState,
          valid: false,
        },
      } as unknown as HTMLInputElement;

      setInternalsValidityFromHtmlElement(mockFormElement, mockInternals);

      expect(mockInternals.setValidity).toHaveBeenCalledTimes(Object.keys(mockValidityState).length);
      Object.entries(mockValidityState).forEach(([key, value]) => {
        expect(mockInternals.setValidity).toHaveBeenCalledWith({ [key]: value }, mockFormElement.validationMessage, mockFormElement);
      });
    });
  });

  describe('setInternalsValidityFromOdsComponent', () => {
    const mockInternals = {
      setValidity: jest.fn(),
    } as unknown as ElementInternals;

    it('should set the validity to empty if valid', async() => {
      const mockOdsFormElement = {
        getValidationMessage: jest.fn().mockImplementation(() => Promise.resolve('')),
        getValidity: jest.fn().mockImplementation(() => Promise.resolve({ valid: true })),
      } as unknown as HTMLElement & {
        getValidationMessage: () => Promise<string>,
        getValidity: () => Promise<ValidityState>,
      };

      await setInternalsValidityFromOdsComponent(mockOdsFormElement, mockInternals);

      expect(mockInternals.setValidity).toHaveBeenCalledTimes(1);
      expect(mockInternals.setValidity).toHaveBeenCalledWith({});
    });

    it('should set the same validity flags as the form element if invalid', async() => {
      const dummyValidationMessage = 'dummy validation message';
      const mockValidityState = {
        badInput: true,
        customError: true,
        patternMismatch: true,
        rangeOverflow: true,
        rangeUnderflow: true,
        stepMismatch: true,
        tooLong: true,
        tooShort: true,
        typeMismatch: true,
        valueMissing: true,
      };
      const mockOdsFormElement = {
        getValidationMessage: jest.fn().mockImplementation(() => Promise.resolve(dummyValidationMessage)),
        getValidity: jest.fn().mockImplementation(() => Promise.resolve({
          ...mockValidityState,
          valid: false,
        })),
      } as unknown as HTMLElement & {
        getValidationMessage: () => Promise<string>,
        getValidity: () => Promise<ValidityState>,
      };

      await setInternalsValidityFromOdsComponent(mockOdsFormElement, mockInternals);

      expect(mockInternals.setValidity).toHaveBeenCalledTimes(Object.keys(mockValidityState).length);
      Object.entries(mockValidityState).forEach(([key, value]) => {
        expect(mockInternals.setValidity).toHaveBeenCalledWith({ [key]: value }, dummyValidationMessage, mockOdsFormElement);
      });
    });
  });

  describe('submitFormOnEnter', () => {
    const mockForm = {
      requestSubmit: jest.fn(),
    } as unknown as HTMLFormElement;

    it('should do nothing if event key is not Enter', () => {
      submitFormOnEnter({ key: 'Space' } as unknown as KeyboardEvent, mockForm);

      expect(mockForm.requestSubmit).not.toHaveBeenCalled();
    });

    it('should do nothing if no form is passed', () => {
      submitFormOnEnter({ key: 'Enter' } as unknown as KeyboardEvent, null);

      expect(mockForm.requestSubmit).not.toHaveBeenCalled();
    });

    it('should request submit on Enter press', () => {
      submitFormOnEnter({ key: 'Enter' } as unknown as KeyboardEvent, mockForm);

      expect(mockForm.requestSubmit).toHaveBeenCalled();
    });
  });
});
