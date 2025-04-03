import { Component, Element, Event, type EventEmitter, type FunctionalComponent, Host, Listen, Method, Prop, Watch, h } from '@stencil/core';
import { ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';
import { ODS_MODAL_COLOR, type OdsModalColor } from '../../constants/modal-color';

@Component({
  shadow: true,
  styleUrl: 'ods-modal.scss',
  tag: 'ods-modal',
})
export class OdsModal {
  private modalDialog?: HTMLDialogElement;

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) public color: OdsModalColor = ODS_MODAL_COLOR.information;
  @Prop({ reflect: true }) public isDismissible: boolean = true;
  @Prop({ mutable: true, reflect: true }) public isOpen: boolean = false;

  @Event() odsClose!: EventEmitter<void>;
  @Event() odsOpen!: EventEmitter<void>;

  @Method()
  public async close(): Promise<void> {
    document.body.style.removeProperty('overflow');

    if (this.modalDialog) {
      this.modalDialog.classList.add('ods-modal__dialog--close-animation');

      const onAnimationEnd = (): void => {
        this.isOpen = false;
        this.odsClose.emit();
        this.modalDialog?.classList.remove('ods-modal__dialog--close-animation');
        this.modalDialog?.removeEventListener('animationend', onAnimationEnd);
      };

      this.modalDialog.addEventListener('animationend', onAnimationEnd);
    } else {
      this.isOpen = false;
      this.odsClose.emit();
    }
  }

  @Method()
  public async open(): Promise<void> {
    document.body.style.setProperty('overflow', 'hidden');
    this.isOpen = true;
    this.modalDialog?.focus();
    this.odsOpen.emit();
  }

  @Watch('isOpen')
  handleOpenState(): void {
    if (!this.modalDialog) {
      return;
    }

    if (this.isOpen) {
      return this.modalDialog.showModal?.();
    }

    return this.modalDialog.close?.();
  }

  @Listen('keydown', { target: 'window' })
  onKeyDown(event: KeyboardEvent): void {
    if(event.key === 'Escape' && this.isOpen) {
      event.stopImmediatePropagation();
      event.preventDefault();
      if (this.isDismissible) {
        this.close();
      }
    }
  }

  componentDidLoad(): void {
    if (this.isOpen) {
      document.body.style.setProperty('overflow', 'hidden');
      this.modalDialog?.showModal?.();
      this.modalDialog?.focus();
    }
  }

  disconnectedCallback(): void {
    document.body.style.removeProperty('overflow');
    this.modalDialog?.close?.();
    this.isOpen = false;
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
        <dialog
          class="ods-modal__dialog"
          ref={ (el) => this.modalDialog = el as HTMLDialogElement }
          onClick={ (event) => this.handleBackdropClick(event) }
          part="dialog"
          tabindex={ -1 }>
          <div class={ `ods-modal__dialog__header ods-modal__dialog__header--${this.color}` }>
            {
              this.isDismissible &&
              <ods-button
                class={ `ods-modal__dialog__header__close ods-modal__dialog__header__close--${this.color}` }
                icon={ ODS_ICON_NAME.xmark }
                label=""
                onClick={ () => this.close() }
                size={ ODS_BUTTON_SIZE.xs }
                variant={ ODS_BUTTON_VARIANT.ghost }>
              </ods-button>
            }
          </div>

          <div
            class="ods-modal__dialog__content"
            part="dialog-content">
            <div>
              <slot></slot>
            </div>

            <div class="ods-modal__dialog__content__actions">
              <slot name="actions"></slot>
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
