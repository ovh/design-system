import { Component, Element, Host, h } from '@stencil/core';
import {
  Ods<%= componentName %>,
  Ods<%= componentName %>Controller,
  Ods<%= componentName %>Events,
  Ods<%= componentName %>Methods,
  // ods<%= componentName %>DefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - <%= componentName %> content
 */
@Component({
  tag: 'osds-<%= name %>',
  styleUrl: 'osds-<%= name %>.scss',
  shadow: true
})
export class Osds<%= componentName %> implements Ods<%= componentName %><OdsStencilMethods<Ods<%= componentName %>Methods>, OdsStencilEvents<Ods<%= componentName %>Events>> {
  controller: Ods<%= componentName %>Controller = new Ods<%= componentName %>Controller(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = ods<%= componentName %>DefaultAttributes.color;

  /**
   * @see Ods<%= componentName %>Behavior.beforeRender
   */
  beforeRender(): void {

  }

  componentWillRender(): void {

  }

  render() {

    return (
      <Host>

        {/* UI template */}

      </Host>
    );
  }
}
