import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, Watch, h } from '@stencil/core';
import { type HTMLStencilElement } from '@stencil/core/internal';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_MODAL_COLOR, type OdsModalColor } from '../../constants/modal-color';

@Component({
  shadow: true,
  styleUrl: 'ods-modal.scss',
  tag: 'ods-modal',
})
export class OdsModal {
  private modalDialog!: HTMLDialogElement;

  @Element() el!: HTMLStencilElement;

  @Prop({ reflect: true }) public color: OdsModalColor = ODS_MODAL_COLOR.information;
  @Prop({ reflect: true }) public isDismissible: boolean = true;
  @Prop({ mutable: true, reflect: true }) public isOpen: boolean = false;

  @Event() odsModalClose!: EventEmitter<void>;
  @Event() odsModalOpen!: EventEmitter<void>;

  @Listen('keydown', { target: 'window' })
  onKeyDown(event: KeyboardEvent): void {
    if(event.key === 'Escape') {
      event.stopPropagation();
      event.preventDefault();

      if (this.isOpen && this.isDismissible) {
        this.close();
      }
    }
  }

  @Watch('isOpen')
  handleOpenState(): void {
    if (!this.modalDialog) {
      return;
    } else if (this.isOpen) {
      this.modalDialog.showModal?.();
    } else {
      this.modalDialog.close?.();
    }
  }

  componentDidLoad(): void {
    this.handleOpenState();
  }

  @Method()
  async close(): Promise<void> {
    document.body.style.removeProperty('overflow');

    if (this.modalDialog) {
      this.modalDialog.classList.add('ods-modal__dialog--close-animation');

      setTimeout(() => {
        this.isOpen = false;
        this.modalDialog.classList.remove('ods-modal__dialog--close-animation');
      }, 100);
    } else {
      this.isOpen = false;
    }

    this.odsModalClose.emit();
  }

  @Method()
  async open(): Promise<void> {
    document.body.style.overflow = 'hidden';
    this.isOpen = true;
    this.odsModalOpen.emit();
  }

  handleBackdropClick(event: MouseEvent): void {
    if (this.isDismissible && event.target === this.modalDialog) {
      this.close();
    }
  }

  render(): FunctionalComponent {
    return (
      <Host class={{
        'ods-modal': true,
        'ods-modal--open': this.isOpen,
      }}>
        <dialog class='ods-modal__dialog'
          ref={(el) => this.modalDialog = el as HTMLDialogElement}
          onClick={(event) => {
            this.handleBackdropClick(event);
          }}
        >
          <div class='ods-modal__backdrop'></div>

          <div class={{
            'ods-modal__dialog__header': true,
            [ `ods-modal__dialog__header--${this.color}` ]: true,
          }}>
            {
              this.isDismissible &&
              <button
                class={{
                  'ods-modal__dialog__header__close': true,
                  [ `ods-modal__dialog__header__close--${this.color}` ]: true,
                }}
                onClick={ this.close.bind(this) }>
                <ods-icon name={ ODS_ICON_NAME.cross }>
                </ods-icon>
              </button>
            }
          </div>

          <div class='ods-modal__dialog__content'>
            <slot></slot>
            <div class='ods-modal__dialog__content__actions'>
              <slot name='actions'></slot>
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
