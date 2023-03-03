import { Component, h, Prop, Element, } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsTabBar, OdsTabBarEvents, OdsTabsSize, OdsTabBarMethods, OdsTabBarController, OdsTabBarDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

//import { HTMLStencilElement } from '@stencil/core/internal';
//import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start Tabs content
 * @slot (unnamed) - Tabs content
 * @slot end - Fixed end Tabs content
 */
@Component({
  tag: 'osds-tab-bar',
  styleUrl: 'osds-tab-bar.scss',
  shadow: true,
})
export class OsdsTabs implements OdsTabBar<OdsStencilMethods<OdsTabBarMethods>, OdsStencilEvents<OdsTabBarEvents>> {
  /** @see OdsComponent.controller */
  controller: OdsTabBarController = new OdsTabBarController(this as OdsTabBar);

  /** @see OdsTabBarBehavior.hostElement */
  @Element() hostElement!: HTMLStencilElement;

  @Prop({ reflect: true }) public slots?: string = OdsTabBarDefaultAttributes.slots;
  /** @see OdsSelectAttributes.size */
  @Prop({ reflect: true }) size?: OdsTabsSize = OdsTabBarDefaultAttributes.size;

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
        <div>osds-tab-bar</div>
    );
  }
}
