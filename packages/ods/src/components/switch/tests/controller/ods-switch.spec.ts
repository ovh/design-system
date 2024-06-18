import { clearItems, propagateIsDisabled, resetItems } from '../../src/controller/ods-switch';

type TestItem = {
  'is-disabled'?: boolean,
  clear?: jest.Mock,
  reset?: jest.Mock,
  tagName: string,
  setAttribute?: jest.Mock,
  removeAttribute?: jest.Mock,
}

describe('ods-switch controller', () => {
  const setAttributeSpy = jest.fn()
    .mockImplementation(function(attr, value) {
      // @ts-ignore "this" is the actual item
      this[attr] = value;
    });

  const removeAttributeSpy = jest.fn()
    .mockImplementation(function(attr) {
      // @ts-ignore "this" is the actual item
      this[attr] = undefined;
    });

  beforeEach(jest.clearAllMocks);

  describe('clearOnItems', () => {
    it('should call clear on each switchItem', async() => {
      const clearSpy = jest.fn();
      const items: TestItem[] = [{
        clear: clearSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      await clearItems(items);

      expect(clearSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('resetOnItems', () => {
    it('should call reset on each switchItem', async() => {
      const resetSpy = jest.fn();
      const items: TestItem[] = [{
        reset: resetSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      await resetItems(items);

      expect(resetSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('propagateIsDisabled', () => {
    it('should set disabled to item', () => {
      const items: TestItem[] = [{
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      propagateIsDisabled(true, items);

      expect(setAttributeSpy).toHaveBeenCalledTimes(1);
      expect(items[0]['is-disabled']).toBe('');
      expect(items[1]['is-disabled']).toBe(undefined);
    });

    it('should remove disabled to item', () => {
      const items: TestItem[] = [{
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      propagateIsDisabled(false, items);

      expect(removeAttributeSpy).toHaveBeenCalledTimes(1);
      expect(items[0]['is-disabled']).toBe(undefined);
      expect(items[1]['is-disabled']).toBe(undefined);
    });
  });
});
