import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsSearchBar,
  OdsSearchBarController,
  OdsSearchBarEvents,
  OdsSearchBarMethods,
  // odsSearchBarDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - SearchBar content
 */
@Component({
  tag: 'osds-search-bar',
  styleUrl: 'osds-search-bar.scss',
  shadow: true
})
export class OsdsSearchBar implements OdsSearchBar<OdsStencilMethods<OdsSearchBarMethods>, OdsStencilEvents<OdsSearchBarEvents>> {
  controller: OdsSearchBarController = new OdsSearchBarController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsSearchBarDefaultAttributes.color;

  /**
   * @see OdsSearchBarBehavior.beforeRender
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
