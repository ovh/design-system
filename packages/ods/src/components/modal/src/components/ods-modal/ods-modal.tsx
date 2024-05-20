import type { FunctionalComponent } from '@stencil/core';
import { Component, Host, Prop, h } from '@stencil/core';
import { ODS_MODAL_COLOR, type OdsModalColor } from '../../constants/modal-color';
import { ODS_BUTTON_VARIANT } from '../../../../button/src';
import { ODS_ICON_NAME } from '../../../../icon/src';

@Component({
  shadow: true,
  styleUrl: 'ods-modal.scss',
  tag: 'ods-modal',
})
export class OdsModal {
  @Prop({ reflect: true }) public color: OdsModalColor = ODS_MODAL_COLOR.information;
  @Prop({ reflect: true }) public isDismissible: boolean = true;
  @Prop({ reflect: true }) public isOpen: boolean = false;

  render(): FunctionalComponent {
    return (
      <Host class='ods-modal'>
        <div class='ods-modal__backdrop'></div>

        <div class='ods-modal__dialog'>
          <div class={ `ods-modal__dialog__header ods-modal__dialog__header--${this.color}` }>
            {
              this.isDismissible &&
              <ods-button
                class="ods-modal__dialog__header__close"
                icon={ ODS_ICON_NAME.cross }
                // id={ this.copyButtonId }
                label=""
                // onClick={ () => this.copy() }
                variant={ ODS_BUTTON_VARIANT.ghost }>
              </ods-button>
            }
          </div>

          <div class='ods-modal__dialog__content'>
            <slot></slot>
            <div class='ods-modal__dialog__content__actions'>
              <slot name='actions'></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
