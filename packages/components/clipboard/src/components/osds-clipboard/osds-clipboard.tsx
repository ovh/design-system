import type {EventEmitter} from '@stencil/core';
import type {OdsClipboardAttribute} from './interfaces/attributes';
import type {OdsClipboardEvent} from './interfaces/events';
import type {OdsClipboardMethod} from './interfaces/methods';
import {Component, Element, Event, Host, Listen, Method, Prop, State, h} from '@stencil/core';
import {OcdkSurface, OcdkSurfaceCorner, ocdkDefineCustomElements, ocdkIsSurface} from '@ovhcloud/ods-cdk';
import {ODS_THEME_COLOR_INTENT} from '@ovhcloud/ods-common-theming';
import {ODS_ICON_NAME} from '@ovhcloud/ods-component-icon';
import {ODS_INPUT_TYPE} from '@ovhcloud/ods-component-input';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {OdsClipboardController} from './core/controller';
import {HTMLStencilElement} from '@stencil/core/internal';

ocdkDefineCustomElements();

@Component({
  tag: 'osds-clipboard',
  styleUrl: 'osds-clipboard.scss',
  shadow: true,
})
export class OsdsClipboard implements OdsClipboardAttribute, OdsClipboardEvent, OdsClipboardMethod {
  controller: OdsClipboardController = new OdsClipboardController(this);
  anchor!: HTMLDivElement;
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  /** @see OdsClipboardAttributes.inline */
  @Prop({reflect: true}) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;

  /** @see OdsClipboardAttributes.value */
  @Prop({reflect: true}) public value: string = DEFAULT_ATTRIBUTE.value;

  /** @see OdsClipboardAttributes.disabled */
  @Prop({reflect: true}) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;

  @State() surfaceMessage: string | undefined = '';

  @Method()
  async closeSurface() {
    this.controller.closeSurface();
  }

  /** @see OdsClipboardEvents.odsClipboardCopied */
  @Event() odsClipboardCopied!: EventEmitter<string>;

  @Listen('click', {target: 'window'})
  checkForClickOutside(event: any) {
    this.controller.checkForClickOutside(event);
  }

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

  syncReferences() {
    this.controller.syncReferences();
  }

  render() {
    return (
      <Host>
        <div class="trigger"
          ref={(el?: HTMLElement | null) => {
            this.anchor = el as HTMLDivElement;
            this.syncReferences();
          }}>
          <osds-input read-only
            color={ODS_THEME_COLOR_INTENT.primary}
            disabled={this.disabled}
            icon={ODS_ICON_NAME.COPY}
            inline={this.inline}
            type={ODS_INPUT_TYPE.text}
            value={this.value}
            onClick={() => this.handlerClick()}
            onKeyDown={(event: KeyboardEvent) => this.handlerKeyDown(event)}
          >
          </osds-input>
        </div>
        <ocdk-surface
          innerHTML={this.surfaceMessage}
          corners={[OcdkSurfaceCorner.CENTER_RIGHT, OcdkSurfaceCorner.CENTER_LEFT]}
          ref={(el: HTMLElement) => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          }}/>
      </Host>
    );
  }
}
