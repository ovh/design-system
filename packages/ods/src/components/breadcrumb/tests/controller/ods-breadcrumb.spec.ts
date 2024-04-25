import { expandItems, setupItems } from '../../src/controller/ods-breadcrumb';

type TestItem = {
  'is-collapsed'?: string,
  'is-expandable'?: string,
  'is-last'?: string,
  tagName: string,
  setAttribute: jest.Mock,
}

describe('ods-breadcrumb controller', () => {
  const setAttributeSpy = jest.fn()
    .mockImplementation(function(attr, value) {
      // @ts-ignore "this" is the actual item
      this[attr] = value;
    });

  beforeEach(jest.clearAllMocks);

  describe('expandItems', () => {
    it('should update the attributes of ods-breadcrumb-item only', () => {
      const dummyItems: TestItem[] = [
        { setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { setAttribute: setAttributeSpy, tagName: 'ODS-BUTTON' },
        { setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
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

  describe('expandItems', () => {
    it('should do nothing if there are no ods-breadcrumb-item', () => {
      const dummyItems: TestItem[] = [
        { setAttribute: setAttributeSpy, tagName: 'ODS-BUTTON' },
        { setAttribute: setAttributeSpy, tagName: 'SPAN' },
      ];

      // @ts-ignore for test purpose
      setupItems(dummyItems);

      expect(setAttributeSpy).not.toHaveBeenCalled();
    });

    it('should setup the ods-breadcrumb-item attributes', () => {
      const dummyItems: TestItem[] = [
        { setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
        { setAttribute: setAttributeSpy, tagName: 'ODS-BREADCRUMB-ITEM' },
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
  });
});
