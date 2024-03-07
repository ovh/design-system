import type { OdsClipboardAttribute } from './interfaces/attributes';
import type { OdsClipboardEvent } from './interfaces/events';
import type { OdsClipboardMethod } from './interfaces/methods';
import type { OcdkSurface } from '@ovhcloud/ods-cdk';
import type { EventEmitter, FunctionalComponent } from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import { OcdkSurfaceCorner, ocdkDefineCustomElements, ocdkIsSurface } from '@ovhcloud/ods-cdk';
import { odsDebounce } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { Component, Element, Event, Host, Listen, Method, Prop, State, h } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsClipboardController } from './core/controller';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_INPUT_TYPE } from '../../../../input/src';

ocdkDefineCustomElements();

@Component({
  shadow: true,
  styleUrl: 'osds-clipboard.scss',
  tag: 'osds-clipboard',
})
export class OsdsClipboard implements OdsClipboardAttribute, OdsClipboardEvent, OdsClipboardMethod {
  anchor!: HTMLDivElement;
  controller: OdsClipboardController = new OdsClipboardController(this);
  surface: OcdkSurface | undefined = undefined;

  @Element() el!: HTMLStencilElement;

  @State() surfaceMessage: string = '';

  @Prop({ reflect: true }) public disabled?: boolean = DEFAULT_ATTRIBUTE.disabled;
  @Prop({ reflect: true }) public inline?: boolean = DEFAULT_ATTRIBUTE.inline;
  @Prop({ reflect: true }) public value: string = DEFAULT_ATTRIBUTE.value;

  @Event() odsClipboardCopied!: EventEmitter<string>;

  public debouncedHandlerClick = odsDebounce(this.handlerClick);

  @Method()
  async closeSurface(): Promise<void> {
    return this.controller.closeSurface();
  }

  @Listen('click', { target: 'window' })
  checkForClickOutside(event: MouseEvent): void {
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

  syncReferences(): void {
    this.controller.syncReferences();
  }

  render(): FunctionalComponent {
    return (
      <Host>
        <div
          class="trigger"
          ref={(el?: HTMLElement | null): void => {
            this.anchor = el as HTMLDivElement;
            this.syncReferences();
          }}
        >
          <osds-input
            read-only
            color={ODS_THEME_COLOR_INTENT.primary}
            disabled={this.disabled}
            icon={ODS_ICON_NAME.COPY}
            inline={this.inline}
            onClick={(): void => this.debouncedHandlerClick()}
            onKeyDown={(event: KeyboardEvent): void => this.handlerKeyDown(event)}
            type={ODS_INPUT_TYPE.text}
            value={this.value}
          ></osds-input>
        </div>
        <ocdk-surface
          corners={[OcdkSurfaceCorner.CENTER_RIGHT, OcdkSurfaceCorner.CENTER_LEFT]}
          innerHTML={this.surfaceMessage}
          ref={(el: HTMLElement): void => {
            if (ocdkIsSurface(el)) {
              this.surface = el as OcdkSurface;
              this.syncReferences();
            }
          }}
        />
      </Host>
    );
  }
}
