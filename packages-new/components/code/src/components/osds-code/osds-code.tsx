import type { OsdsButton } from '@ovhcloud/ods-component-button';
import type { OsdsIcon } from '@ovhcloud/ods-component-icon';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { EventEmitter, HTMLStencilElement } from '@stencil/core/internal';
import type { OdsCodeEvent } from './interfaces/events';
import type { ODS_CODE_SIZE } from './constants/code-size';
import type { OdsCodeAttribute } from './interfaces/attributes';
import { Component, Element, Event, h, Host, Prop } from '@stencil/core';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCodeController } from './core/controller';

/**
 * @slot (unnamed) - Code content
 * @slot (copy) - Copy action zone
 */
@Component({
  tag: 'osds-code',
  styleUrl: 'osds-code.scss',
  shadow: true,
})
export class OsdsCode implements OdsCodeAttribute, OdsCodeEvent {
  controller: OdsCodeController = new OdsCodeController(this);

  @Element() el!: HTMLStencilElement;
  codeEl!: HTMLElement;

  /** @see OdsCodeAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = DEFAULT_ATTRIBUTE.color;

  /** @see OdsCodeAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = DEFAULT_ATTRIBUTE.contrasted;

  /** @see OdsCodeAttributes.size */
  @Prop({ reflect: true }) public size?: ODS_CODE_SIZE = DEFAULT_ATTRIBUTE.size;

  /** @see OdsCodeEvents.odsCodeCopy */
  @Event() odsCodeCopy!: EventEmitter<void>;

  /** @see OdsCodeBehavior.beforeInit */
  beforeInit(): void {
    const copyButton = this.el.querySelector('[slot="copy"]');
    if (copyButton && copyButton.tagName.toLowerCase() === 'osds-button') {
      const iconFound = copyButton.querySelector('osds-icon') as (HTMLElement & OsdsIcon) | null;
      this.controller.autocompleteCopySlot(copyButton as (HTMLSlotElement & OsdsButton), iconFound);
    }
  }

  /** @see OdsCodeBehavior.createCopyIconElement */
  createCopyIconElement() {
    return document.createElement('osds-icon') as HTMLElement;
  }

  componentWillLoad(): void {
    this.beforeInit();
  }

  /** @see OdsCodeBehavior.emitCopy */
  emitCopy(): void {
    this.odsCodeCopy.emit();
  }

  /** @see OdsCodeBehavior.onCopyClick */
  onCopyClick(): void {
    this.controller.copyCode();
  }

  render() {
    return (
      <Host>
        <pre class={'code__wrapper'}>
          <code class={'code_container'} ref={(el) => this.codeEl = el as HTMLElement}>
            <slot></slot>
          </code>
          <slot {...{
            name: 'copy',
            onClick: () => this.onCopyClick()
          }}></slot>
        </pre>
      </Host>
    );
  }
}
