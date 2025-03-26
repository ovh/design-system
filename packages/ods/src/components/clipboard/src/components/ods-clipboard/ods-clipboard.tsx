import { AttachInternals, Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Method, Prop, State, h } from '@stencil/core';
import { copyToClipboard, getRandomHTMLId } from '../../../../../utils/dom';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';

const FOCUSED_CLASS = 'ods-clipboard__container--focused';
@Component({
  formAssociated: true,
  shadow: {
    delegatesFocus: true,
  },
  styleUrl: 'ods-clipboard.scss',
  tag: 'ods-clipboard',
})
export class OdsClipboard {
  private copyButtonId = 'clipboard-copy';
  private hostId: string = '';
  private containerElement?: HTMLDivElement;

  @AttachInternals() internals!: ElementInternals;

  @Element() el!: HTMLElement;

  @State() isCopyDone: boolean = false;

  @Prop({ reflect: true }) public ariaLabel: HTMLElement['ariaLabel'] = null;
  @Prop({ reflect: true }) public ariaLabelledby?: string;
  @Prop({ reflect: true }) public isDisabled: boolean = false;
  @Prop({ reflect: true }) public isMasked?: boolean;
  @Prop({ reflect: true }) public labelCopy: string = 'Copy to clipboard';
  @Prop({ reflect: true }) public labelCopySuccess: string = 'Copied!';
  @Prop({ reflect: true }) public name: string = '';
  @Prop({ reflect: true }) public value?: string;

  @Event() odsCopy!: EventEmitter<string>;

  @Method()
  public async copy(): Promise<void> {
    if (this.isDisabled) {
      return;
    }

    await copyToClipboard(this.value || '');

    this.isCopyDone = true;
    this.odsCopy.emit(this.value);
  }

  componentWillLoad(): void {
    this.hostId = this.el.id || getRandomHTMLId();
  }

  private onInputBlur(): void {
    this.containerElement?.classList.remove(FOCUSED_CLASS);
  }

  private onInputFocus(): void {
    this.containerElement?.classList.add(FOCUSED_CLASS);
  }

  private onTooltipHide(): void {
    this.isCopyDone = false;
  }

  render(): FunctionalComponent {
    return (
      <Host
        class="ods-clipboard"
        id={ this.hostId }>
        <div class={{
          'ods-clipboard__container': true,
          'ods-clipboard__container--disabled': this.isDisabled,
        }}

        ref={(el) => (this.containerElement = el)}>
          <ods-input
            aria-label={ this.ariaLabel }
            aria-labelledby={ this.ariaLabelledby }
            class="ods-clipboard__input"
            exportparts="input"
            isDisabled={ this.isDisabled }
            isMasked={ this.isMasked }
            isReadonly={ true }
            name={ this.name }
            onOdsFocus={ () => this.onInputFocus() }
            onOdsBlur={() => this.onInputBlur()}
            value={ this.value }>
          </ods-input>
          <ods-button
            class="ods-clipboard__copy"
            icon={ ODS_ICON_NAME.fileCopy }
            id={ this.copyButtonId }
            isDisabled={ this.isDisabled }
            label=""
            onClick={ () => this.copy() }
            size={ ODS_BUTTON_SIZE.xs }
            variant={ ODS_BUTTON_VARIANT.ghost }>
          </ods-button>
        </div>

        {
          !this.isDisabled &&
          <ods-tooltip
            onOdsHide={ () => this.onTooltipHide() }
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
