import { Component, Element, Host, h } from '@stencil/core';
import {
  OdsClipboard,
  OdsClipboardController,
  OdsClipboardEvents,
  OdsClipboardMethods,
  // odsClipboardDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';

/**
 * @slot (unnamed) - Clipboard content
 */
@Component({
  tag: 'osds-clipboard',
  styleUrl: 'osds-clipboard.scss',
  shadow: true
})
export class OsdsClipboard implements OdsClipboard<OdsStencilMethods<OdsClipboardMethods>, OdsStencilEvents<OdsClipboardEvents>> {
  controller: OdsClipboardController = new OdsClipboardController(this);
  @Element() el!: HTMLElement;

  // Component properties as @Prop
  // ex: @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsClipboardDefaultAttributes.color;

  /**
   * @see OdsClipboardBehavior.beforeRender
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
