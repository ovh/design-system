import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, h } from '@stencil/core';
import { copyToClipboard, getRandomHTMLId } from '../../../../../utils/dom';
import { ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';

@Component({
  shadow: true,
  styleUrl: 'ods-clipboard.scss',
  tag: 'ods-clipboard',
})
export class OdsClipboard {
  private copyButtonId = 'clipboard-copy';
  private hostId: string = '';

  @Element() el!: HTMLElement;

  @State() isCopyDone: boolean = false;

  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public labelCopy: string = 'Copy to clipboard';
  @Prop({ reflect: true }) public labelCopySuccess: string = 'Copied!';
  @Prop({ reflect: true }) public value?: string;

  @Event() odsClipboardCopy!: EventEmitter<string>;

  @Method()
  async copy(): Promise<void> {
    if (this.isDisabled) {
      return;
    }

    await copyToClipboard(this.value || '');

    this.isCopyDone = true;
    this.odsClipboardCopy.emit(this.value);
  }

  componentWillLoad(): void {
    this.hostId = this.el.id || getRandomHTMLId();
  }

  onTooltipHide(): void {
    this.isCopyDone = false;
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-clipboard"
        id={ this.hostId }>
        <ods-input
          class="ods-clipboard__input"
          isDisabled={ this.isDisabled }
          isReadonly={ true }
          name=""
          value={ this.value }>
        </ods-input>

        <ods-button
          class="ods-clipboard__copy"
          icon={ ODS_ICON_NAME.fileCopy }
          id={ this.copyButtonId }
          isDisabled={ this.isDisabled }
          label=""
          onClick={ () => this.copy() }
          variant={ ODS_BUTTON_VARIANT.ghost }>
        </ods-button>

        {
          !this.isDisabled &&
          <ods-tooltip
            onOdsTooltipHide={ () => this.onTooltipHide() }
            part="tooltip"
            position="right"
            shadowDomTriggerId={ this.copyButtonId }
            triggerId={ this.hostId }>
            <p class="ods-clipboard__tooltip">
              {
                this.isCopyDone
                  ? <span class="ods-clipboard__tooltip__copied">
                    { this.labelCopySuccess }

                    <ods-icon
                      class="ods-clipboard__tooltip__copied__check"
                      name={ ODS_ICON_NAME.check }>
                    </ods-icon>
                  </span>
                  : this.labelCopy
              }
            </p>
          </ods-tooltip>
        }
      </Host>
    );
  }
}
