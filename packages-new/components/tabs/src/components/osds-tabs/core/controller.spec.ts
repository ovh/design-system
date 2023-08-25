import type { OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { Ods, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy } from '@ovhcloud/ods-common-testing';
import { OdsTabsController } from './controller';
import { OsdsTabs } from '../osds-tabs';
import { OsdsTabBarItem } from '../../osds-tab-bar-item/osds-tab-bar-item';
import { OsdsTabBar } from '../../osds-tab-bar/osds-tab-bar';
import { OsdsTabsPanel } from '../../osds-tab-panel/osds-tab-panel';
import { DEFAULT_ATTRIBUTE } from '../constants/default-attributes';

class OdsTabsMock extends OsdsTabs {
    constructor(attribute: Partial<OsdsTabs>) {
        super();
        Object.assign(this, attribute)
    }
    controller: OdsTabsController = jest.fn() as unknown as OdsTabsController;
    beforeInit = jest.fn();
}

describe('spec:ods-tabs-controller', () => {
  const baseAttribute = { contrasted: DEFAULT_ATTRIBUTE.contrasted, panel: DEFAULT_ATTRIBUTE.panel, size: DEFAULT_ATTRIBUTE.size };
  let controller: OdsTabsController;
  let component: OsdsTabs;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let item1: OsdsTabBarItem & HTMLElement;
  let item2: OsdsTabBarItem & HTMLElement;
  let tabBar: OsdsTabBar & HTMLElement;
  let panel1: OsdsTabsPanel & HTMLElement;
  let panel2: OsdsTabsPanel & HTMLElement;

  Ods.instance().logging(false);

  function setup(componentToCreate: OsdsTabs) {
    controller = new OdsTabsController(componentToCreate);
  }

  beforeEach(() => {
    component = new OdsTabsMock(baseAttribute);

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

    component.el = document.createElement('osds-tabs') as HTMLStencilElement;

    tabBar.appendChild(item1);
    tabBar.appendChild(item2);
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  function mockGetTabItems(items: Array<OsdsTabBarItem & HTMLElement>) {
    jest.spyOn(component, 'getTabItems').mockImplementation(() => items);
  }

  function mockGetTabPanels(panels: Array<OsdsTabsPanel & HTMLElement>) {
    jest.spyOn(component, 'getTabPanels').mockImplementation(() => panels);
  }

  it('should initialize', () => {
    setup(component);
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {

    describe('beforeInit', () => {
      beforeEach(() => {
        component.panel = '2';
        component.contrasted = true;
        setup(component);
        jest.spyOn(controller, 'changeActivePanel').mockImplementation(() => undefined);
        controller.beforeInit();
      })
      it('should call changeActivePanel', () => {
        expect(controller.changeActivePanel).toHaveBeenCalledWith(component.panel);
      });
      it('should call onContrastedPropChange', () => {
        expect(component.onContrastedPropChange).toHaveBeenCalledWith(component.contrasted);
      });
    });

    describe('getTabItems', () => {
      it('should retrieve items inside tab bar', () => {
        component.el.appendChild(tabBar);
        setup(component);
        const items = controller.getTabItems('ods-tab-bar-item');
        expect(items).toEqual([item1, item2]);
      });
    });

    describe('getTabPanels', () => {
      it('should retrieve panels tabs', () => {
        component.el.appendChild(panel1);
        component.el.appendChild(panel2);
        setup(component);
        const items = controller.getTabPanels('ods-tab-panel');
        expect(items).toEqual([panel1, panel2]);
      });
    });

    describe('changeActivePanel', () => {
      beforeEach(() => {
        component.el.appendChild(tabBar);
        component.el.appendChild(panel1);
        component.el.appendChild(panel2);
        mockGetTabItems([item1, item2]);
        mockGetTabPanels([panel1, panel2]);
        setup(component);
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
          expect(component.emitChanged).toHaveBeenCalledWith();
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
          expect(component.emitChanged).toHaveBeenCalledWith();
        });
      });


      describe('panel set', () => {
        it('should not fire event if panel is the same', () => {
          component.panel = '2';
          item2.active = true;
          panel2.active = true;
          controller.changeActivePanel('2');
          expect(component.emitChanged).not.toHaveBeenCalled();
        });
      });

    });

    describe('propagateContrastedToItems', () => {

      beforeEach(() => {
        mockGetTabItems([item1, item2]);
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
