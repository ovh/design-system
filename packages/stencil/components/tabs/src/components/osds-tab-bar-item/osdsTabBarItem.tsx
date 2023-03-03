import { Component, h, Prop, Element, } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabBarItem, OdsTabBarItemEvents, OdsTabsSize, OdsTabBarItemMethods, OdsTabBarItemController, OdsTabBarItemDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

//import { HTMLStencilElement } from '@stencil/core/internal';
//import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start Tabs content
 * @slot (unnamed) - Tabs content
 * @slot end - Fixed end Tabs content
 */
@Component({
  tag: 'osds-tab-bar-item',
  styleUrl: 'osds-tab-bar-item.scss',
  shadow: true,
})
export class OsdsTabs implements OdsTabBarItem<OdsStencilMethods<OdsTabBarItemMethods>, OdsStencilEvents<OdsTabBarItemEvents>> {
  /** @see OdsComponent.controller */
  controller: OdsTabBarItemController = new OdsTabBarItemController(this as OdsTabBarItem);

  /** @see OdsTabBarItemBehavior.hostElement */
  @Element() hostElement!: HTMLStencilElement;

  @Prop({ reflect: true }) public slots?: string = OdsTabBarItemDefaultAttributes.slots;
  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = OdsTabBarItemDefaultAttributes.size;

  /** @see OdsButtonBehavior.beforeRender */
  beforeRender(): void {
    //this.controller.vadivdateAttributes();
  }

  afterInit() {
    this.controller.afterInit();
  }

  componentDidLoad() {
    (async () => {
      this.afterInit();
    })();
  }

  render() {
    return (
        <div>osds-tab-bar-item</div>
    );
  }
}
