import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { OdsTabsController } from './controller';
import { OsdsTabBar } from '../../osds-tab-bar/osds-tab-bar';
import { OsdsTabBarItem } from '../../osds-tab-bar-item/osds-tab-bar-item';
import { OsdsTabsPanel } from '../../osds-tab-panel/osds-tab-panel';
import { OsdsTabs } from '../osds-tabs';

class OdsTabsMock extends OsdsTabs {
  constructor(attribute: Partial<OsdsTabs>) {
    super();
    Object.assign(this, attribute);
  }

  controller: OdsTabsController = jest.fn() as unknown as OdsTabsController;
  beforeInit = jest.fn();
  emitChanged = jest.fn();
}

describe('spec:ods-tabs-controller', () => {
  let controller: OdsTabsController;
  let component: OsdsTabs;

  let spyOnChangeActivePanel: jest.SpyInstance<void, jest.ArgsType<OdsTabsController['changeActivePanel']>>;
  let spyOnEmitChanged: jest.SpyInstance<void, jest.ArgsType<OsdsTabs['emitChanged']>>;
  let spyOnOnContrastedPropChange: jest.SpyInstance<void, jest.ArgsType<OsdsTabs['onContrastedPropChange']>>;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let item1: OsdsTabBarItem & HTMLElement;
  let item2: OsdsTabBarItem & HTMLElement;
  let tabBar: OsdsTabBar & HTMLElement;
  let panel1: OsdsTabsPanel & HTMLElement;
  let panel2: OsdsTabsPanel & HTMLElement;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OsdsTabs> = {}) {
    component = new OdsTabsMock(attributes);
    controller = component.controller = new OdsTabsController(component);

    Object.defineProperty(component, 'el', {
      value: document.createElement('osds-tabs') as HTMLStencilElement,
      writable: true,
    });

    controller.tabItems = [item1, item2];
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsTabsController,
    });

    item1 = document.createElement('osds-tab-bar-item') as OsdsTabBarItem & HTMLElement;
    item1.panel = '1';
    item2 = document.createElement('osds-tab-bar-item') as OsdsTabBarItem & HTMLElement;
    item2.panel = '2';

    panel1 = document.createElement('osds-tabs-panel') as OsdsTabsPanel & HTMLElement;
    panel1.name = '1';
    panel2 = document.createElement('osds-tabs-panel') as OsdsTabsPanel & HTMLElement;
    panel2.name = '2';

    tabBar = document.createElement('osds-tab-bar') as OsdsTabBarItem & HTMLElement;

    tabBar.appendChild(item1);
    tabBar.appendChild(item2);
  });

  afterEach(() => {
    jest.clearAllMocks();
    OdsClearLoggerSpy(loggerSpyReferences);
  });

  it('should initialize', () => {
    setup({});
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {

    describe('beforeInit', () => {
      it('should call changeActivePanel', () => {
        setup({ panel: '2', contrasted: true });
        spyOnChangeActivePanel = jest.spyOn(controller, 'changeActivePanel');
        controller.beforeInit();

        expect(spyOnChangeActivePanel).toHaveBeenCalledTimes(1);
        expect(spyOnChangeActivePanel).toHaveBeenCalledWith(component.panel);
      });

      it('should call onContrastedPropChange', () => {
        setup({ panel: '2', contrasted: true });
        spyOnOnContrastedPropChange = jest.spyOn(component, 'onContrastedPropChange');
        controller.beforeInit();

        expect(spyOnOnContrastedPropChange).toHaveBeenCalledTimes(1);
        expect(spyOnOnContrastedPropChange).toHaveBeenCalledWith(component.contrasted);
      });
    });

    describe('changeActivePanel', () => {
      beforeEach(() => {
        setup({ panel: '', contrasted: true });

        spyOnEmitChanged = jest.spyOn(component, 'emitChanged');

        component.el.appendChild(tabBar);
        component.el.appendChild(panel1);
        component.el.appendChild(panel2);

        controller.tabItems = [item1, item2];
        controller.tabPanels = [panel1, panel2];
      });

      describe('panel unset', () => {
        beforeEach(() => {
          controller.changeActivePanel('');
        });
        it('should set active on the first item', () => {
          expect(item1.active).toEqual(true);
          expect(item2.active).toEqual(false);
        });
        it('should set active ont the first panel', () => {
          expect(panel1.active).toEqual(true);
          expect(panel2.active).toEqual(false);
        });
        it('should set default panel to first one in component', () => {
          expect(component.panel).toEqual('1');
        });
        it('should emit event', () => {
          expect(spyOnEmitChanged).toHaveBeenCalledWith();
        });
      });

      describe('panel set', () => {
        beforeEach(() => {
          controller.changeActivePanel('2');
        });
        it('should set active on the right item', () => {
          expect(item1.active).toEqual(false);
          expect(item2.active).toEqual(true);
        });
        it('should set active ont the right panel', () => {
          expect(panel1.active).toEqual(false);
          expect(panel2.active).toEqual(true);
        });
        it('should set default panel to right one in component', () => {
          expect(component.panel).toEqual('2');
        });
        it('should emit event', () => {
          expect(spyOnEmitChanged).toHaveBeenCalledWith();
        });
      });


      describe('panel set', () => {
        it('should not fire event if panel is the same', () => {
          component.panel = '2';
          item2.active = true;
          panel2.active = true;
          controller.changeActivePanel('2');
          expect(spyOnEmitChanged).not.toHaveBeenCalledWith();
        });
      });

    });

    describe('handleArrowKey', () => {
      beforeEach(() => {
        setup({ panel: '', contrasted: true });
      });

      it('should do nothing if arrowLeft is pressed on first tab', () => {
        item1.setAttribute('active', '');
        item2.removeAttribute('active');

        const key = new KeyboardEvent('keypress', { code : 'ArrowLeft' });
        controller.handleArrowKey(key);

        expect(item1.getAttribute('active')).toEqual("");
        expect(item2.getAttribute('active')).toEqual(null);
      });

      it('should do nothing if arrowRight is pressed on last tab', () => {
        item1.removeAttribute('active');
        item2.setAttribute('active', '');

        const key = new KeyboardEvent('keypress', { code : 'ArrowRight' });
        controller.handleArrowKey(key);

        expect(item1.getAttribute('active')).toEqual(null);
        expect(item2.getAttribute('active')).toEqual("");
      });


      it('should set active to tab 2', () => {
        item1.setAttribute('active', '');
        item2.removeAttribute('active');

        const key = new KeyboardEvent('keypress', { code : 'ArrowRight' });
        controller.handleArrowKey(key);

        expect(item1.getAttribute('active')).toEqual("");
        expect(item2.getAttribute('active')).toEqual(null);
      });

      it('should set active to tab 1', () => {
        item1.removeAttribute('active');
        item2.setAttribute('active', '');

        const key = new KeyboardEvent('keypress', { code : 'ArrowLeft' });
        controller.handleArrowKey(key);

        expect(item2.getAttribute('active')).toEqual("");
        expect(item1.getAttribute('active')).toEqual(null);
      });
    });

    describe('propagateContrastedToItems', () => {
      beforeEach(() => {
        setup(component);
      });

      it('should set contrasted on all items', () => {
        controller.propagateContrastedToItems(true);
        expect(item1.contrasted).toEqual(true);
        expect(item2.contrasted).toEqual(true);
      });

      it('should set not contrasted on all items', () => {
        item1.contrasted = true;
        item2.contrasted = true;
        controller.propagateContrastedToItems(false);
        expect(item1.contrasted).toEqual(false);
        expect(item2.contrasted).toEqual(false);
      });
    });

  });
});
