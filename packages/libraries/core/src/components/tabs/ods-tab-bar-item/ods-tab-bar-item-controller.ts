import { OdsComponentController } from '../../ods-component-controller';
import { OdsTabBarItem } from './ods-tab-bar-item';

/**
 * common controller logic for text component used by the different implementations.
 * it contains all the glue between framework implementation and the third party service.
 */
export class OdsTabBarItemController extends OdsComponentController<OdsTabBarItem> {
  constructor(component: OdsTabBarItem) {
    console.info('********************************')
    console.info('entre dans le constructeur de ods-tab-bar-item')
    super(component);
  }

  updateCheckOnChild(checked: boolean): void {
    console.info('controller updateCheckOnChild checked : ', checked)
    if (this.component.tabitemizedComponent) {
      
      if (checked) {
        this.component.tabitemizedComponent?.setAttribute('checked', '');
      } else {
        this.component.tabitemizedComponent?.removeAttribute('checked');
      }
    }
  }

  setPanelNameIndex(name: any): void {
    console.info('setPanelNameIndex name controller : ', name)
    //this.component.panelNameIndex = name;
  }

  /**
   * 
   */
  beforeInit(): void {
    console.info('********************************')
    console.info('Entre dans le beforeInit')
    this.updateCheckOnChild(this.component.checked);
  }

  salut(): void {
    console.info('salut ddedezdez')
  }

  /**
   * mandatory function
   */
  afterInit(): void {
    // this.component.tabBarItemizedComponent = (this.component.el.firstElementChild as unknown) as (HTMLElement & OdsTabBarItemizable);
    console.info('*******************************')
    console.info('entre dans le after init ods tab bar item controller')
    if (!this.component.tabitemizedComponent) {
      console.info('*******************************')
      console.info('entre dans le afterinit de odstabbaritem : you must place a radioizable element inside the radio component')
    } else {
      this.updateCheckOnChild(this.component.checked);
    }
  }
}
