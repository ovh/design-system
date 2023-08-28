import type { EventEmitter } from '@stencil/core';
import type { OdsClipboardAttribute } from './interfaces/attributes';
import type { OdsClipboardEvent } from './interfaces/events';
import { Component, Host, h, Prop, Event } from '@stencil/core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { ODS_INPUT_TYPE } from '@ovhcloud/ods-component-input';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsClipboardController } from './core/controller';

@Component({
  tag: 'osds-clipboard',
  styleUrl: 'osds-clipboard.scss',
  shadow: true
})
export class OsdsClipboard implements OdsClipboardAttribute, OdsClipboardEvent {
  controller: OdsClipboardController = new OdsClipboardController();

  /** @see OdsClipboardAttributes.inline */
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsClipboardAttributes.value */
  @Prop({ reflect: true }) public value: string = DEFAULT_ATTRIBUTE.value;

  /** @see OdsClipboardAttributes.disabled */
  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

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
                    color={ ODS_THEME_COLOR_INTENT.primary }
                    disabled={ this.disabled }
                    icon={ ODS_ICON_NAME.COPY }
                    inline={ this.inline }
                    type={ ODS_INPUT_TYPE.text }
                    value={ this.value }
                    onClick={ () => this.handlerClick() }
                    onKeyDown={ (event: KeyboardEvent) => this.handlerKeyDown(event) }
                    >
        </osds-input>
      </Host>
    );
  }
}
