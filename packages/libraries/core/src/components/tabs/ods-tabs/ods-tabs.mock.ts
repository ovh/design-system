/* eslint-disable @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars */
import { OdsTabs } from './ods-tabs';
import { OdsTabsMethods } from './ods-tabs-methods';
import { OdsTabsEvents } from './ods-tabs-events';
import { OdsTabsController } from './ods-tabs-controller';
import { OdsTabsChangeEventDetail } from '../ods-tabs-change-event-detail';
import { OdsTabsSize } from './ods-tabs-size';

/**
 * Mocked generic implementation that represents an `OdsTabs`.
 * it allows to test the controller with a stub implementation.
 */
export class OdsTabsMock implements OdsTabs<OdsTabsMethods, OdsTabsEvents> {
  afterInit = jest.fn();
  beforeInit = jest.fn();
  contrasted = false;
  controller: OdsTabsController = jest.fn() as unknown as OdsTabsController;
  el!: HTMLElement;
  emitChanged = jest.fn();
  getTabItems = jest.fn();
  getTabPanels = jest.fn();
  handleTabItemSelection = jest.fn();
  odsTabsChanged!: OdsTabsChangeEventDetail;
  onContrastedPropChange = jest.fn();
  onPanelPropChange = jest.fn();
  panel = '';
  size = OdsTabsSize.md;
}
