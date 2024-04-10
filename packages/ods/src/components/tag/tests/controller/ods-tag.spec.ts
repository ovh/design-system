import { handleClick, handleKeyDown, handleKeyUp } from '../../src/controller/ods-tag';

describe('ods-tag controller', () => {
  const dummyEventEmitter = { emit: jest.fn() };
  const dummyTag = { id: 'dummy-id' } as unknown as HTMLElement;

  beforeEach(jest.clearAllMocks);

  describe('handleClick', () => {
    it('should do nothing if disabled', async() => {
      handleClick(dummyTag, true, dummyEventEmitter);

      expect(dummyEventEmitter.emit).not.toHaveBeenCalled();
    });

    it('should emit the event with the right payload', async() => {
      handleClick(dummyTag, false, dummyEventEmitter);

      expect(dummyEventEmitter.emit).toHaveBeenCalledTimes(1);
      expect(dummyEventEmitter.emit).toHaveBeenCalledWith({ id: dummyTag.id });
    });
  });

  describe('handleKeyDown', () => {
    describe('on "Space"', () => {
      const dummyEvent = {
        key: ' ',
        preventDefault: jest.fn(),
      } as unknown as KeyboardEvent;

      it('should prevent event default behavior', async() => {
        handleKeyDown(dummyEvent);

        expect(dummyEvent.preventDefault).toHaveBeenCalledTimes(1);
      });
    });

    describe('on other keys', () => {
      const dummyEvent = {
        key: 'Enter',
        preventDefault: jest.fn(),
      } as unknown as KeyboardEvent;

      it('should do nothing', async() => {
        handleKeyDown(dummyEvent);

        expect(dummyEvent.preventDefault).not.toHaveBeenCalled();
      });
    });
  });

  describe('handleKeyUp', () => {
    describe('on "Enter"', () => {
      const dummyEvent = { key: 'Enter' } as unknown as KeyboardEvent;

      it('should do nothing if disabled', async() => {
        handleKeyUp(dummyEvent, dummyTag, true, dummyEventEmitter);

        expect(dummyEventEmitter.emit).not.toHaveBeenCalled();
      });

      it('should emit the event with the right payload', async() => {
        handleKeyUp(dummyEvent, dummyTag, false, dummyEventEmitter);

        expect(dummyEventEmitter.emit).toHaveBeenCalledTimes(1);
        expect(dummyEventEmitter.emit).toHaveBeenCalledWith({ id: dummyTag.id });
      });
    });

    describe('on "Space"', () => {
      const dummyEvent = { key: ' ' } as unknown as KeyboardEvent;

      it('should do nothing if disabled', async() => {
        handleKeyUp(dummyEvent, dummyTag, true, dummyEventEmitter);

        expect(dummyEventEmitter.emit).not.toHaveBeenCalled();
      });

      it('should emit the event with the right payload', async() => {
        handleKeyUp(dummyEvent, dummyTag, false, dummyEventEmitter);

        expect(dummyEventEmitter.emit).toHaveBeenCalledTimes(1);
        expect(dummyEventEmitter.emit).toHaveBeenCalledWith({ id: dummyTag.id });
      });
    });

    describe('on other keys', () => {
      const dummyEvent = { key: 'Tab' } as unknown as KeyboardEvent;

      it('should do nothing', async() => {
        handleKeyUp(dummyEvent, dummyTag, true, dummyEventEmitter);

        expect(dummyEventEmitter.emit).not.toHaveBeenCalled();
      });
    });
  });
});
