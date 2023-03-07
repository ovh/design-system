import { Component, Element, Prop, State, h, Host, Listen, Event, EventEmitter, Watch } from '@stencil/core';
import { OdsBreadcrumbs, OdsBreadcrumbsController, odsBreadcrumbsDefaultAttributes, OdsBreadcrumbsEvents, OdsBreadcrumbsMethods } from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

import { HTMLStencilElement } from '@stencil/core/internal';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot start - Fixed start breadcrumbs content
 * @slot (unnamed) - Breadcrumbs content
 * @slot end - Fixed end breadcrumbs content
 */
@Component({
  tag: 'osds-breadcrumb',
  styleUrl: 'osds-breadcrumb.scss',
  shadow: true,
})
export class OsdsBreadcrumbs implements OdsBreadcrumbs<OdsStencilMethods<OdsBreadcrumbsMethods>, OdsStencilEvents<OdsBreadcrumbsEvents>> {
  controller: OdsBreadcrumbsController = new OdsBreadcrumbsController(this);

  @Element() host!: HTMLStencilElement;

  /** @see OdsBreadcrumbsAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsBreadcrumbsDefaultAttributes.color;

  /** @see OdsBreadcrumbsAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted?: boolean = odsBreadcrumbsDefaultAttributes.contrasted;

  /** @see OdsBreadcrumbsAttributes.disabled */
  @Prop({ reflect: true }) disabled?: boolean = odsBreadcrumbsDefaultAttributes.disabled;

  /** @see OdsBreadcrumbsAttributes.active */
  @Prop({ reflect: true }) active?: boolean = odsBreadcrumbsDefaultAttributes.active;

  /** @see OdsBreadcrumbsAttributes.href */
  @Prop({ reflect: true }) public href: string = odsBreadcrumbsDefaultAttributes.href;

  @State() activeChanged!: boolean;

  @State() collapsed!: boolean;

  @Prop() separator?: boolean | undefined;

  @Prop() maxItems?: number;

  @Prop() itemsBeforeCollapse = 1;

  @Prop() itemsAfterCollapse = 1;

  /**
   * @see OdsChipBehavior.beforeRender
   */
  beforeRender(): void {
    this.controller.validateAttributes();
  }

  componentWillRender(): void {
    this.beforeRender();
  }

  @Listen('collapsedClick')
  @Watch('maxItems')
  @Watch('itemsBeforeCollapse')
  @Watch('itemsAfterCollapse')
  render() {
    return (
      <Host role="navigation">
        <ul>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
