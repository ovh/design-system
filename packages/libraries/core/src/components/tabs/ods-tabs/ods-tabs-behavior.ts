import { OdsTabBarItem } from '../ods-tab-bar-item/ods-tab-bar-item';
import { OdsTabPanel } from '../ods-tab-panel/ods-tab-panel';
import { OdsTabItemSelectEventDetail } from '../ods-tab-item-select-event-detail';

export interface OdsTabsBehavior {
  /**
   * reference to the host element.
   */
  el: HTMLElement;

  /**
   * Before init, it must call the init of controller in order to make trigger the panel at initialization
   */
  beforeInit(): void;

  /**
   * After init, it must call the init of controller in order to make initialized active panel really active
   */
  afterInit(): void;

  /**
   * emit the event once the tabs changed, after a change of panel
   */
  emitChanged(): void;

  /**
   * retrieve the current tab items given to the component
   */
  getTabItems(): Array<OdsTabBarItem & HTMLElement>;

  /**
   * retrieve the current tab panels given to the component
   */
  getTabPanels(): Array<OdsTabPanel & HTMLElement>;

  /**
   * receive and handle a tab item select event.
   * It must trigger a call to controller's changeActivePanel
   * @see OdsTabsController.changeActivePanel
   * @param event - event fired by the tab bar item
   */
  handleTabItemSelection(event: CustomEvent<OdsTabItemSelectEventDetail>): void;

  /**
   * when active panel property changed, set the new active panel
   * @param panel - new value of the panel
   */
  onPanelPropChange(panel: string): void;
}
