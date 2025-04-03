import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, h } from '@stencil/core';
import { copyToClipboard, getRandomHTMLId } from '../../../../../utils/dom';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';

@Component({
  shadow: true,
  styleUrl: 'ods-code.scss',
  tag: 'ods-code',
})
export class OdsCode {
  private codeElement?: HTMLElement;
  private copyButtonId = 'code-copy';
  private hostId: string = '';

  @Element() el!: HTMLElement;

  @State() isCopyDone: boolean = false;

  @Prop({ reflect: true }) public canCopy: boolean = false;
  @Prop({ reflect: true }) public labelCopy: string = 'Copy to clipboard';
  @Prop({ reflect: true }) public labelCopySuccess: string = 'Copied!';

  @Event() odsCopy!: EventEmitter<string>;

  @Method()
  public async copy(): Promise<void> {
    const value = this.codeElement?.querySelector<HTMLSlotElement>('slot')?.assignedNodes()
      .map((node) => node.textContent).join('').trim();

    await copyToClipboard(value || '');

    this.isCopyDone = true;
    this.odsCopy.emit(value);
  }

  componentWillLoad(): void {
    this.hostId = this.el.id || getRandomHTMLId();
  }

  private onTooltipHide(): void {
    this.isCopyDone = false;
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-code"
        id={ this.hostId }>
        <pre class="ods-code__preformat">
          <code
            class="ods-code__preformat__code"
            ref={ (el) => this.codeElement = el }>
            <slot></slot>
          </code>
        </pre>

        {
          this.canCopy &&
          <div>
            <ods-button
              class="ods-code__copy"
              icon={ ODS_ICON_NAME.fileCopy }
              id={ this.copyButtonId }
              label=""
              onClick={ () => this.copy() }
              size={ ODS_BUTTON_SIZE.sm }
              variant={ ODS_BUTTON_VARIANT.ghost }>
            </ods-button>

            <ods-tooltip
              onOdsHide={ () => this.onTooltipHide() }
              part="tooltip"
              position="right"
              shadowDomTriggerId={ this.copyButtonId }
              triggerId={ this.hostId }>
              <p class="ods-code__tooltip">
                {
                  this.isCopyDone
                    ? <span class="ods-code__tooltip__copied">
                      { this.labelCopySuccess }

                      <ods-icon
                        class="ods-code__tooltip__copied__check"
                        name={ ODS_ICON_NAME.check }>
                      </ods-icon>
                    </span>
                    : this.labelCopy
                }
              </p>
            </ods-tooltip>
          </div>
        }
      </Host>
    );
  }
}
