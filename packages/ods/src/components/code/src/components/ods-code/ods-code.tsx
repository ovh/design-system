import { Component, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, h } from '@stencil/core';
import { copyToClipboard } from '../../../../../utils/dom';
import { ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';

@Component({
  shadow: true,
  styleUrl: 'ods-code.scss',
  tag: 'ods-code',
})
export class OdsCode {
  private codeElement?: HTMLElement;

  @Prop({ reflect: true }) public canCopy: boolean = false;

  @Event() odsCopy!: EventEmitter<string>;

  @Method()
  async copy(): Promise<void> {
    const value = this.codeElement?.querySelector<HTMLSlotElement>('slot')?.assignedNodes()
      .map((node) => node.textContent).join('').trim();

    await copyToClipboard(value || '');
    this.odsCopy.emit(value);
  }

  render(): FunctionalComponent {
    return (
      <Host class="ods-code">
        <pre class="ods-code__preformat">
          <code
            class="ods-code__preformat__code"
            ref={ (el) => this.codeElement = el }>
            <slot></slot>
          </code>
        </pre>

        {
          this.canCopy &&
          <ods-button
            class="ods-code__copy"
            icon={ ODS_ICON_NAME.fileCopy }
            label=""
            onClick={ () => this.copy() }
            variant={ ODS_BUTTON_VARIANT.ghost }>
          </ods-button>
        }
      </Host>
    );
  }
}
