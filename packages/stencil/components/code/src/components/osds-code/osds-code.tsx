import type { OsdsButton } from '@ovhcloud/ods-component-button';
import type { OsdsIcon } from '@ovhcloud/ods-component-icon';
import { Component, Element, Event, h, Host, Prop } from '@stencil/core';
import { EventEmitter, HTMLStencilElement } from '@stencil/core/internal';
import {
  OdsCode,
  OdsCodeController,
  odsCodeDefaultAttributes,
  OdsCodeEvents,
  OdsCodeMethods,
  OdsCodeSize,
} from '@ovhcloud/ods-core';
import { OdsStencilEvents, OdsStencilMethods } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * @slot (unnamed) - Code content
 * @slot (copy) - Copy action zone
 */
@Component({
  tag: 'osds-code',
  styleUrl: 'osds-code.scss',
  shadow: true,
})
export class OsdsCode implements OdsCode<OdsStencilMethods<OdsCodeMethods>, OdsStencilEvents<OdsCodeEvents>> {
  controller: OdsCodeController = new OdsCodeController(this);

  @Element() el!: HTMLStencilElement;
  codeEl!: HTMLElement;

  /** @see OdsCodeAttributes.color */
  @Prop({ reflect: true }) public color?: OdsThemeColorIntent = odsCodeDefaultAttributes.color;

  /** @see OdsCodeAttributes.contrasted */
  @Prop({ reflect: true }) public contrasted? = odsCodeDefaultAttributes.contrasted;

  /** @see OdsCodeAttributes.size */
  @Prop({ reflect: true }) public size?: OdsCodeSize = odsCodeDefaultAttributes.size;

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
