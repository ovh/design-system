jest.mock('@floating-ui/dom', () => ({
  arrow: jest.fn().mockReturnValue('arrow middleware'),
  autoUpdate: jest.fn(),
  computePosition: jest.fn(),
  flip: jest.fn().mockReturnValue('flip middleware'),
  offset: jest.fn().mockReturnValue('offset middleware'),
  shift: jest.fn().mockReturnValue('shift middleware'),
}));

// @ts-ignore for test purposes
global.CSS = {
  escape: (value: string): string => value,
};

import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
import { ODS_OVERLAY_STRATEGY, findTriggerElement, getElementPosition, hideOverlay, showOverlay } from '../../src/utils/overlay';

describe('utils overlay', () => {
  beforeEach(jest.clearAllMocks);

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  describe('findTriggerElement', () => {
    it('return empty if trigger element is not found', async() => {
      expect(findTriggerElement('dummy')).toBeUndefined();
    });

    it('return the trigger element if found', async() => {
      const hostElement = { dummy: 'element' } as unknown as HTMLElement;
      const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(hostElement);

      const triggerElement = findTriggerElement('dummy');

      expect(querySelectorSpy).toHaveBeenCalledTimes(1);
      expect(querySelectorSpy).toHaveBeenCalledWith('#dummy');
      expect(triggerElement).toBe(hostElement);
    });

    it('return the trigger element found with special character in the id', async() => {
      function assertElementFound(id: string): void {
        const hostElement = { [id]: 'element' } as unknown as HTMLElement;
        const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(hostElement);

        const triggerElement = findTriggerElement(id);
        expect(querySelectorSpy).toHaveBeenCalledWith(`#${id}`);
        expect(triggerElement).toBe(hostElement);
      }

      assertElementFound('trigger:id');
      assertElementFound('trigger:1234');
      assertElementFound('trigger/id');
    });

    it('return empty if shadow trigger element is not found', async() => {
      const hostElement = { dummy: 'element' } as unknown as HTMLElement;
      const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(hostElement);

      const triggerElement = findTriggerElement('dummy', 'shadow');

      expect(querySelectorSpy).toHaveBeenCalledTimes(1);
      expect(querySelectorSpy).toHaveBeenCalledWith('#dummy');
      expect(triggerElement).toBeUndefined();
    });

    it('return the shadow trigger element if found', async() => {
      const shadowElement = { dummy: 'element' } as unknown as HTMLElement;
      const shadowQuerySelectorSpy = jest.fn().mockReturnValue(shadowElement);
      const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue({
        shadowRoot: { querySelector: shadowQuerySelectorSpy },
      } as unknown as HTMLElement);

      const triggerElement = findTriggerElement('dummy', 'shadow');

      expect(querySelectorSpy).toHaveBeenCalledTimes(1);
      expect(querySelectorSpy).toHaveBeenCalledWith('#dummy');
      expect(shadowQuerySelectorSpy).toHaveBeenCalledTimes(1);
      expect(shadowQuerySelectorSpy).toHaveBeenCalledWith('#shadow');
      expect(triggerElement).toBe(shadowElement);
    });

    it('return the shadow trigger element if found with special char', async() => {
      function assertShadowElementFound(id: string, shadowId: string): void {
        const shadowElement = { dummy: 'element' } as unknown as HTMLElement;
        const shadowQuerySelectorSpy = jest.fn().mockReturnValue(shadowElement);
        const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue({
          shadowRoot: { querySelector: shadowQuerySelectorSpy },
        } as unknown as HTMLElement);

        const triggerElement = findTriggerElement(id, shadowId);

        expect(querySelectorSpy).toHaveBeenCalledWith(`#${id}`);
        expect(shadowQuerySelectorSpy).toHaveBeenCalledWith(`#${shadowId}`);
        expect(triggerElement).toBe(shadowElement);
      }

      assertShadowElementFound('dummy', 'shadow:id');
      assertShadowElementFound('dummy', 'shadow/id');
      assertShadowElementFound('dummy', 'shadow1234id');
    });
  });

  describe('getElementPosition', () => {
    it('should throw if no trigger element', () => {
      expect(async() => {
        await getElementPosition('top', {
          popper: document.createElement('div'),
          trigger: undefined,
        });
      }).rejects.toThrow();
    });

    it('should call computePosition with default arguments', async() => {
      const dummyDomElement = {
        popper: document.createElement('div'),
        trigger: document.createElement('div'),
      };
      const dummyPosition = 'top';

      await getElementPosition(dummyPosition, dummyDomElement);

      expect(flip).toHaveBeenCalledTimes(1);
      expect(flip).toHaveBeenCalledWith();
      expect(offset).toHaveBeenCalledTimes(1);
      expect(offset).toHaveBeenCalledWith(0);
      expect(shift).toHaveBeenCalledTimes(1);
      expect(shift).toHaveBeenCalledWith(undefined);
      expect(computePosition).toHaveBeenCalledTimes(1);
      expect(computePosition).toHaveBeenCalledWith(dummyDomElement.trigger, dummyDomElement.popper, {
        middleware: [
          'flip middleware',
          'offset middleware',
          'shift middleware',
        ],
        placement: dummyPosition,
        strategy: ODS_OVERLAY_STRATEGY.absolute,
      });
    });

    it('should call computePosition with given options', async() => {
      const dummyDomElement = {
        popper: document.createElement('div'),
        trigger: document.createElement('div'),
      };
      const dummyOption = {
        offset: 42,
        shift: { mainAxis: false },
        strategy: ODS_OVERLAY_STRATEGY.fixed,
      };
      const dummyPosition = 'top';

      await getElementPosition(dummyPosition, dummyDomElement, dummyOption);

      expect(flip).toHaveBeenCalledTimes(1);
      expect(flip).toHaveBeenCalledWith();
      expect(offset).toHaveBeenCalledTimes(1);
      expect(offset).toHaveBeenCalledWith(dummyOption.offset);
      expect(shift).toHaveBeenCalledTimes(1);
      expect(shift).toHaveBeenCalledWith(dummyOption.shift);
      expect(computePosition).toHaveBeenCalledTimes(1);
      expect(computePosition).toHaveBeenCalledWith(dummyDomElement.trigger, dummyDomElement.popper, {
        middleware: [
          'flip middleware',
          'offset middleware',
          'shift middleware',
        ],
        placement: dummyPosition,
        strategy: dummyOption.strategy,
      });
    });
  });

  describe('hideOverlay', () => {
    it('should set popper display style to none', async() => {
      const dummyPopperElement = document.createElement('div');

      expect(dummyPopperElement.style.display).not.toBe('none');

      hideOverlay(dummyPopperElement);

      expect(dummyPopperElement.style.display).toBe('none');
    });

    it('should set call the callback if defined', async() => {
      const dummyPopperElement = document.createElement('div');
      const dummyCallback = jest.fn();

      hideOverlay(dummyPopperElement, dummyCallback);

      expect(dummyCallback).toHaveBeenCalled();
    });
  });

  describe('showTooltip', () => {
    it('should do nothing if not trigger element', async() => {
      showOverlay('top', {
        arrow: document.createElement('div'),
        popper: document.createElement('div'),
        trigger: undefined,
      });

      expect(autoUpdate).not.toHaveBeenCalled();
    });

    it('should set popper display to block', async() => {
      const dummyPopper = document.createElement('div');
      dummyPopper.style.display = 'none';

      showOverlay('top', {
        arrow: document.createElement('div'),
        popper: dummyPopper,
        trigger: document.createElement('div'),
      });

      expect(dummyPopper.style.display).toBe('block');
    });

    describe('update', () => {
      const dummyOption = {
        offset: 8,
        shift: { padding: 5 },
      };
      const dummyPosition = 'top';
      const expectedPopperX = 33;
      const expectedPopperY = 42;

      it('should update popper position', async() => {
        const dummyPopper = document.createElement('div');
        const dummyTrigger = document.createElement('div');
        const dummyDom = {
          popper: dummyPopper,
          trigger: dummyTrigger,
        };

        (autoUpdate as jest.Mock).mockImplementation((_t, _p, cb) => cb(dummyPosition, dummyDom));
        (computePosition as jest.Mock).mockResolvedValue({
          middlewareData: {},
          placement: 'top',
          x: expectedPopperX,
          y: expectedPopperY,
        });

        showOverlay(dummyPosition, dummyDom, dummyOption);

        expect(autoUpdate).toHaveBeenCalledWith(dummyTrigger, dummyPopper, expect.any(Function));
        expect(computePosition).toHaveBeenCalledWith(dummyTrigger, dummyPopper, {
          middleware: [
            'flip middleware',
            'offset middleware',
            'shift middleware',
          ],
          placement: dummyPosition,
          strategy: ODS_OVERLAY_STRATEGY.absolute,
        });
        expect(flip).toHaveBeenCalled();
        expect(offset).toHaveBeenCalledWith(dummyOption.offset);
        expect(shift).toHaveBeenCalledWith(dummyOption.shift);

        // Need to wait for the autoUpdate async callback to end
        await new Promise(process.nextTick);

        expect(dummyPopper.style.left).toBe(`${expectedPopperX}px`);
        expect(dummyPopper.style.top).toBe(`${expectedPopperY}px`);
      });

      it('should update popper and arrow position', async() => {
        const dummyArrow = document.createElement('div');
        const dummyPopper = document.createElement('div');
        const dummyTrigger = document.createElement('div');
        const dummyDom = {
          arrow: dummyArrow,
          popper: dummyPopper,
          trigger: dummyTrigger,
        };
        const dummyMiddlewareData = {
          arrow: {
            x: 12,
            y: 34,
          },
        };

        (autoUpdate as jest.Mock).mockImplementation((_t, _p, cb) => cb(dummyPosition, dummyDom));
        (computePosition as jest.Mock).mockResolvedValue({
          middlewareData: dummyMiddlewareData,
          placement: 'top',
          x: expectedPopperX,
          y: expectedPopperY,
        });

        showOverlay(dummyPosition, dummyDom, dummyOption);

        expect(autoUpdate).toHaveBeenCalledWith(dummyTrigger, dummyPopper, expect.any(Function));
        expect(computePosition).toHaveBeenCalledWith(dummyTrigger, dummyPopper, {
          middleware: [
            'flip middleware',
            'offset middleware',
            'shift middleware',
            'arrow middleware',
          ],
          placement: dummyPosition,
          strategy: ODS_OVERLAY_STRATEGY.absolute,
        });
        expect(arrow).toHaveBeenCalledWith({ element: dummyArrow });
        expect(flip).toHaveBeenCalled();
        expect(offset).toHaveBeenCalledWith(dummyOption.offset);
        expect(shift).toHaveBeenCalledWith(dummyOption.shift);

        // Need to wait for the autoUpdate async callback to end
        await new Promise(process.nextTick);

        expect(dummyPopper.style.left).toBe(`${expectedPopperX}px`);
        expect(dummyPopper.style.top).toBe(`${expectedPopperY}px`);
        expect(dummyArrow.style.bottom).toBe('-4px');
        expect(dummyArrow.style.left).toBe(`${dummyMiddlewareData.arrow.x}px`);
        expect(dummyArrow.style.right).toBe('');
        expect(dummyArrow.style.top).toBe(`${dummyMiddlewareData.arrow.y}px`);
      });
    });
  });
});
