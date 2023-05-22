import { OdsLogger } from '../../../logger/ods-logger';
import { Ods } from '../../../configure/ods';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing';
import { OdsTabsController } from './ods-tabs-controller';
import { OdsTabs } from './ods-tabs';
import { OdsTabsMock } from './ods-tabs.mock';
import { OdsTabBarItem } from '../ods-tab-bar-item/ods-tab-bar-item';
import { OdsTabBar } from '../ods-tab-bar/ods-tab-bar';
import { OdsTabPanel } from '../ods-tab-panel/ods-tab-panel';

describe('spec:ods-tabs-controller', () => {
  let controller: OdsTabsController;
  let component: OdsTabs;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let item1: OdsTabBarItem & HTMLElement;
  let item2: OdsTabBarItem & HTMLElement;
  let tabBar: OdsTabBar & HTMLElement;
  let panel1: OdsTabPanel & HTMLElement;
  let panel2: OdsTabPanel & HTMLElement;

  Ods.instance().logging(false);
  //const logger = new OdsLogger('spec:ods-tabs-controller');

  beforeEach(() => {
    component = new OdsTabsMock() as OdsTabs;
    component.contrasted = false;
    component.panel = '';

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsTabsController,
    });
    item1 = document.createElement('ods-tab-bar-item') as OdsTabBarItem & HTMLElement;
    item1.panel = '1';
    item2 = document.createElement('ods-tab-bar-item') as OdsTabBarItem & HTMLElement;
    item2.panel = '2';
    panel1 = document.createElement('ods-tab-panel') as OdsTabPanel & HTMLElement;
    panel1.name = '1';
    panel2 = document.createElement('ods-tab-panel') as OdsTabPanel & HTMLElement;
    panel2.name = '2';
    tabBar = document.createElement('ods-tab-bar') as OdsTabBarItem & HTMLElement;
    component.el = document.createElement('ods-tabs');
    tabBar.appendChild(item1);
    tabBar.appendChild(item2);
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  function mockGetTabItems(items: Array<OdsTabBarItem & HTMLElement>) {
    jest.spyOn(component, 'getTabItems').mockImplementation(() => items);
  }
  function mockGetTabPanels(panels: Array<OdsTabPanel & HTMLElement>) {
    jest.spyOn(component, 'getTabPanels').mockImplementation(() => panels);
  }

  function setup(componentToCreate: OdsTabs) {
    controller = new OdsTabsController(componentToCreate);
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
