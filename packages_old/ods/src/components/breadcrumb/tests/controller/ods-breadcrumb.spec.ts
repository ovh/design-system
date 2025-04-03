import { expandItems, setupItems } from '../../src/controller/ods-breadcrumb';

type TestItem = {
  'is-collapsed'?: string,
  'is-expandable'?: string,
  'is-last'?: string,
  tagName: string,
  removeAttribute: jest.Mock,
  setAttribute: jest.Mock,
}

describe('ods-breadcrumb controller', () => {
  const removeAttributeSpy = jest.fn()
    .mockImplementation(function(attr) {
      // @ts-ignore "this" is the actual item
      delete this[attr];
    });

  const setAttributeSpy = jest.fn()
    .mockImplementation(function(attr, value) {
      // @ts-ignore "this" is the actual item
      this[attr] = value;
    });

  beforeEach(jest.clearAllMocks);

  describe('expandItems', () => {
    it('should update the attributes of ods-breadcrumb-item only', () => {
      const dummyItems: TestItem[] = [
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BUTTON' },
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
      ];

      // @ts-ignore for test purpose
      expandItems(dummyItems);

      expect(setAttributeSpy).toHaveBeenCalledTimes(4);
      expect(dummyItems[0]['is-collapsed']).toBe('false');
      expect(dummyItems[0]['is-expandable']).toBe('false');
      expect(dummyItems[1]['is-collapsed']).toBeUndefined();
      expect(dummyItems[1]['is-expandable']).toBeUndefined();
      expect(dummyItems[2]['is-collapsed']).toBe('false');
      expect(dummyItems[2]['is-expandable']).toBe('false');
    });
  });

  describe('setupItems', () => {
    it('should do nothing if there are no ods-breadcrumb-item', () => {
      const dummyItems: TestItem[] = [
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BUTTON' },
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'SPAN' },
      ];

      // @ts-ignore for test purpose
      setupItems(dummyItems);

      expect(setAttributeSpy).not.toHaveBeenCalled();
    });

    it('should setup the ods-breadcrumb-item attributes', () => {
      const dummyItems: TestItem[] = [
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
      ];

      // @ts-ignore for test purpose
      setupItems(dummyItems);

      expect(setAttributeSpy).toHaveBeenCalled();
      expect(dummyItems[0]['is-collapsed']).toBeUndefined();
      expect(dummyItems[0]['is-expandable']).toBeUndefined();
      expect(dummyItems[0]['is-last']).toBeUndefined();
      expect(dummyItems[1]['is-collapsed']).toBe('true');
      expect(dummyItems[1]['is-expandable']).toBe('true');
      expect(dummyItems[1]['is-last']).toBeUndefined();
      expect(dummyItems[2]['is-collapsed']).toBe('true');
      expect(dummyItems[2]['is-expandable']).toBeUndefined();
      expect(dummyItems[2]['is-last']).toBeUndefined();
      expect(dummyItems[3]['is-collapsed']).toBe('true');
      expect(dummyItems[3]['is-expandable']).toBeUndefined();
      expect(dummyItems[3]['is-last']).toBeUndefined();
      expect(dummyItems[4]['is-collapsed']).toBeUndefined();
      expect(dummyItems[4]['is-expandable']).toBeUndefined();
      expect(dummyItems[4]['is-last']).toBe('true');
    });

    it('should reset the "is-last" attribute correctly', () => {
      const dummyItems: TestItem[] = [
        { ['is-last']: 'true', removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { removeAttribute: removeAttributeSpy, setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
      ];

      // @ts-ignore for test purpose
      setupItems(dummyItems);

      expect(dummyItems[0]['is-last']).toBeUndefined();
      expect(dummyItems[1]['is-last']).toBe('true');
    });
  });
});
