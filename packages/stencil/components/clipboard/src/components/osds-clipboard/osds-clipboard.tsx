import { Component, Element, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import {
  OdsClipboard,
  OdsClipboardController,
  odsClipboardDefaultAttributes,
  OdsClipboardEvents,
  OdsClipboardMethods,
  OdsInputType,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';

@Component({
  tag: 'osds-clipboard',
  styleUrl: 'osds-clipboard.scss',
  shadow: true
})
export class OsdsClipboard implements OdsClipboard<OdsStencilMethods<OdsClipboardMethods>, OdsStencilEvents<OdsClipboardEvents>> {
  controller: OdsClipboardController = new OdsClipboardController(this);
  @Element() el!: HTMLElement;

  /** @see OdsClipboardAttributes.flex */ 
  @Prop({ reflect: true }) public flex?: boolean = odsClipboardDefaultAttributes.flex;

  /** @see OdsClipboardAttributes.value */
  @Prop({ reflect: true }) public value: string = odsClipboardDefaultAttributes.value;
  
  /** @see OdsClipboardAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = odsClipboardDefaultAttributes.disabled;

  /** @see OdsClipboardEvents.odsClipboardCopied */
  @Event() odsClipboardCopied!: EventEmitter<string>;

  handlerClick(): void {
    if (this.disabled) {
      return;
    }
    this.controller.handlerClick(this.value);
  }

  handlerKeyDown(event: KeyboardEvent): void {
    switch (event.code) {
      case 'Space':
      case 'Enter':
        return this.handlerClick();
      default:
        break;
    }
  }

  render() {

    return (
      <Host>

        <osds-input read-only
                    color={ OdsThemeColorIntent.primary }
                    disabled={ this.disabled }
                    flex={ this.flex }
                    icon={ ODS_ICON_NAME.COPY }
                    type={ OdsInputType.text }
                    value={ this.value }
                    onClick={ () => this.handlerClick() }
                    onKeyDown={ (event: KeyboardEvent) => this.handlerKeyDown(event) }
                    >
        </osds-input>

      </Host>
    );
  }
}
