import { mergeSelectedItemPlugin, placeholderPlugin } from '../../src/utils/select';

describe('utils select', () => {
  let dummyThis: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  beforeEach(jest.clearAllMocks);

  beforeEach(() => {
    dummyThis = {
      control: {
        addEventListener: jest.fn(),
        append: jest.fn(),
      },
      hook: jest.fn(),
      items: [] as string[],
      on: jest.fn(),
      settings: {
        placeholder: 'dummy placeholder',
      },
    };
  });

  describe('mergeSelectedItemPlugin', () => {
    const dummyLabel = 'dummy label';

    it('should set correct listeners', () => {
      mergeSelectedItemPlugin.bind(dummyThis)({ label: dummyLabel });

      expect(dummyThis.on).toHaveBeenNthCalledWith(1, 'initialize', expect.any(Function));
      expect(dummyThis.on).toHaveBeenNthCalledWith(2, 'item_add', expect.any(Function));
      expect(dummyThis.on).toHaveBeenNthCalledWith(3, 'item_remove', expect.any(Function));
      expect(dummyThis.hook).toHaveBeenCalledWith('after', 'setup', expect.any(Function));
    });

    it('should append an element on initialize with placeholder text if no items', () => {
      mergeSelectedItemPlugin.bind(dummyThis)({ label: dummyLabel });

      const initializeCallback = dummyThis.on.mock.calls[0][1];
      initializeCallback();

      expect(dummyThis.control.append).toHaveBeenCalledTimes(1);

      const mergeElement = dummyThis.control.append.mock.calls[0][0];

      expect(mergeElement.classList.contains('ts-merged-items')).toBe(true);
      expect(mergeElement.classList.contains('ts-merged-items-placeholder')).toBe(true);
      expect(mergeElement.innerText).toBe(dummyThis.settings.placeholder);
    });

    it('should append an element on initialize with merge label if some items', () => {
      dummyThis.items = ['dummy', 'items'];

      mergeSelectedItemPlugin.bind(dummyThis)({ label: dummyLabel });

      const initializeCallback = dummyThis.on.mock.calls[0][1];
      initializeCallback();

      expect(dummyThis.control.append).toHaveBeenCalledTimes(1);

      const mergeElement = dummyThis.control.append.mock.calls[0][0];
      const spanElement = mergeElement.querySelector('.ts-merged-items__count');

      expect(mergeElement.classList.contains('ts-merged-items')).toBe(true);
      expect(mergeElement.classList.contains('ts-merged-items-placeholder')).toBe(false);
      expect(spanElement).not.toBeNull();
      expect(mergeElement.textContent).toBe(`${dummyLabel} (${dummyThis.items.length})`);
    });

    it('should set event listeners after setup for label and placeholder change', () => {
      mergeSelectedItemPlugin.bind(dummyThis)({ label: dummyLabel });

      const hookCallback = dummyThis.hook.mock.calls[0][2];
      hookCallback();

      expect(dummyThis.control.addEventListener).toHaveBeenCalledTimes(2);
      expect(dummyThis.control.addEventListener).toHaveBeenNthCalledWith(1, 'ods-select-multiple-selection-label-change', expect.any(Function));
      expect(dummyThis.control.addEventListener).toHaveBeenNthCalledWith(2, 'ods-select-placeholder-change', expect.any(Function));
    });
  });

  describe('placeholderPlugin', () => {
    it('should set correct listeners', () => {
      placeholderPlugin.bind(dummyThis)();

      expect(dummyThis.on).toHaveBeenNthCalledWith(1, 'initialize', expect.any(Function));
      expect(dummyThis.on).toHaveBeenNthCalledWith(2, 'item_add', expect.any(Function));
      expect(dummyThis.on).toHaveBeenNthCalledWith(3, 'item_remove', expect.any(Function));
      expect(dummyThis.hook).toHaveBeenCalledWith('after', 'setup', expect.any(Function));
    });

    it('should append a placeholder element on initialize with visible display if no items', () => {
      placeholderPlugin.bind(dummyThis)();

      const initializeCallback = dummyThis.on.mock.calls[0][1];
      initializeCallback();

      expect(dummyThis.control.append).toHaveBeenCalledTimes(1);

      const placeholderElement = dummyThis.control.append.mock.calls[0][0];

      expect(placeholderElement.classList.contains('ts-placeholder')).toBe(true);
      expect(placeholderElement.innerText).toBe(dummyThis.settings.placeholder);
      expect(placeholderElement.style.display).toBe('block');
    });

    it('should append a placeholder element on initialize with hidden display if some items', () => {
      dummyThis.items = ['dummy', 'items'];

      placeholderPlugin.bind(dummyThis)();

      const initializeCallback = dummyThis.on.mock.calls[0][1];
      initializeCallback();

      expect(dummyThis.control.append).toHaveBeenCalledTimes(1);

      const placeholderElement = dummyThis.control.append.mock.calls[0][0];

      expect(placeholderElement.classList.contains('ts-placeholder')).toBe(true);
      expect(placeholderElement.innerText).toBe(dummyThis.settings.placeholder);
      expect(placeholderElement.style.display).toBe('none');
    });

    it('should set an event listener after setup for placeholder change', () => {
      placeholderPlugin.bind(dummyThis)();

      const hookCallback = dummyThis.hook.mock.calls[0][2];
      hookCallback();

      expect(dummyThis.control.addEventListener).toHaveBeenCalledTimes(1);
      expect(dummyThis.control.addEventListener).toHaveBeenCalledWith('ods-select-placeholder-change', expect.any(Function));
    });
  });
});
