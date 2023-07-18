
import { OdsLogger } from '../../logger/ods-logger';
import { Ods } from '../../configure/ods';
import {
  OdsClearLoggerSpy,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences
} from '@ovhcloud/ods-testing/src';
import { OdsSwitchController, OdsSwitch } from './public-api';
import { OdsSwitchMock } from './ods-switch.mock';
import { OdsSwitchItem } from '../public-api';

describe('spec:ods-switch-controller', () => {
  let controller: OdsSwitchController;
  let component: OdsSwitch;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let item1: OdsSwitchItem & HTMLElement;
  let item2: OdsSwitchItem & HTMLElement;

  Ods.instance().logging(false);

  function setup(attributes: Partial<OdsSwitch> = {}) {
    component = { ...component, ...attributes };
    controller = new OdsSwitchController(component);
  }

  beforeEach(() => {
    component = new OdsSwitchMock();
    item1 = document.createElement('osds-switch-item') as OdsSwitchItem & HTMLElement;
    item1.value = '1';
    item2 = document.createElement('osds-switch-item') as OdsSwitchItem & HTMLElement;
    item2.value = '2';
    component.el = document.createElement('osds-switch');
    component.el.appendChild(item1);
    component.el.appendChild(item2);

    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsSwitchController
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should initialize', () => {
    setup(component);
    expect(controller).toBeTruthy();
  });

  describe('methods', () => {
    it('should changeCheckedSwitchItem', () => {
      setup(component);
      const { current, previous } = controller.changeCheckedSwitchItem('2');
      expect(current).toBe(item2);
      expect(current.className).toContain('fadein-from-left');
      expect(previous).toBe(undefined);
    });

    it('should changeCheckedSwitchItem with old value', () => {
      setup(component);
      controller.changeCheckedSwitchItem('1');
      const { current, previous } = controller.changeCheckedSwitchItem('2');
      expect(current).toBe(item2);
      expect(current.className).toContain('fadein-from-left');
      expect(previous).toBe(item1);
      expect(previous.className).toContain('fadeout-from-right');
    });

    it('should changeCheckedSwitchItem with class', () => {
      setup(component);
      controller.changeCheckedSwitchItem('2');
      const { current, previous } = controller.changeCheckedSwitchItem('1');
      expect(current).toBe(item1);
      expect(current.className).toContain('fadein-from-right');
      expect(previous).toBe(item2);
      expect(previous.className).toContain('fadeout-from-left');
    });

    it('should findPreviousSwitchItem', () => {
      setup(component);
      jest.spyOn(controller, 'getActiveSwitchItemIndex').mockReturnValue(1);
      const previousSwitchItem = controller.findPreviousSwitchItem();
      expect(previousSwitchItem).toStrictEqual(item1);
    });

    it('should findNextSwitchItem', () => {
      setup(component);
      jest.spyOn(controller, 'getActiveSwitchItemIndex').mockReturnValue(0);
      const nextSwitchItem = controller.findNextSwitchItem();
      expect(nextSwitchItem).toStrictEqual(item1);
    });

    it('should not findPreviousSwitchItem because of no activeElement', () => {
      setup(component);
      jest.spyOn(controller, 'getActiveSwitchItemIndex').mockReturnValue(undefined);
      const previousSwitchItem = controller.findPreviousSwitchItem();
      expect(previousSwitchItem).toBe(undefined);
    });

    it('should not findNextSwitchItem because of no activeElement', () => {
      setup(component);
      jest.spyOn(controller, 'getActiveSwitchItemIndex').mockReturnValue(undefined);
      const nextSwitchItem = controller.findNextSwitchItem();
      expect(nextSwitchItem).toBe(undefined);
    });

    it('should not findCheckedSwitchItem', () => {
      setup(component);
      const selectedSwitchItem = controller.finCheckedSwitchItem();
      expect(selectedSwitchItem).toBe(undefined);
    });

    it('should findCheckedSwitchItem', () => {
      setup(component);
      item1.checked = true;
      const selectedSwitchItem = controller.finCheckedSwitchItem();
      expect(selectedSwitchItem).toBe(item1);
    });
    
    it('should getSwitchItems', () => {
      setup(component);
      const switchItems = controller.getSwitchItems();
      expect(switchItems).toEqual([item1, item2]);
    });
  });
});
